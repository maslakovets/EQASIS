class Commodity{
    name = "Goods"
    ip = 00000000
    status = false

    constructor(name, ip, status){
        this.name = name
        this.ip = ip
        this.status = status
    }

    getName(){return this.name}
    getIP(){return this.ip}
    getStatus(){return this.status}

    set_date(name, ip, status){
        this.name = name
        this.ip = ip
        this.status = status
    }
}

class User{
    name = "Name"
    ip = 00000000
    email = "E-mail"

    constructor(name, ip, email){
        this.name = name
        this.ip = ip
        this.email = email
    }

    getName(){return this.name}
    getIP(){return this.ip}
    get_email(){return this.email}

    set_date(name, ip, email){
        this.name = name
        this.ip = ip
        this.email = email
    }
}

class Order{
    ip = 00000000
    status = false

    constructor(ip, status){
        this.ip = ip
        this.status = status
    }

    getIP(){return this.ip}
    getStatus(){return this.status}

    set_date(ip, status){
        this.ip = ip
        this.status = status
    }
}

class BasicValidation{
    myObj

    setObj(obj){
        this.myObj = obj
    }

    validData(){}
    saveRequest(){}

    formingAnswer(code, status){
        this.generateJson(code, status)
        console.log(`Code is ${code}, status is ${status}`); 
    }

    generateJson(code, status){}
}

class CommodityValidation extends BasicValidation{
    correctName = /^[a-zA-Z']{2,}/u;
    correctIP = /^\d{8,}/;
    validData(newName, newIP, newStatus){
        if(this.correctName.test(newName) == true){
            if(this.correctIP.test(newIP) == true){
                if(typeof newStatus == "boolean"){
                    this.saveRequest(newName, newIP, newStatus)
                }else{
                    console.log(`Status error`);
                }
            }else{
                console.log(`IP error`);
            }
        }else{
            console.log(`Name error`);
        }
    }

    saveRequest(newName, newIP, newStatus){
        this.myObj.set_date(newName, newIP, newStatus)
        this.formingAnswer(newIP, newStatus)
    }
}

class UserValidation extends BasicValidation{
    correctName = /^[a-zA-Z']{2,}/u;
    correctIP = /^\d{8,}/;
    correctEmail = /^[0-9a-z-_\.]+\@[0-9a-z-]{2,}\.[a-z]{2,5}/i

    validData(newName, newIP, newEmail){
        if(this.correctName.test(newName) == true){
            if(this.correctIP.test(newIP) == true){
                if(this.correctEmail.test(newEmail)){
                    this.saveRequest(newName, newIP, this.myObj.get_email())
                }else{
                    console.log(`E-mail error`);
                }
            }else{
                console.log(`IP error`);
            }
        }else{
            console.log(`Name error`);
        }
    }

    saveRequest(newName, newIP){
        this.myObj.set_date(newName, newIP, this.myObj.get_email())
        this.formingAnswer(newIP, true)
    }
}

class OrderValidation extends BasicValidation{
    correctIP = /^\d{8,}/;

    validData(newIP, newStatus){
        if(this.correctIP.test(newIP)){
            if(typeof newStatus == "boolean"){
                this.saveRequest(newIP, newStatus)
            }else{
                console.log(`Status error`);
            }
        }else{
            console.log(`IP error`);
        }
    }

    saveRequest(newIP, newStatus){
        this.myObj.set_date(newIP, newStatus)
        this.formingAnswer(newIP, newStatus)
    }

    generateJson(code, status){
        console.log({code: code, status: status});
        return {code: code, status: status}
    }
}



//Клієнтський код

let commodity1 = new Commodity("X-Wing", 10000001, false)
console.log(commodity1.getIP());
console.log(commodity1.getName());
console.log(commodity1.getStatus());

let commValid = new CommodityValidation()
commValid.setObj(commodity1)
commValid.validData("Lightsaber", 20000001, true)
console.log(commodity1.getIP());
console.log(commodity1.getName());
console.log(commodity1.getStatus());

console.log('====================================');
let user1 = new User("Luke Skywalker", 10070001, "skywalker@gmail.com")
console.log(user1.getName());
console.log(user1.getIP());
console.log(user1.get_email());

let userValid = new UserValidation();
userValid.setObj(user1);
userValid.validData("Dart Vader", 10070002, "skywalker@ukr.net")
console.log(user1.getName());
console.log(user1.getIP());
console.log(user1.get_email());

console.log('====================================');
let order1 = new Order(70000078, false)
console.log(order1.getIP());
console.log(order1.getStatus());

let orderValid = new OrderValidation()
orderValid.setObj(order1);
orderValid.validData(70000077, true)
console.log(order1.getIP());
console.log(order1.getStatus());