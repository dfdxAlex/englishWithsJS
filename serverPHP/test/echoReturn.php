<?php 

function echoReturn($message, $engine, $format)
{
    echo json_encode([
        "url" => $message,
        "engine" => $engine,
        "format" => $format
    ]);
}