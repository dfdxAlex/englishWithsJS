 const commonSport100 = [
    ['athlete', 'атлет', 'спортсмен', 'физкультурник', 'участник', '', '', ''],
    ['training', 'тренировка', 'подготовка', 'упражнения', 'учеба', '', '', ''],
    ['exercise', 'упражнение', 'физкультура', 'тренировка', 'занятие', '', '', ''],
    ['competition', 'соревнование', 'конкурс', 'турнир', 'матч', '', '', ''],
    ['coach', 'тренер', 'инструктор', 'менеджер', 'специалист', '', '', ''],
    ['team', 'команда', 'группа', 'состав', 'партнеры', '', '', ''],
    ['sport', 'спорт', 'вид спорта', 'физическая активность', 'игра', '', '', ''],
    ['game', 'игра', 'матч', 'состязание', 'турнир', '', '', ''],
    ['player', 'игрок', 'спортсмен', 'участник', 'игрок', '', '', ''],
    ['goal', 'цель', 'гол', 'задача', 'марк', '', '', ''],
    ['score', 'счет', 'результат', 'оценка', 'баллы', '', '', ''],
    ['victory', 'победа', 'успех', 'триумф', 'триумф', '', '', ''],
    ['defeat', 'поражение', 'неудача', 'провал', 'упущение', '', '', ''],
    ['championship', 'чемпионат', 'турнир', 'первенство', 'состязание', '', '', ''],
    ['fitness', 'фитнес', 'пластика', 'проведение', 'подготовка', '', '', ''],
    ['yoga', 'йога', 'гимнастика', 'упражнения', 'практика', '', '', ''],
    ['running', 'бег', 'пробежка', 'спринт', 'дистанция', '', '', ''],
    ['cycling', 'велоспорт', 'езда на велосипеде', 'велогонка', 'вело', '', '', ''],
    ['swimming', 'плавание', 'водные процедуры', 'плавание', 'сплав', '', '', ''],
    ['basketball', 'баскетбол', 'игра', 'спорт', 'состязание', '', '', ''],
    ['soccer', 'футбол', 'игра', 'матч', 'спорт', '', '', ''],
    ['tennis', 'теннис', 'игра', 'подача', 'теннисный мяч', '', '', ''],
    ['golf', 'гольф', 'игра', 'дубль', 'мяч', '', '', ''],
    ['boxing', 'бокс', 'поединок', 'схватка', 'партия', '', '', ''],
    ['wrestling', 'борьба', 'матч', 'схватка', 'поединок', '', '', ''],
    ['skiing', 'горные лыжи', 'лыжный спорт', 'спуск', 'подъем', '', '', ''],
    ['snowboarding', 'сноубординг', 'сноуборд', 'спорт', 'катание', '', '', ''],
    ['surfing', 'серфинг', 'волнорез', 'катание', 'водный спорт', '', '', ''],
    ['hiking', 'поход', 'прогулка', 'пеший туризм', 'маршрут', '', '', ''],
    ['climbing', 'скалолазание', 'подъем', 'альпинизм', 'тренировка', '', '', ''],
    ['gymnastics', 'гимнастика', 'упражнения', 'тренировка', 'спорт', '', '', ''],
    ['weightlifting', 'тяжелая атлетика', 'поднятие тяжестей', 'тренировка', 'спорт', '', '', ''],
    ['martial arts', 'боевые искусства', 'самбо', 'дзюдо', 'карате', '', '', ''],
    ['karate', 'карате', 'боевое искусство', 'тренировка', 'поединок', '', '', ''],
    ['judo', 'дзюдо', 'боевое искусство', 'спорт', 'поединок', '', '', ''],
    ['taekwondo', 'тхэквондо', 'боевое искусство', 'тренировка', 'поединок', '', '', ''],
    ['fencing', 'фехтование', 'бой', 'спорт', 'тренировка', '', '', ''],
    ['dancing', 'танцы', 'хореография', 'пластика', 'учеба', '', '', ''],
    ['cheerleading', 'чирлидинг', 'групповое выступление', 'танцы', 'поддержка', '', '', ''],
    ['rowing', 'гребля', 'спортивное гребля', 'тренировка', 'водный спорт', '', '', ''],
    ['sailing', 'парусный спорт', 'плавание', 'регата', 'тренировка', '', '', ''],
    ['skating', 'катание на коньках', 'фигурное катание', 'спортивное катание', 'тренировка', '', '', ''],
    ['rollerblading', 'катание на роликах', 'ролики', 'тренировка', 'спорт', '', '', ''],
    ['baseball', 'бейсбол', 'игра', 'спорт', 'команда', '', '', ''],
    ['volleyball', 'волейбол', 'игра', 'командный спорт', 'тренировка', '', '', ''],
    ['handball', 'гандбол', 'игра', 'спорт', 'команда', '', '', ''],
    ['rugby', 'регби', 'игра', 'спорт', 'командный спорт', '', '', ''],
    ['cricket', 'крикет', 'игра', 'спорт', 'команда', '', '', ''],
    ['ultimate frisbee', 'фрисби', 'игра', 'спорт', 'командный спорт', '', '', ''],
    ['golf', 'гольф', 'игра', 'спорт', 'площадка', '', '', ''],
    ['triathlon', 'триатлон', 'многоборье', 'спортивное соревнование', 'тренировка', '', '', ''],
    ['marathon', 'марафон', 'бег', 'дистанция', 'соревнование', '', '', ''],
    ['crossfit', 'кроссфит', 'тренировка', 'упражнения', 'спорт', '', '', ''],
    ['yoga', 'йога', 'упражнения', 'фитнес', 'тренировка', '', '', ''],
    ['pilates', 'пилатес', 'упражнения', 'фитнес', 'тренировка', '', '', ''],
    ['stretching', 'растяжка', 'упражнения', 'тренировка', 'фитнес', '', '', ''],
    ['balance', 'баланс', 'упражнения', 'тренировка', 'спортивное оборудование', '', '', ''],
    ['speed', 'скорость', 'тренировка', 'упражнение', 'производительность', '', '', ''],
    ['endurance', 'выносливость', 'тренировка', 'упражнения', 'спорт', '', '', ''],
    ['strength', 'сила', 'тренировка', 'упражнения', 'фитнес', '', '', ''],
    ['flexibility', 'гибкость', 'упражнения', 'тренировка', 'фитнес', '', '', ''],
    ['power', 'мощность', 'тренировка', 'упражнения', 'спорт', '', '', ''],
    ['conditioning', 'подготовка', 'тренировка', 'упражнения', 'спорт', '', '', ''],
    ['performance', 'выступление', 'достижения', 'тренировка', 'спортивные результаты', '', '', ''],
    ['recovery', 'восстановление', 'отдых', 'тренировка', 'реабилитация', '', '', ''],
    ['nutrition', 'питание', 'диета', 'рацион', 'здоровое питание', '', '', ''],
    ['hydration', 'гидратация', 'вода', 'употребление воды', 'восстановление', '', '', '']
    ['athlete', 'атлет', 'спортсмен', 'физкультурник', 'участник', '', '', ''],
    ['training', 'тренировка', 'подготовка', 'упражнения', 'учеба', '', '', ''],
    ['exercise', 'упражнение', 'физкультура', 'тренировка', 'занятие', '', '', ''],
    ['competition', 'соревнование', 'конкурс', 'турнир', 'матч', '', '', ''],
    ['coach', 'тренер', 'инструктор', 'менеджер', 'специалист', '', '', ''],
    ['team', 'команда', 'группа', 'состав', 'партнеры', '', '', ''],
    ['sport', 'спорт', 'вид спорта', 'физическая активность', 'игра', '', '', ''],
    ['game', 'игра', 'матч', 'состязание', 'турнир', '', '', ''],
    ['player', 'игрок', 'спортсмен', 'участник', 'игрок', '', '', ''],
    ['goal', 'цель', 'гол', 'задача', 'марк', '', '', ''],
    ['score', 'счет', 'результат', 'оценка', 'баллы', '', '', ''],
    ['victory', 'победа', 'успех', 'триумф', 'триумф', '', '', ''],
    ['defeat', 'поражение', 'неудача', 'провал', 'упущение', '', '', ''],
    ['championship', 'чемпионат', 'турнир', 'первенство', 'состязание', '', '', ''],
    ['fitness', 'фитнес', 'пластика', 'проведение', 'подготовка', '', '', ''],
    ['yoga', 'йога', 'гимнастика', 'упражнения', 'практика', '', '', ''],
    ['running', 'бег', 'пробежка', 'спринт', 'дистанция', '', '', ''],
    ['cycling', 'велоспорт', 'езда на велосипеде', 'велогонка', 'вело', '', '', ''],
    ['swimming', 'плавание', 'водные процедуры', 'плавание', 'сплав', '', '', ''],
    ['basketball', 'баскетбол', 'игра', 'спорт', 'состязание', '', '', ''],
    ['soccer', 'футбол', 'игра', 'матч', 'спорт', '', '', ''],
    ['tennis', 'теннис', 'игра', 'подача', 'теннисный мяч', '', '', ''],
    ['golf', 'гольф', 'игра', 'дубль', 'мяч', '', '', ''],
    ['boxing', 'бокс', 'поединок', 'схватка', 'партия', '', '', ''],
    ['wrestling', 'борьба', 'матч', 'схватка', 'поединок', '', '', ''],
    ['skiing', 'горные лыжи', 'лыжный спорт', 'спуск', 'подъем', '', '', ''],
    ['snowboarding', 'сноубординг', 'сноуборд', 'спорт', 'катание', '', '', ''],
    ['surfing', 'серфинг', 'волнорез', 'катание', 'водный спорт', '', '', ''],
    ['hiking', 'поход', 'прогулка', 'пеший туризм', 'маршрут', '', '', ''],
    ['climbing', 'скалолазание', 'подъем', 'альпинизм', 'тренировка', '', '', ''],
    ['gymnastics', 'гимнастика', 'упражнения', 'тренировка', 'спорт', '', '', ''],
    ['weightlifting', 'тяжелая атлетика', 'поднятие тяжестей', 'тренировка', 'спорт', '', '', ''],
    ['martial arts', 'боевые искусства', 'самбо', 'дзюдо', 'карате', '', '', ''],
    ['karate', 'карате', 'боевое искусство', 'тренировка', 'поединок', '', '', ''],
    ['judo', 'дзюдо', 'боевое искусство', 'спорт', 'поединок', '', '', ''],
    ['taekwondo', 'тхэквондо', 'боевое искусство', 'тренировка', 'поединок', '', '', ''],
    ['fencing', 'фехтование', 'бой', 'спорт', 'тренировка', '', '', ''],
    ['dancing', 'танцы', 'хореография', 'пластика', 'учеба', '', '', ''],
    ['cheerleading', 'чирлидинг', 'групповое выступление', 'танцы', 'поддержка', '', '', ''],
    ['rowing', 'гребля', 'спортивное гребля', 'тренировка', 'водный спорт', '', '', ''],
    ['sailing', 'парусный спорт', 'плавание', 'регата', 'тренировка', '', '', ''],
    ['skating', 'катание на коньках', 'фигурное катание', 'спортивное катание', 'тренировка', '', '', ''],
    ['rollerblading', 'катание на роликах', 'ролики', 'тренировка', 'спорт', '', '', ''],
    ['baseball', 'бейсбол', 'игра', 'спорт', 'команда', '', '', ''],
    ['volleyball', 'волейбол', 'игра', 'командный спорт', 'тренировка', '', '', ''],
    ['handball', 'гандбол', 'игра', 'спорт', 'команда', '', '', ''],
    ['rugby', 'регби', 'игра', 'спорт', 'командный спорт', '', '', ''],
    ['cricket', 'крикет', 'игра', 'спорт', 'команда', '', '', ''],
    ['ultimate frisbee', 'фрисби', 'игра', 'спорт', 'командный спорт', '', '', ''],
    ['golf', 'гольф', 'игра', 'спорт', 'площадка', '', '', ''],
    ['triathlon', 'триатлон', 'многоборье', 'спортивное соревнование', 'тренировка', '', '', ''],
    ['marathon', 'марафон', 'бег', 'дистанция', 'соревнование', '', '', ''],
    ['crossfit', 'кроссфит', 'тренировка', 'упражнения', 'спорт', '', '', ''],
    ['yoga', 'йога', 'упражнения', 'фитнес', 'тренировка', '', '', ''],
    ['pilates', 'пилатес', 'упражнения', 'фитнес', 'тренировка', '', '', ''],
    ['stretching', 'растяжка', 'упражнения', 'тренировка', 'фитнес', '', '', ''],
    ['balance', 'баланс', 'упражнения', 'тренировка', 'спортивное оборудование', '', '', ''],
    ['speed', 'скорость', 'тренировка', 'упражнение', 'производительность', '', '', ''],
    ['endurance', 'выносливость', 'тренировка', 'упражнения', 'спорт', '', '', ''],
    ['strength', 'сила', 'тренировка', 'упражнения', 'фитнес', '', '', ''],
    ['flexibility', 'гибкость', 'упражнения', 'тренировка', 'фитнес', '', '', ''],
    ['power', 'мощность', 'тренировка', 'упражнения', 'спорт', '', '', ''],
    ['conditioning', 'подготовка', 'тренировка', 'упражнения', 'спорт', '', '', ''],
    ['performance', 'выступление', 'достижения', 'тренировка', 'спортивные результаты', '', '', ''],
    ['recovery', 'восстановление', 'отдых', 'тренировка', 'реабилитация', '', '', ''],
    ['nutrition', 'питание', 'диета', 'рацион', 'здоровое питание', '', '', ''],
    ['hydration', 'гидратация', 'вода', 'употребление воды', 'восстановление', '', '', ''],
    ['meditation', 'медитация', 'практика', 'успокоение', 'релаксация', '', '', ''],
    ['warm-up', 'разминка', 'подготовка', 'упражнения', 'тренировка', '', '', ''],
    ['cool-down', 'заминка', 'растяжка', 'восстановление', 'упражнения', '', '', ''],
    ['cardio', 'кардио', 'аэробные упражнения', 'тренировка', 'фитнес', '', '', ''],
    ['stretch', 'растяжка', 'упражнения', 'фитнес', 'гибкость', '', '', ''],
    ['exercise ball', 'фитбол', 'упражнения', 'тренировка', 'оборудование', '', '', ''],
    ['dumbbell', 'гантель', 'тренировка', 'упражнения', 'фитнес', '', '', ''],
    ['barbell', 'штанга', 'тренировка', 'упражнения', 'фитнес', '', '', ''],
    ['kettlebell', 'гиря', 'тренировка', 'упражнения', 'фитнес', '', '', ''],
    ['treadmill', 'беговая дорожка', 'тренировка', 'бег', 'фитнес', '', '', ''],
    ['elliptical', 'эллиптический тренажер', 'тренировка', 'кардио', 'фитнес', '', '', '']
];
