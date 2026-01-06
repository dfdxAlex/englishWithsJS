<?php

function setHttpForGeminy($text)
{
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

return [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS => json_encode($data),
    CURLOPT_TIMEOUT => 60
];
}