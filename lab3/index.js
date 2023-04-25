class createSnapshot{
    backup = "set + data";
    data = "data";

    constructor(settings){
        this.data = new Date();
        this.backup = `${settings}. Дата збереження ${this.data}`;
    }

    getBackup(){
        return this.backup
    }
}


class User{
    mySettings = "set";
    createSnapshot;

    constructor(settings){
        this.mySettings = settings
    }

    newSettings(settings){
        this.mySettings = settings
    }

    saveSettings(){
        this.createSnapshot = new createSnapshot(this.mySettings);
        return this.createSnapshot.getBackup();
    }

    getSettings(){
        console.log(`Поточні налаштування: ${this.mySettings`);
    }
}


class Database{
    backupList = [];
    user;

    constructor(user){
        this.user = user
    }

    backup(){
        console.log(`Створення бекапу`);
        this.backupList.push(this.user.saveSettings());
    }

    undo(){
        if(this.backupList.length > 1){
            this.backupList.pop();
            this.user.newSettings(this.backupList[this.backupList.length - 1]);
            console.log(`Повернення до попередніх налаштувань`);
        }else{
            console.log(`Попередніх налаштувань не знайдено`);
        }
    }
}


let user001 = new User("Надсилати усі сповіщення");
let database = new Database(user001);

user001.getSettings();
database.backup();

user001.newSettings("Надсилати лише критичні сповіщення");
user001.getSettings();
database.backup();

user001.newSettings("Не надсилати жодних сповіщень");
user001.getSettings();
database.backup();

database.undo();
user001.getSettings();