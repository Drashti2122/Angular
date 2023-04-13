import { Subject } from "rxjs";
import { Employee } from "./emp.model";

export class EmpService {
  employeeChanged = new Subject<Employee[]>();
  startedEditing = new Subject<number>();

  employee: Employee[] = [
    new Employee(
      'Drashti',
      '2017/02/15',
      'It Department',
    ),
    new Employee(
      'Hetvi',
      '1999/11/02',
      'fashion Designer'
    )
  ];

  getEmployees() {
    return this.employee.slice();
  }

  getEmployee(index: number) {
    return this.employee[index];
  }

  addEmployee(employee: Employee) {
    this.employee.push(employee);
    this.employeeChanged.next(this.employee.slice());
  }

  deleteEmployee(index: number) {
    this.employee.splice(index, 1);
    this.employeeChanged.next(this.employee.slice());
  }

  editEmployee(index: number, newEmployee: Employee) {
    this.employee[index] = newEmployee;
    this.employeeChanged.next(this.employee.slice());
  }
}
