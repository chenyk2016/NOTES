

// 1. 保留自己的原型属性
// 2. 实现对SupClass 原型属性的继承
// 3. 保留自己的构造函数
function extend(SubClass, SupClass) {

  const sup = Object.create(SupClass.prototype)

  // 保留自己的原型属性
  Object.keys(SubClass.prototype).forEach(key => {
    sup[key] = SubClass.prototype[key]
  })

  // 实现对SupClass 原型属性的继承
  SubClass.prototype = sup
  // 保留自己的构造函数
  sup.constructor = SubClass

  SubClass.__proto__ = SupClass


  // 提供一个super函数，在子类中可以调用，实现对父类实例属性的定制
  // this需要指向子函数
  // sup.super = function (props) {
  //   SupClass.call(this, props)
  // }

  return SubClass
}

function People (name){
  this.peopleName = 123
}

People.prototype.people = function () {
  console.log('I am people');
}

function Student (name){
  // this.super && this.super(11)
  this.studentName = name
}

Student.prototype.student = function () {
  console.log('I am student');
}


extend(Student, People)

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


window.People2 = People
window.Student2 = Student
window.people2 = people
window.student2 = student

window.Other2 = Other
window.other2 = new Other()


console.log(People2, Student2, Other2);
console.log(people2, student2, other2);
