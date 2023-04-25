class Strategy {
    calculate(a){}
}

class Pickup extends Strategy{
    calculate(a){
       console.log(`��������. ������� ���������� ${a} ���.`)
    }
}

class ExternalDelivery extends Strategy{
    calculate(a){
       console.log(`�������� ��������� ������� ��������. ������� ����������  ${a+100} ���.`)
    }
}

class OwnDelivery extends Strategy{
    calculate(a){
       console.log(`�������� ������� ������� ��������. ������� ���������� ${a+50} ���.`)
    }
}

class Delivery{
    myStrategy = ""

    setStrategy(strategy){
        this.myStrategy = strategy
    }

    deliveryCalculate(value){
        this.myStrategy.calculate(value)
    }
}

let deliveryService = new Delivery()

deliveryService.setStrategy(new Pickup());
deliveryService.deliveryCalculate(299);

deliveryService.setStrategy(new ExternalDelivery());
deliveryService.deliveryCalculate(299);

deliveryService.setStrategy(new OwnDelivery());
deliveryService.deliveryCalculate(299);