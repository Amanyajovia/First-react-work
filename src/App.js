import './App.css';
import Greet from './Greet'

function App() {
  const firstName="Amanya";
  const secondName="Jovia";
  const friend="Faith";
  return(
    <div className='App'>
      <h1>Learning</h1>
      <Greet name={firstName} age="22" school="WITI" address="Bukoto"/>
      <Greet name={secondName} age="22" school="WITI" address="Hoima"/>
      <Greet name={friend} age="20" school="WITI" address="Kamwokya"/>

    </div>
  )
}

export default App;