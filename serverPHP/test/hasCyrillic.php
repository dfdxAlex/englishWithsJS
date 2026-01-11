<?php

require_once "echoReturn.php";

function hasCyrillic($soundStr)
{
    if (preg_match('/[\p{Cyrillic}]/u', $soundStr)) {
        header('Content-Type: application/json; charset=utf-8');
        echoReturn('Cyrillic is not supported', '', '');
        exit;
    }
}