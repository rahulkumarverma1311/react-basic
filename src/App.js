import './App.css';
import Person from './components/person';
import User from './components/user';

function App() {
  return (
    <div className="App">
     <h1>Hii i am react</h1>
     <p>this is working</p>
     <Person name ='Rahul' age="23"/>
     <Person name="Ravi" age="24">I can paly bgmi</Person>
     <Person name="Ram" age="32"/>
     <User name="Rahul" age="23"/>
    </div>
  );
}

export default App;
