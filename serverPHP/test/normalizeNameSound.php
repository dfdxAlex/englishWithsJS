<?php

function normalizeNameSound($soundStr)
{

        $soundStr = preg_replace('/\s+/', '', $soundStr);

        $filePath = $soundStr;

        $filePath = str_replace(' ', '', $filePath);
        $filePath = str_replace('\'', '', $filePath);
        $filePath = str_replace('\\', '', $filePath);
        $filePath = str_replace('/', '', $filePath);
        $filePath = str_replace('.', '', $filePath);
        $filePath = str_replace('?', '', $filePath);
        $filePath = str_replace(';', '', $filePath);
        $filePath = str_replace(':', '', $filePath);
        $filePath = str_replace("'", '', $filePath);
        $filePath = str_replace(",", '', $filePath);
        $filePath = strtolower($filePath);
        $filePath = 'sound'.DIRECTORY_SEPARATOR.$filePath;
        $filePath = substr($filePath, 0, 200);
        $filePathWav = $filePath.'.wav';
        $filePath .= '.mp3';
        return [$filePath, $filePathWav];
}