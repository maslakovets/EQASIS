class createSnapshot{
    backup = "set + data";
    data = "data";

    constructor(settings){
        this.data = new Date();
        this.backup = `${settings}. ���� ���������� ${this.data}`;
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
        console.log(`������ ������������: ${this.mySettings`);
    }
}


class Database{
    backupList = [];
    user;

    constructor(user){
        this.user = user
    }

    backup(){
        console.log(`��������� ������`);
        this.backupList.push(this.user.saveSettings());
    }

    undo(){
        if(this.backupList.length > 1){
            this.backupList.pop();
            this.user.newSettings(this.backupList[this.backupList.length - 1]);
            console.log(`���������� �� ��������� �����������`);
        }else{
            console.log(`��������� ����������� �� ��������`);
        }
    }
}


let user001 = new User("��������� �� ���������");
let database = new Database(user001);

user001.getSettings();
database.backup();

user001.newSettings("��������� ���� ������� ���������");
user001.getSettings();
database.backup();

user001.newSettings("�� ��������� ������ ��������");
user001.getSettings();
database.backup();

database.undo();
user001.getSettings();