
class Employee{
    
    constructor(name, dept){
        this.name = name;
        this.dept = dept;
    }

    print(){
        console.log(this.name+" Depat: "+this.dept);
    }
}

const emp = new Employee("Jon", "IT");
emp.print();