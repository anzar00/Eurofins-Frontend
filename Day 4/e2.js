// JS Encaapsulation 

// Emaple 1

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

let user = new User('user123', 'password123');

if(user.validateCredentials('user123', 'password123')) {
    user.getUserInfo();
}
