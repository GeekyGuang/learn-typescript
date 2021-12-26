class Animal {
  readonly name: string
  constructor(name: string) {
    this.name = name
  }

  run() {
    return `${this.name} is running`
  }
}

console.log(typeof Animal) // function

const snake = new Animal('lily')
console.log(snake.name)

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const xiaobao = new Dog('xiaobao')
console.log(xiaobao.bark())

class Cat extends Animal {
  constructor(name: string) {
    super(name)
    console.log(this.name)
  }

  // 重新父类的方法
  run(): string {
    return 'Meow, ' + super.run() // super. 调用父类的方法
  }
}

const meme = new Cat('meme')
console.log(meme.run())
