import React, { useState } from 'react';

function App() {
  const anecdotes = {
    0: {
      anecdote: 'If it hurts, do it more often.',
      rating: 0
    },
    1: {
      anecdote: 'Adding manpower to a late software project makes it later!',
      rating: 1
    },
    2: {
      anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      rating: 3
    },
    3: {
      anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      rating: 6
    },
    4: {
      anecdote: 'Premature optimization is the root of all evil.',
      rating: 0
    },
    5: {
      anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      rating: 0
    },
    6: {
      anecdote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      rating: 0
    },
    7: {
      anecdote: 'The only way to go fast, is to go well.',
      rating: 0
    }
  };

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(anecdotes);

  const updateSelected = () => {
    const newSelected = selected < Object.keys(anecdotes).length - 1 ? selected + 1 : 0;
    setSelected(newSelected);
  };

  const what = Object.keys(anecdotes);
  

  const updateVote = () => {
    const updatedVote = {
      ...vote,
      [selected]: {
        ...vote[selected],
        rating: vote[selected].rating + 1
      }
    };
    setVote(updatedVote);
  };

  const { anecdote, rating } = vote[selected];

  return (
    <>
      <div>{anecdote}</div>
      <div>has {rating} votes </div>

      <button onClick={updateVote}>Vote</button>
      <button onClick={updateSelected}>Next</button>
    </>
  );
}

export default App;
