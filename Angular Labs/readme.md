## Angular Labs

1. To understand the working of Template and a Template URL, let us try out both the features provided by Angular.
2.  
    - The details of that employee must be displayed on the home page.
    - Employee profile has been designed accordingly.
    - Using Nested Components, let's display the Employee details on the page.
3. 
    - The employee Profile data is currently displayed as a plain HTML page.
    - To understand styling, let's slightly enhance the Look of the employee profile by adding various styling to the profile.
4. 
    - The data for an employee is being hard-coded in HTML page.
    - We need to make it dynamic, such that we don't need to manipulate the view for every change in the data.
    - Using One-way biding try to display the data of the employee, from component

5. 
    - In the Employee Profile template, the Image icon is set to female icon by default.
    - But the image has to be different for different genders.
    - Hence, implement mapping suitable icon according to gender using property binding concepts .

6. 
    - In some cases, we use same multiple classes for different elements.
    - Using class binding, we can reuse the classes dynamically

7. 
    - Status of the employee has to be changing according to his  availability
    - The status can be represented effectively by showing the availability by styling the status with color coding.
    - Let's implement the above-mentioned requirement using Style Binding concepts.

8. 
    - Employee details are displayed in a plain box currently.
    - The requirement is ,On hovering the mouse on the employee details box we need to show that it is interactive.
    - Let's implement the above-mentioned requirement by using event binding.

9. 
    - There is a search bar on the right side of the page which is intended to search for employees.
    - Currently, since we have a single employee data, we will just try to bind the text box to a `<span>` and see how the two-way binding works.

10. 
    - Sometimes employee may not provide all the details.
    - In such case instead of leaving empty space, we can show that the data is not available using *nglf.
    - Also, let's add array of employee data, and use *ngFor to display all the profiles iteratively.

11. 
    - As per the requirement, the name of the employee has to be in upper case and the DOB has to be in the format of dd/mm/yyyy.
    - Considering the above requirement implement the functionality accordingly using different in-built pipes.

12. 
    - As per the requirement, the salutation (Ms. or Mr.) has to be appended with the name of employee.
    - Implement the above-mentioned requirement by creating custom pipe based on the gender of the employee.

13. 
    - As per the requirement, the total count, total number of female and Male employees also has to be tracked.
    - These counts must be captured in a different component.
    - Implement the above requirement by fetching the data from the component having employee details

14.

    - The employee data is now available in the employee component.
    - There might be the scenario where multiple components may require the employee data.
    - Implement services to enable all consumer classes to have the access to the employee data.

15. 

    - As per the requirement, we have a service that provides us the employees data, and we need to consume this service to get the data.
    - Implement HTTP services using Observables and fetch the data from the external service.