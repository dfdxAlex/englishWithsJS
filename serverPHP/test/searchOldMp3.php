<?php

function searchOldMp3($filePath)
{
    // проверить если файл существует, то вернуть его и выйти
    if (file_exists($filePath)) {
      $filePath = 'https://amatordd.webd.pro/amatorDed/DFDX/'.$filePath;
      header('Content-Type: application/json; charset=utf-8');
      // echo $filePath;
      echo json_encode([
          "url" => $filePath,
          "engine" => "",
          "format" => ""
      ]);
      exit;
    }
}