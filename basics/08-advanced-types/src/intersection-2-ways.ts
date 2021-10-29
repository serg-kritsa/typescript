
type TAdmin = {
  name: string;
  privileges: string[];
};
type TEmployee = {
  name: string;
  startDate: Date;
};
type ElevatedEmployeeFromTypes = TAdmin & TEmployee; // intersection 
const emp1: ElevatedEmployeeFromTypes = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

interface IAdmin {
  name: string;
  privileges: string[];
};
interface IEmployee {
  name: string;
  startDate: Date;
};
interface ElevatedEmployeeFromInterfaces extends IEmployee, IAdmin {}
const emp2: ElevatedEmployeeFromInterfaces = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};