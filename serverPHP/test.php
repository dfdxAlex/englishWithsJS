<?php
// namespace class\redaktor;
require "funcii.php";
require "functionDfdx.php"; 
require "class.php";
require_once "test/hasCyrillic.php";
require_once "test/normalizeNameSound.php";
require_once "test/searchOldMp3.php";

// Для Geminy
require_once "test/getUrlForGeminy.php";
require_once "test/setHttpForGeminy.php";

// Speechify

require_once "test/getUrlForSpeechify.php";
require_once "test/setHttpForSpeechify.php";
require_once "test/getSpeechifyVoices.php";


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Для preflight-запроса (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// пустой класс для метода saveError
// данный класс наполнится свойствами и отправится как ответ
// работает в системе отправки Ошибок
class ClassNull
{

}

  // проверка таблицы englishWithsJs
  class EnglishWithsJs
  {
      use \class\redaktor\interface\trait\TraitInterfaceWorkToBd;
     
      public function __construct()
      {
          $this->rezult = new ClassNull;

          if (!$this->searcNameTablic('english_withs_js')) {
            $zapros="CREATE TABLE english_withs_js(error_str VARCHAR(100))";
            $this->zaprosSQL($zapros);
           }

           $this->name = '';
      }

      public function setName($name)
      {
        $this->rezult->name = $name;

        $this->nameOrigin = urldecode($name);
        $this->name = addslashes(urldecode($name));
        
        $this->rezult->nameDecode = $this->name;
        $this->rezult->nameOrigin = $this->nameOrigin;
      }

      public function saveError()
      {
        $con = \class\redaktor\DatabaseConn::dBConnection()->getCon();
        //file_put_contents('debug.log', "старт метода" . "\n", FILE_APPEND);
        //Если последний параметр, четвертый true, то функция вернет объект с информацией
        $rez = $this->searchSlovaTwo('english_withs_js','error_str',$this->nameOrigin);

        $this->rezult->zapros = $rez;
        $this->rezult->rez = 'saveError:Cлово есть в БД';

        if ($rez) return json_encode($this->rezult);
       
        // отдельная запись в БД
        // принцип подготовленной записи
        $yourString = mysqli_real_escape_string($con, $this->nameOrigin); // Экранирование строки
        $query = "INSERT INTO english_withs_js (error_str) VALUES ('$yourString')";
        mysqli_query($con, $query);

        $this->rezult->rez = 'saveError:Слова нет в БД';
        return json_encode($this->rezult);
      }
  }


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['name'])) {
      $name = $_POST['name']; // Доступ к переданному параметру 'name'
      // Обработка данных  
      $obj = new EnglishWithsJs();
      $obj->setName($name);  

      // Установка заголовка для JSON
      echo $obj->saveError();
    }
  }

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
// Работает с ElevenLabs TTS (новая модель) и сохраняет MP3

if (isset($_POST['sound'])) {

// проверка есть ли кириллица
hasCyrillic($_POST['sound']);

// нормализовать имя файла из текста
[$filePath, $filePathWav] = normalizeNameSound($_POST['sound']);

// поиск файлов с озвучкой
searchOldMp3($filePath);
searchOldMp3($filePathWav);

// Инициализаровать cUrl запрос и получить дескриптор
$url = getUrlForGeminy();
$ch = curl_init($url);

// Настроить запрос для Geminy
curl_setopt_array($ch, setHttpForGeminy($_POST['sound']));

// отправить запрос
$response = curl_exec($ch);

// Узнать код ответа
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

if ($httpCode === 200) {
    $json = json_decode($response, true);
    $base64Audio = $json['candidates'][0]['content']['parts'][0]['inlineData']['data'];
    // Декодируем PCM
    $pcmData = base64_decode($base64Audio);
    // Добавляем WAV-заголовок (24kHz, 16-bit, mono)
    $wavHeader = "\x52\x49\x46\x46" . pack('V', strlen($pcmData) + 36) . "\x57\x41\x56\x45\x66\x6d\x74\x20\x10\x00\x00\x00\x01\x00\x01\x00\x80\x5E\x00\x00\x00\xBC\x00\x00\x02\x00\x10\x00\x64\x61\x74\x61" . pack('V', strlen($pcmData));
    $wavData = $wavHeader . $pcmData;
    file_put_contents($filePathWav, $wavData);

    // Ждать пол секунды чтобы новый файл успел записаться
    usleep(1000000); // 0.5 секунды

    // echo "https://amatordd.webd.pro/amatorDed/DFDX/{$filePathWav}";
    echo json_encode([
        "url" => "https://amatordd.webd.pro/amatorDed/DFDX/{$filePathWav}",
        "engine" => "Geminy",   // или "gemini", "google", "azure"
        "format" => "wav"
    ]);


} else if ($httpCode === 429) {

    // Инициализаровать cUrl запрос и получить дескриптор
    $url = getUrlForSpeechify();
    $ch = curl_init($url);

    [$data, $headers] = setHttpForSpeechify($_POST['sound']);
    // Настроить запрос для Geminy
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    $response = curl_exec($ch);
    curl_close($ch);

    // Узнать код ответа
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    if ($httpCode === 200) {
      $json = json_decode($response, true);      

      if (!empty($json['audio_data'])) {
          $mp3Data = base64_decode($json['audio_data']);
          file_put_contents($filePath, $mp3Data);

          // Ждать пол секунды чтобы новый файл успел записаться
          usleep(1000000); // 0.5 секунды

          echo json_encode([
              "url" => "https://amatordd.webd.pro/amatorDed/DFDX/{$filePath}",
              "engine" => "Speechify",   // или "gemini", "google", "azure"
              "format" => "mp3"
          ]);

      } else {
          echo "Ошибка: audio_data нет в ответе";
          var_dump($json); // на всякий случай посмотреть весь ответ
      }
    }

    
} else if ($httpCode === 429) {
  
    echo "https://429";
}





}



