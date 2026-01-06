<?php

require_once "getKeySpeechify.php";
require_once "randomeNameForSpeechify.php";


function setHttpForSpeechify($text)
{
    $voiceId = randomeNameForSpeechify();
    $data = [
        "input" => $text,
        "voice_id" => $voiceId,
        "audio_format" => "mp3"   // WAV вместо MP3
    ];

    $key = getKeySpeechify(); // твой API-ключ

    $headers = [
        "Authorization: Bearer {$key}", // обязательно Bearer
        "Content-Type: application/json"
    ];

    return [$data, $headers];
}
