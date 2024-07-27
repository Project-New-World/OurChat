interface Person {
    name: string,
    age: number
}

function printPerson(person:Person): Person {
    return person
}

const person = printPerson({
    name: "Teste",
    age: 10
})

console.log(person)