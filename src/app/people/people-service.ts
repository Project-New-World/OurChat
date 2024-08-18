//Lidar com as regras de negócio, validações necessárias, como maioridade.

import { CrudService } from "../../core/crud-services";
import { Person } from "../../data/people-interface";
import { PeopleRepository } from "./people-repository";

export class PeopleService extends CrudService<Person,PeopleRepository>{
    constructor(){
        super (new PeopleRepository())
    }
}