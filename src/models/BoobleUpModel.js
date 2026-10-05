
export class BoobleUpModel {
    constructor ({SettingForProgram}) {
        this.settingForProgram = SettingForProgram;
        this.forBooble = SettingForProgram.forBooble;
    }

    correctStreak () {
        let correctStreak = this.forBooble.correctStreak * 1;
        let diamant = this.forBooble.diamant * 1;
        if (diamant > 0) correctStreak+=diamant;
        if (diamant < 0) correctStreak = 0;
        this.forBooble.correctStreak = correctStreak;
    }

    bonusRandomMax() {
        let correctStreak = this.forBooble.correctStreak * 1;
        switch (true) {
            case correctStreak > 600: return 3;
            case correctStreak > 300: return 4;
            case correctStreak > 150: return 5;
            case correctStreak > 70: return 6;
            case correctStreak > 30: return 7;
            case correctStreak > 10: return 8;
        }
        return 9;
    }

bonusPercent() {
    const correctStreak = Number(this.forBooble.correctStreak);

    switch (true) {
        case correctStreak > 600:
            return {
                percent: Math.round(correctStreak * 100 / 1200),
                color: '#00ff00'
            };

        case correctStreak > 300:
            return {
                percent: Math.round(correctStreak * 100 / 600),
                color: '#22ee22'
            };

        case correctStreak > 150:
            return {
                percent: Math.round(correctStreak * 100 / 300),
                color: '#44dd44'
            };

        case correctStreak > 70:
            return {
                percent: Math.round(correctStreak * 100 / 150),
                color: '#66cc66'
            };

        case correctStreak > 30:
            return {
                percent: Math.round(correctStreak * 100 / 70),
                color: '#88bb88'
            };

        case correctStreak > 10:
            return {
                percent: Math.round(correctStreak * 100 / 30),
                color: '#aaccaa'
            };

        default:
            return {
                percent: Math.round(correctStreak * 100 / 10),
                color: '#ccffcc'
            };
    }
}

}