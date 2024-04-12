function Parts (props){
    // console.log(props.parts)

    const arto = {
        name: 'Arto Hellas',
        age: 35,
        education: 'Filosofian tohtori',
        greet: function() {
          console.log('hello, my name is', this.age)
        },
      }
      
      arto.greet()  // tulostuu hello, my name is Arto Hellas


    return(
        <>
        <h1>Hello this is react</h1>
        <p>{props.parts[0].name} {props.parts[0].exercises}</p>
        <p>{props.parts[1].name} {props.parts[1].exercises}</p>
        <p>{props.parts[2].name} {props.parts[2].exercises}</p>
        </>
    )
};

export default Parts;

