<?php

require_once "ClassNull.php";

// Класс для хранения и обработки сообщений об ошибках,
// отправленных пользователями из английского тренажёра.
class EnglishWithsJs
{
    // Набор готовых методов для работы с БД.
    use \class\redaktor\interface\trait\TraitInterfaceWorkToBd;

    public function __construct()
    {
        // Служебный объект для формирования ответа фронтенду.
        $this->rezult = new ClassNull;

        // При первом запуске создать таблицу для хранения ошибок,
        // если она ещё отсутствует в базе данных.
        if (!$this->searcNameTablic('english_withs_js')) {
            $zapros = "CREATE TABLE english_withs_js(error_str LONGTEXT) 
                       CHARACTER SET utf8mb4
                       COLLATE utf8mb4_unicode_ci
                       ";
            $this->zaprosSQL($zapros);
        }

        // Текущее сообщение об ошибке.
        $this->name = '';
    }

    // Получить и подготовить сообщение об ошибке,
    // пришедшее от JavaScript.
    public function setName($name)
    {
        // Сохранить исходное значение для отладки.
        $this->rezult->name = $name;

        // Исходная строка после декодирования URL.
        $this->nameOrigin = urldecode($name);

        // Версия строки с экранированием спецсимволов.
        $this->name = addslashes(urldecode($name));

        // Сохранить промежуточные данные в ответе.
        $this->rezult->nameDecode = $this->name;
        $this->rezult->nameOrigin = $this->nameOrigin;
    }

    // Сохранить сообщение об ошибке в БД.
    public function saveError()
    {
        $con = \class\redaktor\DatabaseConn::dBConnection()->getCon();

        // Проверить, существует ли уже такая запись.
        // searchSlovaTwo() возвращает найденную запись либо false.
        $rez = $this->searchSlovaTwo(
            'english_withs_js',
            'error_str',
            $this->nameOrigin
        );

        $this->rezult->zapros = $rez;
        $this->rezult->rez = 'saveError: Cлово есть в БД';

        // Если такая ошибка уже сохранена,
        // повторно в таблицу её не записываем.
        if ($rez) {
            return json_encode($this->rezult);
        }

        // Подготовить строку для записи в БД.
        $yourString = mysqli_real_escape_string(
            $con,
            $this->nameOrigin
        );

        // Добавить новую запись об ошибке.
        $query = "
            INSERT INTO english_withs_js (error_str)
            VALUES ('$yourString')
        ";

        mysqli_query($con, $query);

        $this->rezult->rez = 'saveError: Слова нет в БД';

        return json_encode($this->rezult);
    }

    // Получить все сохранённые сообщения об ошибках.
    public function getErrorList()
    {
        $con = \class\redaktor\DatabaseConn::dBConnection()->getCon();

        $query = "SELECT error_str FROM english_withs_js";
        $result = mysqli_query($con, $query);

        $data = [];

        // Собрать все записи в массив.
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row['error_str'];
        }

        // Вернуть массив сообщений в JSON.
        return json_encode($data, JSON_UNESCAPED_UNICODE);
    }

    public function getErrorCount()
    {
        $con = \class\redaktor\DatabaseConn::dBConnection()->getCon();

        $query = "SELECT COUNT(*) AS count FROM english_withs_js";

        $result = mysqli_query($con, $query);

        $row = mysqli_fetch_assoc($result);

        return json_encode($row);
    }
}