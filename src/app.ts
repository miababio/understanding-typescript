class Department {
    private employees: string[] = [];

    constructor(private id: string, public name: string) {}

    describe(this: Department) {
        console.log(`ID: ${this.id}, Department: ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}

const accounting = new Department('d1', 'Accounting');

const IT = new ITDepartment('d2', ['Mike']);

accounting.addEmployee('Mike');
accounting.addEmployee('Max');

accounting.describe();
accounting.printEmployeeInformation();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }
// accountingCopy.describe();