interface Person {
  readonly id: number
  name: string
  age: number
  address?: string
}

const obj: Person = {
  id: 1,
  name: 'jack',
  age: 21,
}

function add(x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

const add2: (x: number, y: number, z?: number) => number = add
