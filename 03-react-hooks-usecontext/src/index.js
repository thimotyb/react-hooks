import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
 
const MyContext = React.createContext();

function Display() {
  //return <div>{pippo}, I am your Father.</div>;
  return <Level1/>
}

function Level1() {
  const pippo = useContext(MyContext);
  return <Level2/>
}

function Level2() {
  return <Level3/>
}

function Level3() {
  const pippo = useContext(MyContext);
  return <div>{pippo.name}, I am your Father.</div>;
}

function App() {
  return (  
    <MyContext.Provider value={{ name: "Luke", surname: "Skywalker"}}>
      <Display />
    </MyContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
