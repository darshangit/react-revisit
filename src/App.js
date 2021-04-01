import "./App.css";
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hi, I am a React App {Math.floor(Math.random() * 16)}</h1>
      <p>This is working</p>
      <Person name="Dash" age="28">My Hobbies Racing</Person>
      <Person name="Priya" age="37"/>
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {className: 'App'},
  //   React.createElement("h1", null, "Hi, I am a React App")
  // );
}

export default App;
