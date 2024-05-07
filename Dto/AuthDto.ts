class Auth {
    nombrebarber: string;
    password: string
    constructor(
        email: string,
        password: string
    ) {
        this.nombrebarber = email;
        this.password = password
    }
}

export default Auth;