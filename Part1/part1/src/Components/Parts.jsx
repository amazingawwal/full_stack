function Parts (props){
    // console.log(props.parts)
    return(
        <>
        <p>{props.parts[0].name} {props.parts[0].exercises}</p>
        <p>{props.parts[1].name} {props.parts[1].exercises}</p>
        <p>{props.parts[2].name} {props.parts[2].exercises}</p>
        </>
    )
};

export default Parts;

