class Element{
    accept(visitor){}
}

class Company extends Element{
    departmentList = []

    constructor(department){
        super()
        this.departmentList = department
    }

    accept(visitor){
        visitor.visitCompany(this)
    }
}

class Department extends Element{
    employeeList = []

    constructor(employees){
        super()
        this.employeeList = employees
    }

    accept(visitor){
        visitor.visitDepartment(this)
    }
}

class Employee{
    jobTitle = ""
    salary = 0

    constructor(title, salary){
        this.jobTitle = title
        this.salary = salary
    }
}

class Visitor{
    visitCompany(element){

        let i = 1
        console.log(`Зарплатна відомість компанії`);
        element.departmentList.forEach(element => {
            console.log(`Департамент ${i}`)
            element.employeeList.forEach(element => {
                console.log(`${element.jobTitle}, зарплата ${element.salary}`);
            });
            i++
        });
    }

    visitDepartment(element){
        console.log(`Зарплатна відомість департаменту`);
        element.employeeList.forEach(element => {
            console.log(`${element.jobTitle}, зарплата ${element.salary}`);
        });
    }
}



let employee1 = new Employee('Начальник цеху', 20000)
let employee2 = new Employee('Інженер', 17500)
let employee3 = new Employee('Прибиральник', 8000)
let employee4 = new Employee('Директор відділу маркетингу', 30000)
let employee5 = new Employee('Маркетолог', 15000)
let employee6 = new Employee('Секретар', 11250)
let department1 = new Department([employee1, employee2, employee3])
let department2 = new Department([employee4, employee5, employee6])
let company = new Company([department1, department2])
let visitor = new Visitor()

console.log('====================================');
company.accept(visitor)
console.log('====================================');
department1.accept(visitor)
console.log('====================================');
department2.accept(visitor)
