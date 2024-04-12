import { useState } from 'react'

import Feedback from './Components/Feedback'
import { Button, Statistics } from './Components/Feedback'


function App() {
  
  const [stat, setStat] = useState({
    good:0,
    neutral:0,
    bad:0,
    click:[]
  })




  const {good, neutral, bad, click} = stat;

  // const updateGood = () => {
  //     const goodFeedback = {
  //       good:good+1,
  //       neutral:0,
  //       bad:0
  //     }

  //     setStat(goodFeedback)
  // };


  const updateGood = () => {
    const goodFeedback = {
      ...stat, good:good+1, click:click.concat("G")
    }
    setStat(goodFeedback)

};


  const updateNeutral = () => {
    const neutralFeedback = {
      ...stat,
      neutral:neutral+1,
      click:click.concat("N")
    }

    setStat(neutralFeedback)
};


const updateBad = () => {
  const badFeedback = {
    ...stat, 
    bad:bad+1,
    click:click.concat("B")
  }

  setStat(badFeedback)
}

const updateFeedback = ()=>{

}


const total = good+bad+neutral;


  return (
    <>
      <Feedback/>
      <Button onClick={updateGood} text="Good"/>
      <Button onClick={updateNeutral} text="Neutral"/>
      <Button onClick={updateBad} text="Bad"/>

      <h2>Statistics</h2>
      
      <Statistics text="Good: " updateCount={good} />
      <Statistics text ="Neutral: " updateCount={neutral} />
      <Statistics text= "Bad: " updateCount={bad}/>
      <Statistics text= "Total: " updateCount={total} />
      <Statistics text= "Average: " updateCount={total/3} />
      <Statistics text= "Positive " updateCount={good/total*100} textP="%" />

    </>
  )
}

export default App
