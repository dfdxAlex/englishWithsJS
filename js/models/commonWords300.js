const commonWords300 = [
    ['accept', 'принимать', 'отказывать', 'отвергать', 'отклонять', '', '', ''],
    ['admit', 'признавать', 'отрицать', 'скрывать', 'отвергать', '', '', ''],
    ['advise', 'советовать', 'отговаривать', 'игнорировать', 'рекомендовать', '', '', ''],
    ['agree', 'согласен', 'несогласен', 'спорить', 'отказываться', '', '', ''],
    ['allow', 'разрешать', 'запрещать', 'ограничивать', 'отказываться', '', '', ''],
    ['answer', 'отвечать', 'игнорировать', 'скрывать', 'молчать', '', '', ''],
    ['ask', 'спрашивать', 'отвечать', 'игнорировать', 'отказывать', '', '', ''],
    ['build', 'строить', 'разрушать', 'разбирать', 'уничтожать', '', '', ''],
    ['call', 'звонить', 'игнорировать', 'отклонять', 'отвечать', '', '', ''],
    ['choose', 'выбирать', 'отказываться', 'игнорировать', 'определять', '', '', ''],
    ['clean', 'убирать', 'грязнить', 'загрязнять', 'пачкать', '', '', ''],
    ['come', 'приходить', 'уходить', 'оставаться', 'уезжать', '', '', ''],
    ['continue', 'продолжать', 'переставать', 'остановиться', 'прекращать', '', '', ''],
    ['cook', 'готовить', 'есть', 'покупать', 'выбирать', '', '', ''],
    ['create', 'создавать', 'разрушать', 'уничтожать', 'изменять', '', '', ''],
    ['decide', 'решать', 'отказываться', 'игнорировать', 'обсуждать', '', '', ''],
    ['describe', 'описывать', 'игнорировать', 'скрывать', 'забывать', '', '', ''],
    ['discuss', 'обсуждать', 'молчать', 'избегать', 'отклонять', '', '', ''],
    ['do', 'делать', 'избегать', 'игнорировать', 'бездействовать', '', '', ''],
    ['enjoy', 'наслаждаться', 'терпеть', 'избегать', 'не любить', '', '', ''],
    ['find', 'находить', 'терять', 'скрывать', 'забывать', '', '', ''],
    ['finish', 'заканчивать', 'начинать', 'прекращать', 'отменять', '', '', ''],
    ['follow', 'следовать', 'игнорировать', 'отклонять', 'уходить', '', '', ''],
    ['forget', 'забывать', 'помнить', 'вспоминать', 'запоминать', '', '', ''],
    ['give', 'давать', 'брать', 'отнимать', 'забирать', '', '', ''],
    ['go', 'идти', 'остановиться', 'оставаться', 'приходить', '', '', ''],
    ['help', 'помогать', 'отказывать', 'игнорировать', 'мешать', '', '', ''],
    ['hope', 'надеяться', 'отчаиваться', 'забывать', 'беспокоиться', '', '', ''],
    ['invite', 'приглашать', 'отказывать', 'игнорировать', 'просить', '', '', ''],
    ['know', 'знать', 'не знать', 'изучать', 'изменять', '', '', ''],
    ['leave', 'уходить', 'оставаться', 'приезжать', 'входить', '', '', ''],
    ['like', 'нравиться', 'не нравиться', 'избегать', 'отказываться', '', '', ''],
    ['listen', 'слушать', 'игнорировать', 'говорить', 'молчать', '', '', ''],
    ['make', 'делать', 'уничтожать', 'изменять', 'создавать', '', '', ''],
    ['meet', 'встречать', 'уходить', 'избегать', 'провожать', '', '', ''],
    ['move', 'двигаться', 'остановиться', 'замирать', 'прекращать', '', '', ''],
    ['need', 'нуждаться', 'отказаться', 'игнорировать', 'избегать', '', '', ''],
    ['offer', 'предлагать', 'отклонять', 'отказываться', 'принять', '', '', ''],
    ['open', 'открывать', 'закрывать', 'скрывать', 'закрывать', '', '', ''],
    ['play', 'играть', 'работать', 'избегать', 'отдыхать', '', '', ''],
    ['prefer', 'предпочитать', 'избегать', 'отказываться', 'нравиться', '', '', ''],
    ['prepare', 'готовить', 'забывать', 'игнорировать', 'оставлять', '', '', ''],
    ['provide', 'предоставлять', 'забирать', 'отказаться', 'ограничивать', '', '', ''],
    ['read', 'читать', 'игнорировать', 'писать', 'забывать', '', '', ''],
    ['reply', 'отвечать', 'игнорировать', 'молчать', 'запрашивать', '', '', ''],
    ['run', 'бежать', 'идти', 'остановиться', 'замедлять', '', '', ''],
    ['show', 'показывать', 'скрывать', 'игнорировать', 'запрещать', '', '', ''],
    ['sing', 'петь', 'молчать', 'говорить', 'танцевать', '', '', ''],
    ['start', 'начинать', 'заканчивать', 'прекращать', 'остановить', '', '', ''],
    ['stop', 'останавливать', 'продолжать', 'начинать', 'двигаться', '', '', ''],
    ['talk', 'говорить', 'молчать', 'слушать', 'обсуждать', '', '', ''],
    ['understand', 'понимать', 'не понимать', 'игнорировать', 'забывать', '', '', ''],
    ['use', 'использовать', 'игнорировать', 'отказываться', 'избегать', '', '', ''],
    ['wait', 'ждать', 'двигаться', 'идти', 'оставаться', '', '', ''],
    ['want', 'хотеть', 'отказываться', 'игнорировать', 'нуждаться', '', '', ''],
    ['work', 'работать', 'отдыхать', 'игнорировать', 'заниматься', '', '', ''],
    ['accept', 'принимать', 'отказываться', 'отвергать', 'отклонять', '', '', ''],
    ['admit', 'признавать', 'отрицать', 'скрывать', 'отвергать', '', '', ''],
    ['advise', 'советовать', 'отговаривать', 'игнорировать', 'рекомендовать', '', '', ''],
    ['allow', 'разрешать', 'запрещать', 'ограничивать', 'отказываться', '', '', ''],
    ['answer', 'отвечать', 'игнорировать', 'скрывать', 'молчать', '', '', ''],
    ['ask', 'спрашивать', 'отвечать', 'игнорировать', 'отказывать', '', '', ''],
    ['build', 'строить', 'разрушать', 'разбирать', 'уничтожать', '', '', ''],
    ['call', 'звонить', 'игнорировать', 'отклонять', 'отвечать', '', '', ''],
    ['choose', 'выбирать', 'отказываться', 'игнорировать', 'определять', '', '', ''],
    ['clean', 'убирать', 'грязнить', 'загрязнять', 'пачкать', '', '', ''],
    ['come', 'приходить', 'уходить', 'оставаться', 'уезжать', '', '', ''],
    ['continue', 'продолжать', 'переставать', 'остановиться', 'прекращать', '', '', ''],
    ['cook', 'готовить', 'есть', 'покупать', 'выбирать', '', '', ''],
    ['create', 'создавать', 'разрушать', 'уничтожать', 'изменять', '', '', ''],
    ['decide', 'решать', 'отказываться', 'игнорировать', 'обсуждать', '', '', ''],
    ['describe', 'описывать', 'игнорировать', 'скрывать', 'забывать', '', '', ''],
    ['discuss', 'обсуждать', 'молчать', 'избегать', 'отклонять', '', '', ''],
    ['do', 'делать', 'избегать', 'игнорировать', 'бездействовать', '', '', ''],
    ['enjoy', 'наслаждаться', 'терпеть', 'избегать', 'не любить', '', '', ''],
    ['find', 'находить', 'терять', 'скрывать', 'забывать', '', '', ''],
    ['finish', 'заканчивать', 'начинать', 'прекращать', 'отменять', '', '', ''],
    ['follow', 'следовать', 'игнорировать', 'отклонять', 'уходить', '', '', ''],
    ['forget', 'забывать', 'помнить', 'вспоминать', 'запоминать', '', '', ''],
    ['give', 'давать', 'брать', 'отнимать', 'забирать', '', '', ''],
    ['go', 'идти', 'остановиться', 'оставаться', 'приходить', '', '', ''],
    ['help', 'помогать', 'отказывать', 'игнорировать', 'мешать', '', '', ''],
    ['hope', 'надеяться', 'отчаиваться', 'забывать', 'беспокоиться', '', '', ''],
    ['invite', 'приглашать', 'отказывать', 'игнорировать', 'просить', '', '', ''],
    ['know', 'знать', 'не знать', 'изучать', 'изменять', '', '', ''],
    ['leave', 'уходить', 'оставаться', 'приезжать', 'входить', '', '', ''],
    ['like', 'нравиться', 'не нравиться', 'избегать', 'отказываться', '', '', ''],
    ['listen', 'слушать', 'игнорировать', 'говорить', 'молчать', '', '', ''],
    ['make', 'делать', 'уничтожать', 'изменять', 'создавать', '', '', ''],
    ['meet', 'встречать', 'уходить', 'избегать', 'провожать', '', '', ''],
    ['move', 'двигаться', 'остановиться', 'замирать', 'прекращать', '', '', ''],
    ['need', 'нуждаться', 'отказаться', 'игнорировать', 'избегать', '', '', ''],
    ['offer', 'предлагать', 'отклонять', 'отказываться', 'принять', '', '', ''],
    ['open', 'открывать', 'закрывать', 'скрывать', 'закрывать', '', '', ''],
    ['play', 'играть', 'работать', 'избегать', 'отдыхать', '', '', ''],
    ['prefer', 'предпочитать', 'избегать', 'отказываться', 'нравиться', '', '', ''],
    ['prepare', 'готовить', 'забывать', 'игнорировать', 'оставлять', '', '', ''],
    ['provide', 'предоставлять', 'забирать', 'отказаться', 'ограничивать', '', '', ''],
    ['read', 'читать', 'игнорировать', 'писать', 'забывать', '', '', ''],
    ['reply', 'отвечать', 'игнорировать', 'молчать', 'запрашивать', '', '', ''],
    ['run', 'бежать', 'идти', 'остановиться', 'замедлять', '', '', ''],
    ['show', 'показывать', 'скрывать', 'игнорировать', 'запрещать', '', '', ''],
    ['sing', 'петь', 'молчать', 'говорить', 'танцевать', '', '', ''],
    ['start', 'начинать', 'заканчивать', 'прекращать', 'остановить', '', '', ''],
    ['stop', 'останавливать', 'продолжать', 'начинать', 'двигаться', '', '', ''],
    ['talk', 'говорить', 'молчать', 'слушать', 'обсуждать', '', '', ''],
    ['understand', 'понимать', 'не понимать', 'игнорировать', 'забывать', '', '', ''],
    ['use', 'использовать', 'игнорировать', 'отказываться', 'избегать', '', '', ''],
    ['wait', 'ждать', 'двигаться', 'идти', 'оставаться', '', '', ''],
    ['want', 'хотеть', 'отказываться', 'игнорировать', 'нуждаться', '', '', ''],
    ['work', 'работать', 'отдыхать', 'игнорировать', 'заниматься', '', '', ''],
    ['accept', 'принимать', 'отказываться', 'отвергать', 'отклонять', '', '', ''],
    ['admit', 'признавать', 'отрицать', 'скрывать', 'отвергать', '', '', ''],
    ['advise', 'советовать', 'отговаривать', 'игнорировать', 'рекомендовать', '', '', ''],
    ['allow', 'разрешать', 'запрещать', 'ограничивать', 'отказываться', '', '', ''],
    ['answer', 'отвечать', 'игнорировать', 'скрывать', 'молчать', '', '', ''],
    ['ask', 'спрашивать', 'отвечать', 'игнорировать', 'отказывать', '', '', ''],
    ['build', 'строить', 'разрушать', 'разбирать', 'уничтожать', '', '', ''],
    ['call', 'звонить', 'игнорировать', 'отклонять', 'отвечать', '', '', ''],
    ['choose', 'выбирать', 'отказываться', 'игнорировать', 'определять', '', '', ''],
    ['clean', 'убирать', 'грязнить', 'загрязнять', 'пачкать', '', '', ''],
    ['come', 'приходить', 'уходить', 'оставаться', 'уезжать', '', '', ''],
    ['continue', 'продолжать', 'переставать', 'остановиться', 'прекращать', '', '', ''],
    ['cook', 'готовить', 'есть', 'покупать', 'выбирать', '', '', ''],
    ['create', 'создавать', 'разрушать', 'уничтожать', 'изменять', '', '', ''],
    ['decide', 'решать', 'отказываться', 'игнорировать', 'обсуждать', '', '', ''],
    ['describe', 'описывать', 'игнорировать', 'скрывать', 'забывать', '', '', ''],
    ['discuss', 'обсуждать', 'молчать', 'избегать', 'отклонять', '', '', ''],
    ['do', 'делать', 'избегать', 'игнорировать', 'бездействовать', '', '', ''],
    ['enjoy', 'наслаждаться', 'терпеть', 'избегать', 'не любить', '', '', ''],
    ['find', 'находить', 'терять', 'скрывать', 'забывать', '', '', ''],
    ['finish', 'заканчивать', 'начинать', 'прекращать', 'отменять', '', '', ''],
    ['follow', 'следовать', 'игнорировать', 'отклонять', 'уходить', '', '', ''],
    ['forget', 'забывать', 'помнить', 'вспоминать', 'запоминать', '', '', ''],
    ['give', 'давать', 'брать', 'отнимать', 'забирать', '', '', ''],
    ['go', 'идти', 'остановиться', 'оставаться', 'приходить', '', '', ''],
    ['help', 'помогать', 'отказывать', 'игнорировать', 'мешать', '', '', ''],
    ['hope', 'надеяться', 'отчаиваться', 'забывать', 'беспокоиться', '', '', ''],
    ['invite', 'приглашать', 'отказывать', 'игнорировать', 'просить', '', '', ''],
    ['know', 'знать', 'не знать', 'изучать', 'изменять', '', '', ''],
    ['leave', 'уходить', 'оставаться', 'приезжать', 'входить', '', '', ''],
    ['like', 'нравиться', 'не нравиться', 'избегать', 'отказываться', '', '', ''],
    ['listen', 'слушать', 'игнорировать', 'говорить', 'молчать', '', '', ''],
    ['make', 'делать', 'уничтожать', 'изменять', 'создавать', '', '', ''],
    ['meet', 'встречать', 'уходить', 'избегать', 'провожать', '', '', ''],
    ['move', 'двигаться', 'остановиться', 'замирать', 'прекращать', '', '', ''],
    ['need', 'нуждаться', 'отказаться', 'игнорировать', 'избегать', '', '', ''],
    ['offer', 'предлагать', 'отклонять', 'отказываться', 'принять', '', '', ''],
    ['open', 'открывать', 'закрывать', 'скрывать', 'закрывать', '', '', ''],
    ['play', 'играть', 'работать', 'избегать', 'отдыхать', '', '', ''],
    ['prefer', 'предпочитать', 'избегать', 'отказываться', 'нравиться', '', '', ''],
    ['prepare', 'готовить', 'забывать', 'игнорировать', 'оставлять', '', '', ''],
    ['provide', 'предоставлять', 'забирать', 'отказаться', 'ограничивать', '', '', ''],
    ['read', 'читать', 'игнорировать', 'писать', 'забывать', '', '', ''],
    ['reply', 'отвечать', 'игнорировать', 'молчать', 'запрашивать', '', '', ''],
    ['run', 'бежать', 'идти', 'остановиться', 'замедлять', '', '', ''],
    ['show', 'показывать', 'скрывать', 'игнорировать', 'запрещать', '', '', ''],
    ['sing', 'петь', 'молчать', 'говорить', 'танцевать', '', '', ''],
    ['start', 'начинать', 'заканчивать', 'прекращать', 'остановить', '', '', ''],
    ['stop', 'останавливать', 'продолжать', 'начинать', 'двигаться', '', '', ''],
    ['talk', 'говорить', 'молчать', 'слушать', 'обсуждать', '', '', ''],
    ['understand', 'понимать', 'не понимать', 'игнорировать', 'забывать', '', '', ''],
    ['use', 'использовать', 'игнорировать', 'отказываться', 'избегать', '', '', ''],
    ['wait', 'ждать', 'двигаться', 'идти', 'оставаться', '', '', ''],
    ['want', 'хотеть', 'отказываться', 'игнорировать', 'нуждаться', '', '', ''],
    ['work', 'работать', 'отдыхать', 'игнорировать', 'заниматься', '', '', ''],
    ['accept', 'принимать', 'отказываться', 'отвергать', 'отклонять', '', '', ''],
    ['admit', 'признавать', 'отрицать', 'скрывать', 'отвергать', '', '', ''],
    ['advise', 'советовать', 'отговаривать', 'игнорировать', 'рекомендовать', '', '', ''],
    ['allow', 'разрешать', 'запрещать', 'ограничивать', 'отказываться', '', '', ''],
    ['answer', 'отвечать', 'игнорировать', 'скрывать', 'молчать', '', '', ''],
    ['ask', 'спрашивать', 'отвечать', 'игнорировать', 'отказывать', '', '', ''],
    ['build', 'строить', 'разрушать', 'разбирать', 'уничтожать', '', '', ''],
    ['call', 'звонить', 'игнорировать', 'отклонять', 'отвечать', '', '', ''],
    ['choose', 'выбирать', 'отказываться', 'игнорировать', 'определять', '', '', ''],
    ['clean', 'убирать', 'грязнить', 'загрязнять', 'пачкать', '', '', ''],
    ['come', 'приходить', 'уходить', 'оставаться', 'уезжать', '', '', ''],
    ['continue', 'продолжать', 'переставать', 'остановиться', 'прекращать', '', '', ''],
    ['cook', 'готовить', 'есть', 'покупать', 'выбирать', '', '', ''],
    ['create', 'создавать', 'разрушать', 'уничтожать', 'изменять', '', '', ''],
    ['decide', 'решать', 'отказываться', 'игнорировать', 'обсуждать', '', '', ''],
    ['describe', 'описывать', 'игнорировать', 'скрывать', 'забывать', '', '', ''],
    ['discuss', 'обсуждать', 'молчать', 'избегать', 'отклонять', '', '', ''],
    ['do', 'делать', 'избегать', 'игнорировать', 'бездействовать', '', '', ''],
    ['enjoy', 'наслаждаться', 'терпеть', 'избегать', 'не любить', '', '', ''],
    ['find', 'находить', 'терять', 'скрывать', 'забывать', '', '', ''],
    ['finish', 'заканчивать', 'начинать', 'прекращать', 'отменять', '', '', ''],
    ['follow', 'следовать', 'игнорировать', 'отклонять', 'уходить', '', '', ''],
    ['forget', 'забывать', 'помнить', 'вспоминать', 'запоминать', '', '', ''],
    ['give', 'давать', 'брать', 'отнимать', 'забирать', '', '', ''],
    ['go', 'идти', 'остановиться', 'оставаться', 'приходить', '', '', ''],
    ['help', 'помогать', 'отказывать', 'игнорировать', 'мешать', '', '', ''],
    ['hope', 'надеяться', 'отчаиваться', 'забывать', 'беспокоиться', '', '', ''],
    ['invite', 'приглашать', 'отказывать', 'игнорировать', 'просить', '', '', ''],
    ['know', 'знать', 'не знать', 'изучать', 'изменять', '', '', ''],
    ['leave', 'уходить', 'оставаться', 'приезжать', 'входить', '', '', ''],
    ['like', 'нравиться', 'не нравиться', 'избегать', 'отказываться', '', '', ''],
    ['listen', 'слушать', 'игнорировать', 'говорить', 'молчать', '', '', ''],
    ['make', 'делать', 'уничтожать', 'изменять', 'создавать', '', '', ''],
    ['meet', 'встречать', 'уходить', 'избегать', 'провожать', '', '', ''],
    ['move', 'двигаться', 'остановиться', 'замирать', 'прекращать', '', '', ''],
    ['need', 'нуждаться', 'отказаться', 'игнорировать', 'избегать', '', '', ''],
    ['offer', 'предлагать', 'отклонять', 'отказываться', 'принять', '', '', ''],
    ['open', 'открывать', 'закрывать', 'скрывать', 'закрывать', '', '', ''],
    ['play', 'играть', 'работать', 'избегать', 'отдыхать', '', '', ''],
    ['prefer', 'предпочитать', 'избегать', 'отказываться', 'нравиться', '', '', ''],
    ['prepare', 'готовить', 'забывать', 'игнорировать', 'оставлять', '', '', ''],
    ['provide', 'предоставлять', 'забирать', 'отказаться', 'ограничивать', '', '', ''],
    ['read', 'читать', 'игнорировать', 'писать', 'забывать', '', '', ''],
    ['reply', 'отвечать', 'игнорировать', 'молчать', 'запрашивать', '', '', ''],
    ['run', 'бежать', 'идти', 'остановиться', 'замедлять', '', '', ''],
    ['show', 'показывать', 'скрывать', 'игнорировать', 'запрещать', '', '', ''],
    ['sing', 'петь', 'молчать', 'говорить', 'танцевать', '', '', ''],
    ['start', 'начинать', 'заканчивать', 'прекращать', 'остановить', '', '', ''],
    ['stop', 'останавливать', 'продолжать', 'начинать', 'двигаться', '', '', ''],
    ['talk', 'говорить', 'молчать', 'слушать', 'обсуждать', '', '', ''],
    ['understand', 'понимать', 'не понимать', 'игнорировать', 'забывать', '', '', ''],
    ['use', 'использовать', 'игнорировать', 'отказываться', 'избегать', '', '', ''],
    ['wait', 'ждать', 'двигаться', 'идти', 'оставаться', '', '', ''],
    ['want', 'хотеть', 'отказываться', 'игнорировать', 'нуждаться', '', '', ''],
    ['work', 'работать', 'отдыхать', 'игнорировать', 'заниматься', '', '', ''],
    ['accept', 'принимать', 'отказываться', 'отвергать', 'отклонять', '', '', ''],
    ['admit', 'признавать', 'отрицать', 'скрывать', 'отвергать', '', '', ''],
    ['advise', 'советовать', 'отговаривать', 'игнорировать', 'рекомендовать', '', '', ''],
    ['allow', 'разрешать', 'запрещать', 'ограничивать', 'отказываться', '', '', ''],
    ['answer', 'отвечать', 'игнорировать', 'скрывать', 'молчать', '', '', ''],
    ['ask', 'спрашивать', 'отвечать', 'игнорировать', 'отказывать', '', '', ''],
    ['build', 'строить', 'разрушать', 'разбирать', 'уничтожать', '', '', ''],
    ['call', 'звонить', 'игнорировать', 'отклонять', 'отвечать', '', '', ''],
    ['choose', 'выбирать', 'отказываться', 'игнорировать', 'определять', '', '', ''],
    ['clean', 'убирать', 'грязнить', 'загрязнять', 'пачкать', '', '', ''],
    ['come', 'приходить', 'уходить', 'оставаться', 'уезжать', '', '', ''],
    ['continue', 'продолжать', 'переставать', 'остановиться', 'прекращать', '', '', ''],
    ['cook', 'готовить', 'есть', 'покупать', 'выбирать', '', '', ''],
    ['create', 'создавать', 'разрушать', 'уничтожать', 'изменять', '', '', ''],
    ['decide', 'решать', 'отказываться', 'игнорировать', 'обсуждать', '', '', ''],
    ['describe', 'описывать', 'игнорировать', 'скрывать', 'забывать', '', '', ''],
    ['discuss', 'обсуждать', 'молчать', 'избегать', 'отклонять', '', '', ''],
    ['do', 'делать', 'избегать', 'игнорировать', 'бездействовать', '', '', ''],
    ['enjoy', 'наслаждаться', 'терпеть', 'избегать', 'не любить', '', '', ''],
    ['find', 'находить', 'терять', 'скрывать', 'забывать', '', '', ''],
    ['finish', 'заканчивать', 'начинать', 'прекращать', 'отменять', '', '', ''],
    ['follow', 'следовать', 'игнорировать', 'отклонять', 'уходить', '', '', ''],
    ['forget', 'забывать', 'помнить', 'вспоминать', 'запоминать', '', '', ''],
    ['give', 'давать', 'брать', 'отнимать', 'забирать', '', '', ''],
    ['go', 'идти', 'остановиться', 'оставаться', 'приходить', '', '', ''],
    ['help', 'помогать', 'отказывать', 'игнорировать', 'мешать', '', '', ''],
    ['hope', 'надеяться', 'отчаиваться', 'забывать', 'беспокоиться', '', '', ''],
    ['invite', 'приглашать', 'отказывать', 'игнорировать', 'просить', '', '', ''],
    ['know', 'знать', 'не знать', 'изучать', 'изменять', '', '', ''],
    ['leave', 'уходить', 'оставаться', 'приезжать', 'входить', '', '', ''],
    ['like', 'нравиться', 'не нравиться', 'избегать', 'отказываться', '', '', ''],
    ['listen', 'слушать', 'игнорировать', 'говорить', 'молчать', '', '', ''],
    ['make', 'делать', 'уничтожать', 'изменять', 'создавать', '', '', ''],
    ['meet', 'встречать', 'уходить', 'избегать', 'провожать', '', '', ''],
    ['move', 'двигаться', 'остановиться', 'замирать', 'прекращать', '', '', ''],
    ['need', 'нуждаться', 'отказаться', 'игнорировать', 'избегать', '', '', ''],
    ['offer', 'предлагать', 'отклонять', 'отказываться', 'принять', '', '', ''],
    ['open', 'открывать', 'закрывать', 'скрывать', 'закрывать', '', '', ''],
    ['play', 'играть', 'работать', 'избегать', 'отдыхать', '', '', ''],
    ['prefer', 'предпочитать', 'избегать', 'отказываться', 'нравиться', '', '', ''],
    ['prepare', 'готовить', 'забывать', 'игнорировать', 'оставлять', '', '', ''],
    ['provide', 'предоставлять', 'забирать', 'отказаться', 'ограничивать', '', '', ''],
    ['read', 'читать', 'игнорировать', 'писать', 'забывать', '', '', ''],
    ['reply', 'отвечать', 'игнорировать', 'молчать', 'запрашивать', '', '', ''],
    ['run', 'бежать', 'идти', 'остановиться', 'замедлять', '', '', ''],
    ['show', 'показывать', 'скрывать', 'игнорировать', 'запрещать', '', '', ''],
    ['sing', 'петь', 'молчать', 'говорить', 'танцевать', '', '', ''],
    ['start', 'начинать', 'заканчивать', 'прекращать', 'остановить', '', '', ''],
    ['stop', 'останавливать', 'продолжать', 'начинать', 'двигаться', '', '', ''],
    ['talk', 'говорить', 'молчать', 'слушать', 'обсуждать', '', '', ''],
    ['understand', 'понимать', 'не понимать', 'игнорировать', 'забывать', '', '', ''],
    ['use', 'использовать', 'игнорировать', 'отказываться', 'избегать', '', '', ''],
    ['wait', 'ждать', 'двигаться', 'идти', 'оставаться', '', '', ''],
    ['want', 'хотеть', 'отказываться', 'игнорировать', 'нуждаться', '', '', ''],
    ['work', 'работать', 'отдыхать', 'игнорировать', 'заниматься', '', '', ''],
    ['accept', 'принимать', 'отказываться', 'отвергать', 'отклонять', '', '', ''],
    ['admit', 'признавать', 'отрицать', 'скрывать', 'отвергать', '', '', ''],
    ['advise', 'советовать', 'отговаривать', 'игнорировать', 'рекомендовать', '', '', ''],
    ['allow', 'разрешать', 'запрещать', 'ограничивать', 'отказываться', '', '', ''],
    ['answer', 'отвечать', 'игнорировать', 'скрывать', 'молчать', '', '', ''],
    ['ask', 'спрашивать', 'отвечать', 'игнорировать', 'отказывать', '', '', ''],
    ['build', 'строить', 'разрушать', 'разбирать', 'уничтожать', '', '', ''],
    ['call', 'звонить', 'игнорировать', 'отклонять', 'отвечать', '', '', ''],
    ['choose', 'выбирать', 'отказываться', 'игнорировать', 'определять', '', '', ''],
    ['clean', 'убирать', 'грязнить', 'загрязнять', 'пачкать', '', '', ''],
    ['come', 'приходить', 'уходить', 'оставаться', 'уезжать', '', '', ''],
    ['continue', 'продолжать', 'переставать', 'остановиться', 'прекращать', '', '', ''],
    ['cook', 'готовить', 'есть', 'покупать', 'выбирать', '', '', ''],
    ['create', 'создавать', 'разрушать', 'уничтожать', 'изменять', '', '', ''],
    ['decide', 'решать', 'отказываться', 'игнорировать', 'обсуждать', '', '', ''],
    ['describe', 'описывать', 'игнорировать', 'скрывать', 'забывать', '', '', ''],
    ['discuss', 'обсуждать', 'молчать', 'избегать', 'отклонять', '', '', ''],
    ['do', 'делать', 'избегать', 'игнорировать', 'бездействовать', '', '', ''],
    ['enjoy', 'наслаждаться', 'терпеть', 'избегать', 'не любить', '', '', ''],
    ['find', 'находить', 'терять', 'скрывать', 'забывать', '', '', ''],
    ['finish', 'заканчивать', 'начинать', 'прекращать', 'отменять', '', '', ''],
    ['follow', 'следовать', 'игнорировать', 'отклонять', 'уходить', '', '', ''],
    ['forget', 'забывать', 'помнить', 'вспоминать', 'запоминать', '', '', ''],
    ['give', 'давать', 'брать', 'отнимать', 'забирать', '', '', ''],
    ['go', 'идти', 'остановиться', 'оставаться', 'приходить', '', '', ''],
    ['help', 'помогать', 'отказывать', 'игнорировать', 'мешать', '', '', ''],
    ['hope', 'надеяться', 'отчаиваться', 'забывать', 'беспокоиться', '', '', ''],
    ['invite', 'приглашать', 'отказывать', 'игнорировать', 'просить', '', '', ''],
    ['know', 'знать', 'не знать', 'изучать', 'изменять', '', '', ''],
    ['leave', 'уходить', 'оставаться', 'приезжать', 'входить', '', '', ''],
    ['like', 'нравиться', 'не нравиться', 'избегать', 'отказываться', '', '', ''],
    ['listen', 'слушать', 'игнорировать', 'говорить', 'молчать', '', '', ''],
    ['make', 'делать', 'уничтожать', 'изменять', 'создавать', '', '', ''],
    ['meet', 'встречать', 'уходить', 'избегать', 'провожать', '', '', ''],
    ['move', 'двигаться', 'остановиться', 'замирать', 'прекращать', '', '', ''],
    ['need', 'нуждаться', 'отказаться', 'игнорировать', 'избегать', '', '', ''],
    ['offer', 'предлагать', 'отклонять', 'отказываться', 'принять', '', '', ''],
    ['open', 'открывать', 'закрывать', 'скрывать', 'закрывать', '', '', ''],
    ['play', 'играть', 'работать', 'избегать', 'отдыхать', '', '', ''],
    ['prefer', 'предпочитать', 'избегать', 'отказываться', 'нравиться', '', '', ''],
    ['prepare', 'готовить', 'забывать', 'игнорировать', 'оставлять', '', '', ''],
    ['provide', 'предоставлять', 'забирать', 'отказаться', 'ограничивать', '', '', ''],
    ['read', 'читать', 'игнорировать', 'писать', 'забывать', '', '', ''],
    ['reply', 'отвечать', 'игнорировать', 'молчать', 'запрашивать', '', '', ''],
    ['run', 'бежать', 'идти', 'остановиться', 'замедлять', '', '', ''],
    ['show', 'показывать', 'скрывать', 'игнорировать', 'запрещать', '', '', ''],
    ['sing', 'петь', 'молчать', 'говорить', 'танцевать', '', '', ''],
    ['start', 'начинать', 'заканчивать', 'прекращать', 'остановить', '', '', ''],
    ['stop', 'останавливать', 'продолжать', 'начинать', 'двигаться', '', '', ''],
    ['talk', 'говорить', 'молчать', 'слушать', 'обсуждать', '', '', ''],
    ['understand', 'понимать', 'не понимать', 'игнорировать', 'забывать', '', '', ''],
    ['use', 'использовать', 'игнорировать', 'отказываться', 'избегать', '', '', ''],
    ['wait', 'ждать', 'двигаться', 'идти', 'оставаться', '', '', ''],
    ['want', 'хотеть', 'отказываться', 'игнорировать', 'нуждаться', '', '', ''],
    ['work', 'работать', 'отдыхать', 'игнорировать', 'заниматься', '', '', '']
];

// этот код добавляет правильный перевод - это индекс 1 на место с 
// индексом 5, оттуда движек использует это значение
// это вместо того, чтобы заполнить это с помощью чата джипити
// такой фокус с переводом на украинский и польский не получится,
// нужен новый массив
commonWords300.forEach((el, index, array) => {
    array[index][5] = el[1];
});
