import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employee } from './../emp.model';
import { EmpService } from './../emp.service';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})

export class MainFormComponent implements OnInit {
  employee!: Employee;
  id!: number;

  @Input() index!: number;
  empForm!: NgForm;

  editMode = false;
  editedItem!: Employee;
  subscription!: Subscription;


  constructor(private empService: EmpService, private route: ActivatedRoute, private router: Router) {
    // const id = this.route.snapshot.params['id']
    // console.log(id)
  }


  ngOnInit() {
    this.subscription = this.empService.startedEditing
      .subscribe((index: number) => {
        this.editMode = true;
        this.id = index;
        this.editedItem = this.empService.getEmployee(index);
        this.empForm.setValue({
          ename: this.editedItem.ename,
          edob: this.editedItem.edob,
          edept: this.editedItem.edept
        })
      })
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newEmployee = new Employee(value.ename, value.edob, value.edept);
    if (this.editMode) {
      // console.log(this.id)
      this.empService.editEmployee(this.id, newEmployee)
    } else {
      this.empService.addEmployee(newEmployee);
    }
    form.reset()
  }

  onClear() {
    this.empForm.reset();
    this.editMode = false;
  }
}
