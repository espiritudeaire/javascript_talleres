export class User {
    constructor(id, name, email, phone, username, website) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;
        this._username = username;
        this._website = website;
    }

    // Setters
    set id(value) {
        this._id = value;
    }

    set name(value) {
        this._name = value;
    }

    set email(value) {
        this._email = value;
    }

    set phone(value) {
        this._phone = value;
    }

    set username(value) {
        this._username = value;
    }

    set website(value) {
        this._website = value;
    }

    // Getters
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get phone() {
        return this._phone;
    }

    get username() {
        return this._username;
    }

    get website() {
        return this._website;
    }
}
