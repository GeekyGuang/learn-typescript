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
