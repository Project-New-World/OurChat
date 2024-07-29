import { sql } from "./connection";

sql`
    CREATE TABLE IF NOT EXISTS people (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    data_de_nascimento DATE NOT NULL,
    senha VARCHAR(100) NOT NULL
);`.finally(()=>{
    console.log("fez")
})