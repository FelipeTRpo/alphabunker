export class Input_User {
    private objInput: Map<string, string>
    private errors: Array<string>
    constructor(name:string, birth_date:string, cpf:string, email:string) {
        this.errors = new Array
        this.objInput = new Map<string, string>([
            ["name", name],
            ["birth_date", birth_date], 
            ["cpf", cpf], 
            ["email", email], 
        ]);
    }
    
    public hasIntegrity(): Array<string>{
        if(this.hasBlank()) return this.errors;
        return this.errors
    }

    private hasBlank(): boolean {
        for(let [key, value] of this.objInput) if(!value) this.errors.push(`${key} is blank`)
        return (this.errors ? true : false)
    }

}