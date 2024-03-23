import Parts from "./Parts";

const Contents = (props)=>{
    console.log(props)
    return(
        <>
            <Parts part ={props.part1} exercises= {props.exercises1}></Parts>
            <Parts part ={props.part2} exercises= {props.exercises2}></Parts>
            <Parts part ={props.part3} exercises= {props.exercises3}></Parts>
        </>
    )
};

export default Contents;
