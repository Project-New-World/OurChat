//Lidar com as regras de negócio, validações necessárias, como maioridade.

import { Person } from "../../data/people-interface";
import { PeopleRepository } from "./people-repository";

export class PeopleService{
    repository:PeopleRepository
    constructor(){
        this.repository=new PeopleRepository()
    }
    async insert(body:Person):Promise<Person>{
        //if (body.age < 18){
        //    console.log("Menor de idade n passarao")
        //}
        const person = await this.repository.insert(body)
        return person
    }
    async findById(personId:any){
        const person = await this.repository.findById(personId)
        return person
    }
    async findAll():Promise<Array<Person>>{
        const people = await this.repository.findAll()
        return people
    }
    update(){
    
    }
    async remove(personId:any){
        return await this.repository.remove(personId)
    }    
}