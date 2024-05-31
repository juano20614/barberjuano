class User {
    private _email: string;
    private _nombres: string;
    private _apellidos: string;
    private _nombrebarber:string;
    private _horario: string;
    private _direccion:string;
    private _telefono: string;
    private _password: string
    constructor(
        email: string, 
        nombres: string,
        apellidos: string,
        nombrebarber:string,
        horario: string, 
        direccion:string,
        telefono: string,
        password: string
    ) {
        this._email = email;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._nombrebarber=nombrebarber;
        this._horario = horario;
        this._direccion=direccion;
        this._telefono = telefono;
        this._password = password
    }

    // Getters
   
   get email(): string {
    return this._email;
}

  get nombres(): string {
    return this._nombres;
}

 get apellidos(): string {
    return this._apellidos;
}

get nombrebarber(): string {
    return this._nombrebarber;
}

get horario(): string {
    return this._horario;
}

get direccion(): string {
    return this._direccion;
}


get telefono(): string {
    return this._telefono;
}

get password(): string {
    return this._password;
}

// Setters
set email(email: string) {
    this._email = email;
}

set nombres(nombres: string) {
    this._nombres = nombres;
}

set apellidos(apellidos: string) {
    this._apellidos =apellidos;
}

set nombrebarber( nombrebarber:string) {
    this._nombrebarber = nombrebarber;
}

set horario(horario: string) {
    this._horario = horario;
}


set direccion(direccion: string) {
    this._direccion = direccion;
}

set telefono(telefono: string) {
    this._telefono = telefono;
}

set password(password: string) {
    this._password = password;
}
}





export default User;

