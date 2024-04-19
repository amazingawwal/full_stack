export const Form = ({addPerson, newName, newNumber, handleNameChange, handleNumberChange})=>{
    return(
        <form type='submit'  onSubmit={addPerson}>
        <div>
          name: <input placeholder="input your name" value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          phone number: <input placeholder="input your number" type='number' value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
    )
};


export const Persons = ({persons})=>{
    return(
        <>
            {persons.map(person=><p>{person.name}{" "}{person.number}</p>)}
        </>
    )
}