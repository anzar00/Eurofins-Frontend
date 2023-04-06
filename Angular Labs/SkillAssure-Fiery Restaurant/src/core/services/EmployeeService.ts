import { Injectable } from '@angular/core';
import { Employee } from '../../shared/models/Employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Lab 14: Services - Injectable()

@Injectable()
export class EmployeeService {

    // getEmployees(): Employee[] {
    //     return [
    //         { EmployeeId: 1, Name: "John Doe", Gender: "M", DOB: new Date(1992, 1, 22), Area: "Whitefield", IsAvailable: true },
    //         { EmployeeId: 2, Name: "Jane Doe", Gender: "F", DOB: new Date(1992, 1, 22), Area: "Whitefield", IsAvailable: true },
    //         { EmployeeId: 3, Name: "John Smith", Gender: "M", DOB: new Date(1985, 7, 12), Area: "Marathahalli", IsAvailable: true },
    //         { EmployeeId: 4, Name: "Emily Johnson", Gender: "F", DOB: new Date(1990, 4, 5), Area: "Koramangala", IsAvailable: false },
    //         { EmployeeId: 5, Name: "David Lee", Gender: "M", DOB: new Date(1998, 11, 17), Area: "Indiranagar", IsAvailable: true },
    //         { EmployeeId: 6, Name: "Megan Chen", Gender: "F", DOB: new Date(1995, 3, 25), Area: "Bellandur", IsAvailable: true },
    //         { EmployeeId: 7, Name: "Daniel Kim", Gender: "M", DOB: new Date(1989, 8, 9), Area: "Jayanagar", IsAvailable: false },
    //     ]
    // }

    url: string = 'http://localhost:3001/employees';

    constructor(private http: HttpClient) {}

    // Lab 15: HTTP Service - RxJs - http.get
    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.url);
    }



    // Lab 17: Forms - http.post
}