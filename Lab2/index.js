class Mediator{
    order = "none";
    time = "today";

    constructor(){
        this.customers = []
    }

    chooseDate(customer, pickup, date, otherRecipient, otherRecipientName, otherRecipientPhone){
        const custName = customer.getName();
        //pickup == true >>> ��������� ������� ����� � ��������
        if(pickup == true){
            this.order = `���������� ${custName}. ������� ���������`
            this.infoForm(this.order);
        }
        //pickup == false >>> ������ ��������� ������� ���� ��������� � ��������� �� ����
        else{
            if (date > 0 && date <= 15) {
                this.time = "13:00 - 15:00";
            } else {
                this.time = "15:00 - 17:00";
            }
            //otherRecipient == true >>> ��������� ���� �����
            if(otherRecipient == true){
                this.order = `���������� ${custName}. ������ ${otherRecipientName}, ������� ${otherRecipientPhone}. ���� ${date}, ��� ${this.time}`
            }
            //otherRecipient == false >>> ���������� ��������
            else{
                this.order = `���������� ${custName}. ���� ${date}, ��� ${this.time}`
            }
            this.infoForm(this.order);
        }
        this.customers.push(custName)
    }
    //���������� ��� ����������
    infoForm(info){
        console.log(info)
    }
}
//����������
class Customer{
    constructor(name, mediator){
        //���� ��'� �� ��������
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
let artur = new Customer("�����", main_mediator)
let roman = new Customer("�����", main_mediator)
let boris = new Customer("�����>", main_mediator)
artur.makeOrder(true)
boris.makeOrder(false, 18, true, '�����', 0637484459)