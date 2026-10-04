
export class BoobleUpModel {
    constructor ({SettingForProgram}) {
        this.settingForProgram = SettingForProgram;
        this.forBooble = SettingForProgram.forBooble;
    }

    correctStreak () {
        let correctStreak = this.forBooble.correctStreak * 1;
        let diamant = this.forBooble.diamant * 1;
        if (this.forBooble.diamant > 0) correctStreak+=diamant;
        if (this.forBooble.diamant < 0) this.forBooble.correctStreak = 0;
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

}