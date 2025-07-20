// Завдання 1

class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount) {
       if (amount <= 0) {
         throw new ('сума поповнення має бути більша за 0');    
       }
    this._balance += amount;
    return this._balance;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new "сума поповнення має бути більша за 0"();    
    }
    if (amount > this._balance) {
      throw new Error("Недостатньо коштів");
    }
    this._balance -= amount;
    return this._balance;
  }

  get balance() {
    return this._balance;
  }
}

const acc = new BankAccount('Оля', 1000);
console.log(acc.deposit(500));     // 1500
console.log(acc.withdraw(200));    // 1300
console.log(acc.balance);          // 1300
// acc.withdraw(2000);             // кидає Error("Недостатньо коштів")

// Завдання 2

class SavingsAccount extends BankAccount {
  constructor(owner, balance = 0, interestRate = 0.05) {
    super(owner, balance);
    this.interestRate = interestRate;
  }
  addInterest() {
    const interest = this._balance * this.interestRate; 
    this._balance += interest;
    return this._balance;
  }
} 
const save = new SavingsAccount('Іван', 2000, 0.1);
console.log(save.deposit(500));     // 2500
console.log(save.addInterest());    // 2750 (10% від 2500)
console.log(save.withdraw(1000));   // 1750
   
// Завдання 3

class Shape {
  constructor(name = "Shape") {
    this.name = name;
  }
getArea() {
  throw new Error('Not implemented');
}
}

class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super("Triangle"); 
    this.base = base;
    this.height = height;
  }
  getArea() {
     return 0.5 * this.base * this.height;
  }
}

const shapes = [new Rectangle(4, 5), new Circle(3), new Triangle(4, 6)];
for (const s of shapes) {
  console.log(s.constructor.name, "area =", s.getArea());
}

// Завдання 3

class ShapeCount {
  static count = 0;

  constructor(name="ShapeCount") {
    this.name = name;
    ShapeCount.count++;
  }
  static getCount() {
    return ShapeCount.count;
  }
} 

console.log(ShapeCount.getCount()); // повинно показати загальну кількість створених фігур