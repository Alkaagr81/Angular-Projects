export class Employee {
empId:number;
firstName:string;
lastName:string;
dept:string;
city:string;
email:string;

constructor(empId: number, firstName: string,
     lastName: string,dept:string,
     city:string,email:string) {
    this.empId = empId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dept=dept;
    this.city=city;
    this.email=email;
  }

}
