export const Persons = ({persons})=>{
    return(
        <>
            {persons.map(person=><p>{person.name}{" "}{person.number}</p>)}
        </>
    )
}