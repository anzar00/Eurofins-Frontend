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
  employees: Employee[] = [
    {EmployeeId: 1, Name: "John Doe", Gender: "M", DOB: new Date(1992, 1, 22), Area: "Whitefield", IsAvailable: true},
    {EmployeeId: 2, Name: "Jane Doe", Gender: "F", DOB: new Date(1992, 1, 22), Area: "Whitefield", IsAvailable: true},
    {EmployeeId: 3, Name: "John Smith", Gender: "M", DOB: new Date(1985, 7, 12), Area: "Marathahalli", IsAvailable: true},
    {EmployeeId: 4, Name: "Emily Johnson", Gender: "F", DOB: new Date(1990, 4, 5), Area: "Koramangala", IsAvailable: false},
    {EmployeeId: 5, Name: "David Lee", Gender: "M", DOB: new Date(1998, 11, 17), Area: "Indiranagar", IsAvailable: true},
    {EmployeeId: 6, Name: "Megan Chen", Gender: "F", DOB: new Date(1995, 3, 25), Area: "Bellandur", IsAvailable: true},
    {EmployeeId: 7, Name: "Daniel Kim", Gender: "M", DOB: new Date(1989, 8, 9), Area: "Jayanagar", IsAvailable: false},
  ];
  constructor(private _employeeService: EmployeeService) {

  }

  ngOnInit(): void {


    // Lab 15: HTTP Service - RxJs



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


}
