class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }
}

const accounting = new Department('Accounting');

accounting.describe();

const accountingCopy00 = { describe: accounting.describe };
// accountingCopy00.describe(); // error
const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe(); // Department: DUMMY