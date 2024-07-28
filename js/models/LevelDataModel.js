class LevelDataModel
{
    constructor(level)
    {
        this.level = level+0;
    }

    getLevel()
    {
        return this.level;
    }

    getArrayDB()
    {
        if (this.getLevel() == 1) {
            return toBeForms;
        }
        if (this.getLevel() == 2) {
            return toBeSentences;
        }
    }
}
