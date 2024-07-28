const toBeSentences = [
    ['I ... a student.', "I'm", 'Im', 'Iam', 'I am'],
    ['I ... not a student.', "I'm not", 'I am not', 'Im not', 'Iamnot'],
    ['You ... a teacher.', "You're", 'Youre', 'You are', 'Youare'],
    ['You ... not a teacher.', "You're not", 'You are not', 'You arent', 'Youarenot'],
    ['He ... a doctor.', "He's", 'Hes', 'He is', 'Heis'],
    ['He ... not a doctor.', "He's not", 'He is not', 'He isnt', 'Heisnot'],
    ['She ... a nurse.', "She's", 'Shes', 'She is', 'Sheis'],
    ['She ... not a nurse.', "She's not", 'She is not', 'She isnt', 'Sheisnot'],
    ['It ... a cat.', "It's", 'Its', 'It is', 'Itis'],
    ['It ... not a cat.', "It's not", 'It is not', 'It isnt', 'Itisnot'],
    ['We ... friends.', "We're", 'Were', 'We are', 'Weare'],
    ['We ... not friends.', "We're not", 'We are not', 'We arent', 'Wearenot'],
    ['They ... players.', "They're", 'Theyre', 'They are', 'Theyare'],
    ['They ... not players.', "They're not", 'They are not', 'They arent', 'Theyarenot'],
    ['I ... happy.', "I'm", 'Im', 'I am', 'Iam'],
    ['I ... not happy.', "I'm not", 'I am not', 'Im not', 'Iamnot'],
    ['You ... ready.', "You're", 'Youre', 'You are', 'Youare'],
    ['You ... not ready.', "You're not", 'You are not', 'You arent', 'Youarenot'],
    ['He ... here.', "He's", 'Hes', 'He is', 'Heis'],
    ['He ... not here.', "He's not", 'He is not', 'He isnt', 'Heisnot'],
    ['She ... there.', "She's", 'Shes', 'She is', 'Sheis'],
    ['She ... not there.', "She's not", 'She is not', 'She isnt', 'Sheisnot'],
    ['It ... fine.', "It's", 'Its', 'It is', 'Itis'],
    ['It ... not fine.', "It's not", 'It is not', 'It isnt', 'Itisnot'],
    ['We ... strong.', "We're", 'Were', 'We are', 'Weare'],
    ['We ... not strong.', "We're not", 'We are not', 'We arent', 'Wearenot'],
    ['They ... quick.', "They're", 'Theyre', 'They are', 'Theyare'],
    ['They ... not quick.', "They're not", 'They are not', 'They arent', 'Theyarenot'],
    ['I ... old.', "I'm", 'Im', 'I am', 'Iam'],
    ['I ... not old.', "I'm not", 'I am not', 'Im not', 'Iamnot'],
    ['You ... young.', "You're", 'Youre', 'You are', 'Youare'],
    ['You ... not young.', "You're not", 'You are not', 'You arent', 'Youarenot'],
    ['He ... tall.', "He's", 'Hes', 'He is', 'Heis'],
    ['He ... not tall.', "He's not", 'He is not', 'He isnt', 'Heisnot'],
    ['She ... short.', "She's", 'Shes', 'She is', 'Sheis'],
    ['She ... not short.', "She's not", 'She is not', 'She isnt', 'Sheisnot'],
    ['It ... big.', "It's", 'Its', 'It is', 'Itis'],
    ['It ... not big.', "It's not", 'It is not', 'It isnt', 'Itisnot'],
    ['We ... small.', "We're", 'Were', 'We are', 'Weare'],
    ['We ... not small.', "We're not", 'We are not', 'We arent', 'Wearenot'],
    ['They ... smart.', "They're", 'Theyre', 'They are', 'Theyare'],
    ['They ... not smart.', "They're not", 'They are not', 'They arent', 'Theyarenot'],
    ['I ... tired.', "I'm", 'Im', 'I am', 'Iam'],
    ['I ... not tired.', "I'm not", 'I am not', 'Im not', 'Iamnot'],
    ['You ... hungry.', "You're", 'Youre', 'You are', 'Youare'],
    ['You ... not hungry.', "You're not", 'You are not', 'You arent', 'Youarenot'],
    ['He ... thirsty.', "He's", 'Hes', 'He is', 'Heis'],
    ['He ... not thirsty.', "He's not", 'He is not', 'He isnt', 'Heisnot'],
    ['She ... busy.', "She's", 'Shes', 'She is', 'Sheis'],
    ['She ... not busy.', "She's not", 'She is not', 'She isnt', 'Sheisnot'],
    ['It ... interesting.', "It's", 'Its', 'It is', 'Itis'],
    ['It ... not interesting.', "It's not", 'It is not', 'It isnt', 'Itisnot'],
    ['We ... early.', "We're", 'Were', 'We are', 'Weare'],
    ['We ... not early.', "We're not", 'We are not', 'We arent', 'Wearenot'],
    ['They ... late.', "They're", 'Theyre', 'They are', 'Theyare'],
    ['They ... not late.', "They're not", 'They are not', 'They arent', 'Theyarenot'],
    ['I ... awake.', "I'm", 'Im', 'I am', 'Iam'],
    ['I ... not awake.', "I'm not", 'I am not', 'Im not', 'Iamnot'],
    ['You ... asleep.', "You're", 'Youre', 'You are', 'Youare'],
    ['You ... not asleep.', "You're not", 'You are not', 'You arent', 'Youarenot'],
    ['He ... alive.', "He's", 'Hes', 'He is', 'Heis'],
    ['He ... not alive.', "He's not", 'He is not', 'He isnt', 'Heisnot'],
    ['She ... dead.', "She's", 'Shes', 'She is', 'Sheis'],
    ['She ... not dead.', "She's not", 'She is not', 'She isnt', 'Sheisnot'],
    ['It ... correct.', "It's", 'Its', 'It is', 'Itis'],
    ['It ... not correct.', "It's not", 'It is not', 'It isnt', 'Itisnot'],
    ['We ... sure.', "We're", 'Were', 'We are', 'Weare'],
    ['We ... not sure.', "We're not", 'We are not', 'We arent', 'Wearenot'],
    ['They ... ready.', "They're", 'Theyre', 'They are', 'Theyare'],
    ['They ... not ready.', "They're not", 'They are not', 'They arent', 'Theyarenot'],
    ['I ... afraid.', "I'm", 'Im', 'I am', 'Iam'],
    ['I ... not afraid.', "I'm not", 'I am not', 'Im not', 'Iamnot'],
    ['You ... strong.', "You're", 'Youre', 'You are', 'Youare'],
    ['You ... not strong.', "You're not", 'You are not', 'You arent', 'Youarenot'],
    ['He ... brave.', "He's", 'Hes', 'He is', 'Heis'],
    ['He ... not brave.', "He's not", 'He is not', 'He isnt', 'Heisnot'],
    ['She ... kind.', "She's", 'Shes', 'She is', 'Sheis'],
    ['She ... not kind.', "She's not", 'She is not', 'She isnt', 'Sheisnot'],
    ['It ... helpful.', "It's", 'Its', 'It is', 'Itis'],
    ['It ... not helpful.', "It's not", 'It is not', 'It isnt', 'Itisnot'],
    ['We ... thankful.', "We're", 'Were', 'We are', 'Weare'],
    ['We ... not thankful.', "We're not", 'We are not', 'We arent', 'Wearenot'],
    ['They ... respectful.', "They're", 'Theyre', 'They are', 'Theyare'],
    ['They ... not respectful.', "They're not", 'They are not', 'They arent', 'Theyarenot'],
    ['I ... honest.', "I'm", 'Im', 'I am', 'Iam'],
    ['I ... not honest.', "I'm not", 'I am not', 'Im not', 'Iamnot'],
    ['You ... loyal.', "You're", 'Youre', 'You are', 'Youare'],
    ['You ... not loyal.', "You're not", 'You are not', 'You arent', 'Youarenot'],
    ['He ... responsible.', "He's", 'Hes', 'He is', 'Heis'],
    ['He ... not responsible.', "He's not", 'He is not', 'He isnt', 'Heisnot'],
    ['She ... punctual.', "She's", 'Shes', 'She is', 'Sheis'],
    ['She ... not punctual.', "She's not", 'She is not', 'She isnt', 'Sheisnot'],
    ['It ... funny.', "It's", 'Its', 'It is', 'Itis'],
    ['It ... not funny.', "It's not", 'It is not', 'It isnt', 'Itisnot'],
    ['We ... organized.', "We're", 'Were', 'We are', 'Weare'],
    ['We ... not organized.', "We're not", 'We are not', 'We arent', 'Wearenot'],
    ['They ... focused.', "They're", 'Theyre', 'They are', 'Theyare'],
    ['They ... not focused.', "They're not", 'They are not', 'They arent', 'Theyarenot']
];
