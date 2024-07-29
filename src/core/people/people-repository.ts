//Lidar com o banco de dados, enviar dados e ações ao banco de dados;

import { Person } from "../../data/people-interface"
import { sql } from "../../db/connection"

export class PeopleRepository{
    async insert(data:Person):Promise<any>{
        const { name , email, birthDate, password} = data
        const person = await sql`insert into people (nome, email, data_de_nascimento, senha) VALUES(${name}, ${email}, ${birthDate}, ${password})`
        return person
    }
    findById(){
    
    }
    async findAll():Promise<any>{
        return await sql`select * from people`
    }
    update(){
    
    }
    remove(){
    
    }    
}
