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

  // проверка таблицы englishWithsJs
  class EnglishWithsJs
  {
      use \class\redaktor\interface\trait\TraitInterfaceWorkToBd;
     
      public function __construct()
      {
          if (!$this->searcNameTablic('english_withs_js')) {
            $zapros="CREATE TABLE english_withs_js(error_str VARCHAR(100))";
            $this->zaprosSQL($zapros);
           }

           $this->name = '';
      }

      public function setName($name)
      {
        $this->name = $name;
      }

      public function saveError()
      {
        $rez = $this->siearcSlova('english_withs_js','error_str',$this->name);
        if ($rez) return 'saveError:Cлово есть в БД';

        $zapros='INSERT INTO english_withs_js(error_str) VALUES ("'.$this->name.'")';
        $rez=$this->zaprosSQL($zapros);
        return 'saveError:Слова нет в БД';
      }
  }


if ($_SERVER['REQUEST_METHOD'] === 'POST') 
    if (isset($_POST['name'])) {
      $name = $_POST['name']; // Доступ к переданному параметру 'name'
      // Обработка данных  

      $obj = new EnglishWithsJs();
      $obj->setName($name);  

      echo 'Данные успешно получены!  '.$obj->saveError();
    }
    if (isset($_POST['sound'])) {
        //echo 'Работаем с озвучкой';
        $apiKey = "sk_a0c451bdcbb8b32e659dca5f6fd1b3d5ff33e432e4d57b34";  // Ваш реальный API-ключ
        $voiceId = "pMsXgVXv3BLzUgSXRplE";  // Идентификатор голоса
        
        $filePath = $_POST['sound'];
        $filePath = str_replace(' ', '', $filePath);
        $filePath = str_replace('\'', '', $filePath);
        $filePath = str_replace('.', '', $filePath);
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
        // echo $filePath;

        $messageSong = str_replace('...', 'ааа', $_POST['sound']);
        // echo $messageSong;

        //Инициализирует сессию cURL
        $curl = curl_init();
        
        //Подготовка данных
        $data = [
          "text" => $messageSong,
          "voice_settings" => [
            "stability" => 0.1,
            "similarity_boost" => 0.3
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
          CURLOPT_POST => true,
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
                // Выводим сообщение об успешной генерации
                //echo "Audio file successfully saved: <a href='$filePath'>$filePath</a>";
        }
    }
