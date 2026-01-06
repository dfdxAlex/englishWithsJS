<?php

require_once "getKeyGeminy.php";

function getUrlForGeminy()
{
    $apiKey = getKeyGeminy();
    $model = 'gemini-2.5-pro-preview-tts';
    return "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key={$apiKey}";
}