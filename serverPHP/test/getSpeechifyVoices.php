<?php
require_once "getKeySpeechify.php";

/**
 * Получает список голосов Speechify через REST API.
 *
 * @param bool $filterWav - если true, возвращает только голоса с поддержкой WAV
 * @return array - ассоциативный массив [voice_id => voice_name]
 */
function getSpeechifyVoices($filterWav = true) {
    $key = getKeySpeechify();

    $ch = curl_init("https://api.sws.speechify.com/v1/voices");
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Bearer {$key}",
        "Accept: application/json",
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode !== 200) {
        throw new Exception("Ошибка при получении голосов: HTTP $httpCode, ответ: $response");
    }

    $data = json_decode($response, true);

    // Если есть ключ 'voices', берём его, иначе пустой массив
    $voices = $data['voices'] ?? [];

    // Фильтр по WAV и формируем ассоциативный массив
    $result = [];
    foreach ($voices as $voice) {
        $formats = isset($voice['supported_formats']) && is_array($voice['supported_formats'])
            ? $voice['supported_formats']
            : [];

        if ($filterWav && !in_array("wav", $formats)) {
            continue;
        }

        $voiceId = $voice['id'] ?? null;
        $voiceName = $voice['name'] ?? "Без имени";

        if ($voiceId) {
            $result[$voiceId] = $voiceName;
        }
    }

    return $result;
}

