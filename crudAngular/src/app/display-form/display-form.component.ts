import { FormsModule } from '@angular/forms';
import { EmpService } from './../emp.service';
import { Employee } from './../emp.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit, OnDestroy {
  employee!: Employee[];
  subscription!: Subscription;

  constructor(private empService: EmpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.empService.employeeChanged.subscribe(
      (employee: Employee[]) => {
        this.employee = employee;
      }
    )
    this.employee = this.empService.getEmployees();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDeleteEmp(index: number) {
    this.empService.deleteEmployee(index);
  }

  onEditEmp(index: number) {
    //   // this.router.navigate(['../'], { queryParams: { id: index } })
    // this.router.navigate(['../', index, 'edit'], { relativeTo: this.route })
    this.empService.startedEditing.next(index);
    //   // const result = this.empService.getEmployee(index);

  }
}
