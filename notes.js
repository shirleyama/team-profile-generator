//example code from JD
// index.js
const Student = require("./Student");
const stan = new Student("UK10", "02/24/2023", "Stan");

stan.printClassCode();

//Course.js
class Course {
  constructor(class_code, grad_date) {
    this.class_code = class_code;
    this.grad_date = grad_date;
  }
  printClassCode() {
    console.log(this.class_code);
  }
  printGradDate() {
    console.log(this.grad_date);
  }
}

// Student.js
const Course = require("./Course");

class Student extends Course {
  constructor(class_code, grad_date, name) {
    super(class_code, grad_date);
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

module.exports = Student;

// SSM.js
const Course = require("./Course");
const { conditionalExpression } = require("@babel/types");

class SSM extends Course {
  constructor(class_code, grad_date, name) {
    super(class_code, grad_date);
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

module.exports = SSM;
