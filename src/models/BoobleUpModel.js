
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
                color: '#00ff00',
                koefForBonus: 1.6
            };

        case correctStreak > 300:
            return {
                percent: Math.round(correctStreak * 100 / 600),
                color: '#22ee22',
                koefForBonus: 1.5
            };

        case correctStreak > 150:
            return {
                percent: Math.round(correctStreak * 100 / 300),
                color: '#44dd44',
                koefForBonus: 1.4
            };

        case correctStreak > 70:
            return {
                percent: Math.round(correctStreak * 100 / 150),
                color: '#66cc66',
                koefForBonus: 1.3
            };

        case correctStreak > 30:
            return {
                percent: Math.round(correctStreak * 100 / 70),
                color: '#88bb88',
                koefForBonus: 1.2
            };

        case correctStreak > 10:
            return {
                percent: Math.round(correctStreak * 100 / 30),
                color: '#aaccaa',
                koefForBonus: 1.1
            };

        default:
            return {
                percent: Math.round(correctStreak * 100 / 10),
                color: '#ccffcc',
                koefForBonus: 1
            };
    }
}

}