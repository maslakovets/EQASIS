class Strategy {
    calculate(a){}
}

class Pickup extends Strategy{
    calculate(a){
       console.log(`Самовивіз. Вартість замовлення ${a} грн.`)
    }
}

class ExternalDelivery extends Strategy{
    calculate(a){
       console.log(`Доставка зовнішньою службою доставки. Вартість замовлення  ${a+100} грн.`)
    }
}

class OwnDelivery extends Strategy{
    calculate(a){
       console.log(`Доставка власною службою доставки. Вартість замовлення ${a+50} грн.`)
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