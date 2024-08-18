//Lidar com as regras de negócio, validações necessárias, como maioridade.

import { CrudRepository } from "./crud-repository"

export class CrudService<T,R extends CrudRepository<T>>{
    repository:R
    constructor(repository:R){
        this.repository = repository
    }
    async insert(body:T):Promise<T>{
        const data = await this.repository.insert(body)

        return data
    }
    async findById(id:number){
        const data = await this.repository.findById(id)

        return data
    }
    async findAll():Promise<Array<T>>{
        const data = await this.repository.findAll()

        return data
    }
    async update(body:Partial<T>,id:number){
        const data = await this.repository.update(body,id)

        return data
    }
    async remove(id:number){
        return await this.repository.remove(id)
    }    
}