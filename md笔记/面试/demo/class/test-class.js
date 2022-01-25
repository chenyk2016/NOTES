class People {
  constructor(name) {
    this.peopleName = name
  }

  people() {
    console.log('I am people');
  }
}


class Student extends People{
  constructor(name) {
    super(123)
    this.studentName = name
  }
  student() {
    console.log('I am student');
  }
}

const people = new People('小丽')

const student = new Student('小明')

function Other() {
  const obj = Object.create({})
}

Other.prototype.other = function () {
  console.log('I am other');
}

Other.otherSay = function () {
  console.log('otherSay');
}


window.People = People
window.Student = Student
window.people = people
window.student = student

window.Other = Other
window.other = new Other()


console.log(People, Student, Other);
console.log(people, student, other);



function extend(SubClass, SupClass) {

  const sup = new SupClass()
  sup.constructor = SubClass
  SubClass.prototype = sup

  return SubClass
}