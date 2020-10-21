// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email, role='Employee'){
        this.name=name,
        this.id = id,
        this.email = email,
        this.role=role
    }
    getName(){
        console.log(`Employee Name:`, this.name)
        return this.name
    }
    getId(){
        console.log(`Employee id:`, this.id)
        return this.id
    }
    getEmail(){
        console.log(`Employee email:`, this.email)
        return this.email
    }
    getRole(){
        console.log(`Employee role:`, this.role)
        return this.role

    }

}

module.exports=Employee