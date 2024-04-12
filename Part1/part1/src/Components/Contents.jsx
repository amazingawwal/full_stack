import Parts from "./Parts";
// import { useState } from "react";


const Contents = (props)=>{
    // console.log(props.parts)
    return(
        <>
            <Parts parts ={props.parts} ></Parts>
        </>
    )
};

export default Contents;


/////////////////////////////////////////////////////////////////////////////////////////////


// export function Counter (){

// const [counter, setCounter] = useState(0);

// // const handleClick = ()=> setCounter(counter+1);

// // setTimeout(
// //     ()=> setCounter(counter + 1), 1000
// // );

// // console.log("rendering.....", counter);

// return(
//     <div>
//         <h1>{counter}</h1>
//         <button onClick={()=> setCounter(counter+1)}>
//             Add
//         </button>
//         <button onClick={()=> setCounter(0)}>
//             Zero
//         </button><button onClick={()=> setCounter(counter-1)}>
//             Minus
//         </button>
//     </div>
    
// )
// };



// const History = (props) => {
//     if (props.allClicks.length === 0) {
//       return (
//         <div>
//           the app is used by pressing the buttons
//         </div>
//       )
//     }
//     return (
//       <div>
//         button press history: {props.allClicks.join(' ')}
//       </div>
//     )
//   };

//   export const Button = ({handleClick, text}) =>{
//     return(
//         <>
//             <button onClick={handleClick}>{text}</button>
//         </>
//     )
//   }




// export const Test = () => {
//     const [left, setLeft] = useState(0)
//     const [right, setRight] = useState(0)
//     const [allClicks, setAll] = useState([])
  
//     const [total, setTotal] = useState(0)
  
//     const handleLeftClick = () => {
//       setAll(allClicks.concat('L'))
//       const updateLeft = left + 1;
//       setLeft(updateLeft)

//     //   setLeft(left + 1)
  
//       setTotal(updateLeft + right)
//     }
  
//     const handleRightClick = () => {    
//       setAll(allClicks.concat('R'))

//       const updateRight = right + 1;
//       setRight(updateRight);

//     //   setRight(right + 1)
  
//       setTotal(left + updateRight)
//     }
  
//     return (
//       <div>
//         <Button handleClick={handleLeftClick}  text="Left"/>
//         <Button handleClick={handleRightClick}  text="Right"/>
//         {/* <p>{allClicks.join(' ')}</p> */}
//         <History allClicks={allClicks} />
//         <p>total {total}</p>
//       </div>
//     )
//   }
