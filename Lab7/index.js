class DatabasePostgreSQL{
    constructor(){
        if(typeof DatabasePostgreSQL.instance === 'object'){
            return DatabasePostgreSQL.instance
        }
        this.callCounter = 0;
        DatabasePostgreSQL.instance = this;
        return this;
    }
    getCallCounter(){return `There were ${this.callCounter} calls to PostgreSQL`}
    call(){
        console.log('You had requested to PostgreSQL');
        return this.callCounter++;
    }
}

class DatabaseMongoDB{
    constructor(){
        if(typeof DatabaseMongoDB.instance === 'object'){
            return DatabaseMongoDB.instance
        }
        this.callCounter = 0;
        DatabaseMongoDB.instance = this;
        return this;
    }

    getCallCounter(){return `There were ${this.callCounter} calls to MongoDB`}

    call(){
        console.log(`You had requested to MongoDB`);
        return this.callCounter++
    }
}

//створення 2 екземплярів класу
let postgreSQL_1 = new DatabasePostgreSQL();
let postgreSQL_2 = new DatabasePostgreSQL();
console.log(postgreSQL_1.getCallCounter());
console.log(postgreSQL_2.getCallCounter());
postgreSQL_1.call();
postgreSQL_2.call();
console.log(postgreSQL_1.getCallCounter());
console.log(postgreSQL_2.getCallCounter());
console.log('====================================');
let mongoDB_1 = new DatabaseMongoDB();
let mongoDB_2 = new DatabaseMongoDB();
console.log(mongoDB_1.getCallCounter());
console.log(mongoDB_2.getCallCounter());
mongoDB_1.call();
mongoDB_1.call();
mongoDB_1.call();
mongoDB_2.call();
console.log(mongoDB_1.getCallCounter());
console.log(mongoDB_2.getCallCounter());