
function Employee(name, employeeid, phonenum, designation, department){
    this.name=name;
    this.employeeid=employeeid;
    this.phonenum=phonenum;
    this.designation=designation;
    this.department=department;
}

Employee.prototype.add = function(){
    console.log("add to database");
}
Employee.prototype.get = function(){
    console.log("get from database");
}
Employee.prototype.update = function(){
    console.log("update to database");
}
Employee.prototype.delete = function(){
    console.log("delete from database");
}

var emp = new Employee("Emp04", "999-04", "3125553333", "Dev", "IT");
console.log(emp);
emp.update();