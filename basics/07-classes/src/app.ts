class Department {
  public name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.employees[2] = 'Anna'; // error for private field

accounting.describe();
accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();

// const accountingCopy00 = { describe: accounting.describe };
// // accountingCopy00.describe(); // error
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe(); // Department: DUMMY