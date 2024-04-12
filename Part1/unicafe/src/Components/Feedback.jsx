export default function Feedback (){
    return(
        <>
            <h1>Give Feedback</h1>
        </>
    )
};



export function Button ({text, onClick }){
    return(
        <>
            <button onClick={onClick}>{text}</button>
        </>
    )
};

export function Statistics ({text, updateCount, textP }){

    return(
        <div>
            <p>{text} {updateCount} {textP}</p>
        </div>
    )
};






