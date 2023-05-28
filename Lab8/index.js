class DatabasePostgreSQL{
    constructor(){
        this.select = "*";
        this.where = false;
        this.limit = "*";
    }
}

class DatabaseMySQL{
    constructor(){
        this.select = "*";
        this.where = false;
        this.limit = "*";
    }
}

class BuildSQL{
    addSELECT(){}
    addWHERE(){}
    addLIMIT(){}
    getSQL(){}
}

class BuildMySQL extends BuildSQL{
    constructor(){
        super()
        this.sql = new DatabaseMySQL()
    }

    addSELECT(select){
        this.sql.select = select;
        return this;
    }

    addWHERE(where){
        this.sql.where = where;
        return this;
    }

    addLIMIT(limit){
        this.sql.limit = limit;
        return this;
    }

    getSQL(){
        console.log(`SELECT ${this.sql.select} WHERE ${this.sql.where} LIMIT ${this.sql.limit};`);
        return this.sql;
    }
}

class BuildPostgreSQL extends BuildSQL{
    constructor(){
        super()
        this.sql = new DatabasePostgreSQL()
    }

    addSELECT(select){
        this.sql.select = select;
        return this;
    }

    addWHERE(where){
        this.sql.where = where;
        return this;
    }

    addLIMIT(limit){
        this.sql.limit = limit;
        return this;
    }

    getSQL(){
        console.log(`SELECT ${this.sql.select} \n WHERE ${this.sql.where} \n LIMIT ${this.sql.limit};`);
        return this.sql;
    }
}


let request_MySQL_1 = new BuildMySQL().addWHERE("customer == VIP").getSQL();
console.log(request_MySQL_1);
console.log('====================================');
let request_PostgreSQL_1 = new BuildPostgreSQL().addSELECT("all").addWHERE("employee == women").addLIMIT("salary <= 15000").getSQL();
console.log(request_PostgreSQL_1);


