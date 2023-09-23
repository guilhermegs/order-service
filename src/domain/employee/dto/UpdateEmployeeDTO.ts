export class UpdateEmployeeDTO {
    
    constructor(
        private _id: string,
        private _name: string, 
        private _user: string, 
        private _department: string,
        private _password: string
    ) {
        this.validate()
    }

    get id(): string {
        return this._id
    }

    get name(): string {
        return this._name
    }

    get user(): string {
        return this._user
    }

    get department(): string {
        return this._department
    }

    get password(): string {
        return this._password
    }

    validate() {
        if (!this._id || this._id == '') {
            throw new Error("The id is required.");
        }

        if (
            (!this._name || this._name == '') &&
            (!this._user || this._user == '') &&
            (!this._department || this._department == '') && 
            (!this._password || this._password == '')
        ) {
            throw new Error("At least one property is necessary to be updated");
        }
    }
}
