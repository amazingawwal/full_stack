import Header from "./Components/Header";
import Contents from "./Components/Contents";
import Total from "./Components/Total";

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name}></Header>
      <Contents parts={course.parts}></Contents>
      <Total parts={course.parts}></Total>
    </div>
  )
}

export default App