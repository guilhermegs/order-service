export class EmployeeDTO {
    constructor(
        private _name: string,
        private _user: string,
        private _department: string,
        private _password: string
    ) {}

    get name(): string {
        return this._name;
    }

    get user(): string {
        return this._user;
    }

    get department(): string {
        return this._department;
    }

    get password(): string {
        return this._password;
    }

    validate() {
        if (!this.name || this.name == '') {
            throw new Error("The name is required.");
        }

        if (this.name.length < 3) {
            throw new Error("The name should have at least 3 characters.");
        }

        if (!this.user || this.user == '') {
            throw new Error("The user is required.");
        }

        if (!this.password || this.password == '') {
            throw new Error("The password is required.");
        }

        if (!this.department || this.department == '') {
            throw new Error("The department is required.");
        }
    }

    static fromRequest({ name, user, department, password }): EmployeeDTO {
        return new EmployeeDTO(
            name,
            user,
            department,
            password
        )
    }
}
