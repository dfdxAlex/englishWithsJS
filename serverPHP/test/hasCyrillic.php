<?php

function hasCyrillic($soundStr)
{
    if (preg_match('/[\p{Cyrillic}]/u', $soundStr)) {
        header('Content-Type: application/json; charset=utf-8');
        // echo json_encode([
        //     'status' => 'error',
        //     'message' => 'Cyrillic is not supported'
        // ]);
    echo json_encode([
        "url" => "Cyrillic is not supported",
        "engine" => "",   // или "gemini", "google", "azure"
        "format" => ""
    ]);
        exit;
    }
}