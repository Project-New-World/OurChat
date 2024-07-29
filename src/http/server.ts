import fastify from "fastify";
import { PeopleHandler } from "../core/people/people-handler";

const server = fastify()

server.post("/people", (request,response)=>{
    return new PeopleHandler().insert(request,response)
})
server.get("/people", (request,response)=>{
    return new PeopleHandler().findAll(request,response)
})

server.listen({
    port:3333
});