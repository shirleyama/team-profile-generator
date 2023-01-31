// index.js
const Student = require('./Student');
const stan = new Student('UK10', '02/24/2023', 'Stan');

stan.printClassCode();

// Student.js
const Course = require('./Course');

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
const Course = require('./Course');

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
















