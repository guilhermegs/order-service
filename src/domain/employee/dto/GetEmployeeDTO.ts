export class GetEmployeeDTO {
    
    constructor(
        private _id: string,
        private _name: string, 
        private _user: string, 
        private _department: string
    ) {
        this.validate()
    }

    validate() {
        if (!this._id || this._id == '') {
            throw new Error("The id is required.");
        }

        if (!this._name || this._name == '') {
            throw new Error("The name is required.");
        }

        if (!this._user || this._user == '') {
            throw new Error("The user is required.");
        }

        if (!this._department || this._department == '') {
            throw new Error("The department is required.");
        }
    }
}
