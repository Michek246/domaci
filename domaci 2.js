// domaci 2
/*
Za domaći:
1. Deklarisati klasu Person, koja će sadržati neka od svojstava koje osobe imaju.
Tu klasu naslediti u klasama Teacher i Student, i svaku od te dve klase proširiti sa nekim svojstvima koje su 
specifične za tu ulogu. Svojstva postavljati i vraćati korišćenjem gettera i settera.
*/
'use strict'

class Person {
    _name = "";
    _email="";

    constructor(name, email) {
        this.name=name;
        this.email=email;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }
    printPersonInfo() {
        console.log(`Vase ime je ${this._name} a vasa email adresa je ${this._email}`);
    }
}

class Student extends Person {
    _kurs = "";

    constructor(name, email, kurs) {
        super(name, email);
        this.kurs=kurs;
    }
    get kurs() {
        return this._kurs;
    }
    set kurs(value) {
        this._kurs = value;
    }
    printStudentInfo() {
        console.log(`Vi slusate ${this._kurs} kurs`);
    }
}

class Teacher extends Person {
    _predmet = "";

    constructor(name, email, predmet) {
        super(name, email);
        this.predmet=predmet;
    }
    get predmet() {
        return this._predmet;
    }
    set predmet(value) {
        this._predmet = value;
    }
    printTeacherInfo() {
        console.log(`Vi ste profesor ${this._name}. Vas email je ${this._email}. Vi predajete ${this._predmet} predmet`);
    }
}

let student = new Student("Mirela", "mirela@mmm.com","QA");
student.printPersonInfo();
student.printStudentInfo();

let teacher = new Teacher("pera", "pera@pera.com","Java script");
teacher.printTeacherInfo();

/*
2. Deklarisati klasu Display, koja će imati statički metod 
displayAsCurrency, sa jednim ulaznim parametrom. 
Ovaj metod treba da vraća string u obliku {parametar}RSD. 
Npr, pozivom Display.displayAsCurrency(100) 
će vratiti "100RSD".
*/
class Display {
    static displayAsCurrency(parametar){
        return parametar+"RSD";
    }
}

console.log(Display.displayAsCurrency(100));

  