import { useState, useEffect } from 'react'
import { Persons, Form } from './Components/Components'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas',
    //   number: "07407780"
    // },
    // { name: 'Grace Hopper',
    //   number:" 08135767286"
    // }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  const handleNameChange= (e)=>{
    e.preventDefault();
    // console.log(e.target.value)
    setNewName(e.target.value);
    
  };
 
  const handleNumberChange= (e)=>{
    e.preventDefault();
    // console.log(e.target.value)
    setNewNumber(e.target.value);
    
  };

  const addPerson = (e) =>{
    e.preventDefault();

    const addNewName = {
      name: newName,
      number:newNumber 
    };

    // persons.forEach((n,i)=>{
    //   newName === n.name? console.log(`${newName} already exist`) : setPersons(persons.concat(addNewName));
    // })
    if (persons.some(person => person.name === newName || person.number === newNumber)) {
      alert(`${newName} or ${newNumber} already exists`);
    } else {
      setPersons([...persons, addNewName]);
    }
    setNewName("");
    setNewNumber("");
  };

  
  return (
    <div>
      <h2>Phonebook</h2>
      <Form addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )

}

export default App