export class Student {
    id: string;
    name: string;
    email: string;
    constructor(id: string, name: string, email: string) {
        this.email = email;
        this.name = name;
        this.id = id;
    }
    // TODO: Esses modificadores deram problema com na hora de transpilar no babel. Se puder
    //       fazer a build só com o tsc eu acho q é mais seguro...
    // constructor(readonly id: string, readonly name: string, readonly email: string) {}
}
