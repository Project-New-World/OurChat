//Lidar com o banco de dados, enviar dados e ações ao banco de dados;

import { CrudRepository } from "../../core/crud-repository"
import { Person } from "../../data/people-interface"

export class PeopleRepository extends CrudRepository<Person>{
    constructor(){
        super ("people",["name","email","birth_date","password"])
    }
}