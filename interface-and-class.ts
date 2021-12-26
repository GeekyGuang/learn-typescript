type Radio = {
  swicthRadio(): void
}

// interface Battery {
//   checkBatteryStatus(): void
// }

interface RadioWithBattery extends Radio {
  checkBatteryStatus(): void
}

interface RadioWithBattery {
  meow(): void
}

class Car implements Radio {
  color: string
  swicthRadio(): void {}
}

class Cellphone implements RadioWithBattery {
  brand: string
  swicthRadio(): void {}
  checkBatteryStatus(): void {}
  meow(): void {}
}
