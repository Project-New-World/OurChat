//Lidar com os dados da requisição; define status(ex:201,2004); lida com os dados externos da aplicação; 

import { Person } from "../../data/people-interface";
import { PeopleService } from "./people-service";

export class PeopleHandler{
    service:PeopleService
    constructor(){
        this.service= new PeopleService()
    }
    async insert(request:any,response:any){
        const { body } = request
        const person = await this.service.insert(body)
        return response.status(201).send(person)
        
    }
    findById(){
    
    }
    async findAll(request:any,response:any){

        const people:Array<Person> = await this.service.findAll()
        return response.status(200).send(people)
    }
    update(){
    
    }
    remove(){
    
    }    
}