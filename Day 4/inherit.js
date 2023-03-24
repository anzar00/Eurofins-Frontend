// Inheritance in JS

// Example 1

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    validateCredentials(username, password) {
        return username === this.username && password === this.password;
    }

    getUserInfo() {
        console.log(`Username is ${this.username} and password is ${this.password}.`)
    }
}

class Admin extends User {
    constructor(username, password, role) {
        super(username, password);
        this.role = role;
    }

    getRole() {
        console.log(`Role is ${this.role}.`)
    }
}

let user = new User('user123', 'password123');

if(user.validateCredentials('user123', 'password123')) {
    user.getUserInfo();
}

let admin = new Admin('admin123', 'password123', 'admin');

if(admin.validateCredentials('admin123', 'password123')) {
    admin.getUserInfo();
    admin.getRole();
}

