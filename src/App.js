import logo from './logo.svg';
import './App.css';
import Greet  from './Components/Greet'; // After this include below in App component
import Welcome from './Components/Welcome';
import Changestate from './Components/ChangeState';
import Counter from './Components/Counter';
import FunctionalClick from './Components/FunctionalClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import NameList from './Components/NameList';
import Form from './Components/Form';
import Table from './Components/Table';
import ClickCounter from './Components/ClickCounter';
import HoverCount from './Components/HoverCount';
import HoverCounterTwo from './Components/HoverCounterTwo';
import ClickCounterTwo from './Components/ClickCounterTwo';
import NewCounter from './Components/NewCounter';


function App() {
  return (
    <div className="App">
     {/* <Greet /> 
      <Welcome />  */}

      
{/*
      <Greet name="Bhawesh" heroName="good Boy">
        <p>This is children</p>
      </Greet>
      <Greet name= 'ashwin' heroName="good Boy">
        <button>Subscribe</button>
      </Greet>
*/}     
      
      {/* <Changestate /> */}

      {/* <Counter /> */}

      {/* <FunctionalClick /> */}   

      {/* <EventBind /> */}

      {/* <ParentComponent /> */}

      {/* <NameList /> */}

      {/* <Form /> */}

      {/* <Table /> */}
      {/* <ClickCounter />
      <HoverCount /> */}

      <NewCounter render={(count , incrementCount)=>{   // render is a prop which will control what is going to be rendered by component 
        return <ClickCounterTwo count={count} incrementCount={incrementCount} />
      }} />
       <NewCounter render={(count , incrementCount)=>{
        return <HoverCounterTwo count={count} incrementCount={incrementCount} />
      }} />
      
    </div>
    
  );
}

export default App;
