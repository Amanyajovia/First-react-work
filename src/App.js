import './App.css';
import Greet from './Greet'
import Goal from './Goal/Goal';
import Garage from './Garage/Garage';
import Form1 from './Forms/FirstForm';
import Form2 from './Forms/SecondForm';
import Form3 from './Forms/ThirdForm';


function App() {
  const firstName="Amanya";
  const secondName="Jovia";
  const friend="Faith";
  return(
    <div className='centered-container'>
      <div className='App'>
          <h1>Learning</h1>
           <Greet name={firstName} age="22" school="WITI" address="Bukoto"/>
           <Greet name={secondName} age="22" school="WITI" address="Hoima"/>
           <Greet name={friend} age="20" school="WITI" address="Kamwokya"/>
      </div>
      <div>
        <Goal/>
        <Goal isGoal = {true}/>
      </div>
      <div>
        <Garage/>
      </div>
       <div>
          <Form1 />
          <hr />
          <Form2 />
          <hr />
          <Form3 />
      </div>

    </div>
     
  );
}

export default App;