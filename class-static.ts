class Snake {
  static categories: string[] = ['mammal', 'bird']
  static isSnake(a: any) {
    return a instanceof Snake
  }

  name: string
  constructor(name: string) {
    this.name = name
  }

  run() {
    return `${this.name} is running`
  }
}
console.log(Snake.categories)
const python = new Snake('lily')
console.log(Snake.isSnake(python))

console.log(python.hasOwnProperty('categories'))
