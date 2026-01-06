<?php
// namespace class\redaktor;
require "funcii.php";
require "functionDfdx.php"; 
require "class.php";
require_once "test/hasCyrillic.php";
require_once "test/normalizeNameSound.php";
require_once "test/searchOldMp3.php";

// use function class\redaktor\test\hasCyrillic;


// Разрешает запросы с любого источника
header("Access-Control-Allow-Origin: *"); 
// разрешить только метод POST
header("Access-Control-Allow-Methods: POST");
// разрешить кроссдоменный запрос с заголовком Content-Type
header("Access-Control-Allow-Headers: Content-Type");

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

$apiKey = 'AIzaSyCl-1F2bXLazlFU6eaTWmawlbvuDWZge9g'; // Из Google AI Studio
$model = 'gemini-2.5-flash-preview-tts';
$text = $_POST['sound'];

$data = [
    "contents" => [
        [
            "role" => "user",
            "parts" => [["text" => $text]]
        ]
    ],
    "generationConfig" => [
        "responseModalities" => ["AUDIO"],  // Обязательно для TTS
        "speechConfig" => [
            "voiceConfig" => [
                "prebuiltVoiceConfig" => [
                    "voiceName" => "Puck"  // Энергичный голос; варианты: Kore, Zephyr, Fenrir и т.д.
                ]
            ]
        ]
    ]
];

$url = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key={$apiKey}";

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS => json_encode($data),
    CURLOPT_TIMEOUT => 60
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
    echo "Ошибка: " . $response;
    die();
}

$json = json_decode($response, true);
$base64Audio = $json['candidates'][0]['content']['parts'][0]['inlineData']['data'];

// Декодируем PCM
$pcmData = base64_decode($base64Audio);

// Добавляем WAV-заголовок (24kHz, 16-bit, mono)
$wavHeader = "\x52\x49\x46\x46" . pack('V', strlen($pcmData) + 36) . "\x57\x41\x56\x45\x66\x6d\x74\x20\x10\x00\x00\x00\x01\x00\x01\x00\x80\x5E\x00\x00\x00\xBC\x00\x00\x02\x00\x10\x00\x64\x61\x74\x61" . pack('V', strlen($pcmData));
$wavData = $wavHeader . $pcmData;

file_put_contents($filePathWav, $wavData);
echo "Аудио сохранено как output.wav (проиграйте в любом плеере)";


echo "https://amatordd.webd.pro/amatorDed/DFDX/{$filePathWav}.wav";
}



