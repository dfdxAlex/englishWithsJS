<?php

function randomeNameForSpeechify()
{
    $arrayForName = ['evelyn','stacy','monica','lindsey','erin','emily','lisa','oliver','george'];
    $randomNumber = rand(0, 8); // случайное число от 0 до 8 включительно
    return $arrayForName[$randomNumber];
}