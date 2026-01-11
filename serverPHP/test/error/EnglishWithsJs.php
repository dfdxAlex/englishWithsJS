  <?php

  require_once "ClassNull.php";
  
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