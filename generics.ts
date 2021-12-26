function echo<T>(arg: T): T {
  return arg
}

const msg = echo<string>('hello')
const msg2 = echo(123)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result2 = swap(['hello', 123])

function len<T>(arr: T[]): number {
  return arr.length
}

interface IWithLength {
  length: number
}

function echoWithArray<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

echoWithArray([1, 2, 3])
echoWithArray({ length: 10 })
echoWithArray('hello')

class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)

interface KeyPair<T, U> {
  key: T
  value: U
}

let kp1: KeyPair<number, string> = { key: 1, value: 'str' }
let kp2: KeyPair<string, number> = { key: 'str', value: 123 }

let arr: Array<number> = [1, 2, 3]

interface IPlus<T> {
  (a: T, b: T): T
}

function plus(a: number, b: number): number {
  return a + b
}

function connect(a: string, b: string): string {
  return a + b
}

const a: IPlus<number> = plus
const b: IPlus<string> = connect
