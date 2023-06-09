import { Component, OnInit, HostListener } from '@angular/core';
import { Employee } from '../../shared/models/Employee'
import { EmployeeService } from '../../core/services/EmployeeService';
// import { error } from '@angular/compiler/src/util';
// import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  // Lab 14: Services - getEmployees()
  employees: Employee[] = [];
  constructor(private _employeeService: EmployeeService) {
    
  }

  ngOnInit(): void {


    //this.employees = this._employeeService.getEmployees();

    // Lab 15: HTTP Service - RxJs

    this._employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
      


  }


  // Lab 4: Interpolation - Person data

  // Name: string = "John Doe";
  // Gender: string = "M";
  // DOB: string = new Date(1992, 1, 22).toLocaleDateString();
  // Area: string = "Whitefield";
  // IsAvailable: boolean = false;

  // Lab 5: Property Binding - ImgSrc

  ImgSrcM: string = '../../assets/images/male.png';
  ImgSrcF: string = '../../assets/images/female.png';

  // Lab 6: Class Binding - KeyStyle

  KeyStyle: string = "text-center bold";

  IsItalic: boolean = false;

  // Lab 7: StyleBinding - isAvailable

  // Lab 8: Event Binding - box-shadow

  mouseOver($event) {
    $event.srcElement.classList.add('box-shadow');
  }

  mouseOut($event) {
    $event.srcElement.classList.remove('box-shadow');
  }

  // Lab 9: Two-way Binding - searchText

  searchText: string = "";

  // Lab 10: *ngFor - data array

  trackByEmpID(index: number, employee: Employee): number {
    return employee.EmployeeId;
  }
  // Lab 13: Input Property - Get counts

  getTotalCount(): number {
    return this.employees.length;
  }

  getMaleCount(): number {
    return this.employees.filter(f=>f.Gender === "M").length;
  }

  getFemaleCount(): number {
    return this.employees.filter(f=>f.Gender === "F").length;
  }

}
