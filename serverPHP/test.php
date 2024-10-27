<?php
namespace class\redaktor;
require "funcii.php";
require "functionDfdx.php"; 
require "class.php";

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


    if (isset($_POST['sound'])) {
        //echo 'Работаем с озвучкой';
        $apiKey = "sk_a0c451bdcbb8b32e659dca5f6fd1b3d5ff33e432e4d57b34";  // Ваш реальный API-ключ
        // $voiceId = "pMsXgVXv3BLzUgSXRplE";  // Идентификатор голоса
        $voiceId = "pNInz6obpgDQGcFmaJgB";  // Идентификатор голоса
        
        $filePath = $_POST['sound'];
        $filePath = str_replace(' ', '', $filePath);
        $filePath = str_replace('\'', '', $filePath);
        $filePath = str_replace('\\', '', $filePath);
        $filePath = str_replace('/', '', $filePath);
        $filePath = str_replace('.', '', $filePath);
        $filePath = str_replace('?', '', $filePath);
        $filePath = str_replace(';', '', $filePath);
        $filePath = str_replace(':', '', $filePath);
        $filePath = strtolower($filePath);
        $filePath = 'sound'.DIRECTORY_SEPARATOR.$filePath;
        $filePath = substr($filePath, 0, 200);
        $filePath .= '.mp3';
        // проверить если файл существует, то вернуть его и выйти
        if (file_exists($filePath)) {
          $filePath = 'https://amatordd.webd.pro/amatorDed/DFDX/'.$filePath;
          echo $filePath;
          return $filePath;
        }

        // идея работала до переноса воспроизведения на целое
        // предложение
        // $messageSong = str_replace('...', 'ааа', $_POST['sound']);
        $messageSong = $_POST['sound'];
        //Инициализирует сессию cURL
        $curl = curl_init();
        
        //Подготовка данных
        $data = [
          "text" => $messageSong,
          "language" => "en",
          "model_id" => "eleven_monolingual_v1",
          "voice_settings" => [
            "stability" => 0.1,
            "similarity_boost" => 0.3,
          ]
        ];
        
        // Данные для запроссов
        // CURLOPT_URL - адрес
        // CURLOPT_RETURNTRANSFER - вернуть данные в программу
        // CURLOPT_POST - будет пост запрос
        // CURLOPT_HTTPHEADER - заголовки
        // CURLOPT_POSTFIELDS - данные уходят в джейсоне
        curl_setopt_array($curl, [
          CURLOPT_URL => "https://api.elevenlabs.io/v1/text-to-speech/{$voiceId}",
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 30,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "POST",
          CURLOPT_HTTPHEADER => [
            "Content-Type: application/json",
            "xi-api-key: $apiKey"
          ],
          CURLOPT_POSTFIELDS => json_encode($data)
        ]);
        /////////////////////////////////////////////////////////
        // Выполняет запрос и получает ответ от сервера.
        $response = curl_exec($curl);
        // Получаем HTTP статус
        $httpStatus = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        // Проверяет, произошла ли ошибка во время выполнения запроса.  
        $err = curl_error($curl);
        // Закрытие сессии cURL
        curl_close($curl);
        //////////////////////////////////////////////////////////
        if ($err) {
            echo "cURL Error #: " . $err;
        } else {
                // Сохраняем аудиофайл
                file_put_contents($filePath, $response);
        
                $filePath = 'https://amatordd.webd.pro/amatorDed/DFDX/'.$filePath;
                echo $filePath;
        }
    }




