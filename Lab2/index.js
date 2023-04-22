class Mediator{
    order = "none";
    time = "today";

    constructor(){
        this.customers = []
    }

    chooseDate(customer, pickup, date, otherRecipient, otherRecipientName, otherRecipientPhone){
        const custName = customer.getName();
        //pickup == true >>> самостійно забрати букет з магазину
        if(pickup == true){
            this.order = `Замовлення ${custName}. Забрати самостійно`
            this.infoForm(this.order);
        }
        //pickup == false >>> список доступних проміжків часу змінюється в залежності від дати
        else{
            if (date > 0 && date <= 15) {
                this.time = "13:00 - 15:00";
            } else {
                this.time = "15:00 - 17:00";
            }
            //otherRecipient == true >>> отримувач інша особа
            if(otherRecipient == true){
                this.order = `Замовлення ${custName}. Забере ${otherRecipientName}, телефон ${otherRecipientPhone}. Дата ${date}, час ${this.time}`
            }
            //otherRecipient == false >>> стандартна доставка
            else{
                this.order = `Замовлення ${custName}. Дата ${date}, час ${this.time}`
            }
            this.infoForm(this.order);
        }
        this.customers.push(custName)
    }
    //Інформація про замовлення
    infoForm(info){
        console.log(info)
    }
}
//Користувач
class Customer{
    constructor(name, mediator){
        //Даємо ім'я та медіатора
        this.name = name
        this.myMediator = mediator
    }

    getName(){
        return this.name
    }
    makeOrder(pickup, date, otherRecipient, otherRecipientName, otherRecipientPhone){
        this.myMediator.chooseDate(this, pickup, date, otherRecipient, otherRecipientName, otherRecipientPhone)
    }
}

let main_mediator = new Mediator();
let artur = new Customer("Артур", main_mediator)
let roman = new Customer("Роман", main_mediator)
let boris = new Customer("Борис>", main_mediator)
artur.makeOrder(true)
boris.makeOrder(false, 18, true, 'Олена', 0637484459)