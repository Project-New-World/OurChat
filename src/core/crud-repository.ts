//Lidar com o banco de dados, enviar dados e ações ao banco de dados;

import { sql } from "../db/connection"

export class CrudRepository<T>{
    table:string
    columns:Array<string>
    constructor(table:string,columns:Array<string>){
        this.table = table
        this.columns = columns
    }
    async insert(body:any):Promise<any>{
        const data = await sql`insert into ${sql(this.table)} ${sql(body,this.columns)}`
        
        return data
    }
    async findById(id:number){
        const data = await sql`SELECT * FROM ${sql(this.table)} WHERE id = ${id}`

        return data
    }
    async findAll():Promise<any>{
        return await sql`select * from ${sql(this.table)}`
    }
    async update(body:any,id:number){
        const personUpdate = await sql `UPDATE ${sql(this.table)} SET ${sql(body,this.getKeyAndValue(body))} WHERE id = ${id}`

        return personUpdate
    }
    async remove(id:number){
        return await sql`DELETE FROM ${sql(this.table)} WHERE id = ${id}`
    }    

    getKeyAndValue(body:Partial<T>){
        const data = Object.entries(body)
        .map(([key])=>key)
    
        return data
    }
}