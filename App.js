import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Project from './Project'
import Contact from './Contact'


function showProject()
{
   const main = ReactDOM.createRoot(document.getElementById("root"));
   main.render(<Project/>)
}

function showContact()
{
   const main = ReactDOM.createRoot(document.getElementById("root"));
   main.render(<Contact/>)
}

function App() {
  return (
    <div id="main-1">
    <div id="nav-1">
      <div>
        <img id='image-1' src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg" alt="" />
      </div>
      <div id="item-1">
        <button className="nav-button-1">Home</button>
        <button onClick={showProject} className="nav-button-1">Project</button>
        <button className="nav-button-1">About</button>
        <button onClick={showContact} className="nav-button-1">Contact</button>
        <div id="root"></div>
      </div>
    </div>
    <div id="body_1">
      <div id="left-1">
        <h1 id="h1">Abyakta Swain</h1>
        <h1 id="h1">Welcome to My Profile Page</h1>
        <p id="p1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis beatae voluptate aliquam quidem autem voluptatibus numquam odit ad eos debitis totam exercitationem, eligendi mollitia repellat delectus dicta iusto. Unde, sequi.
        </p>
      </div>
      <div id="right-1">
        <img id='image-2' src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg" alt="" />
      </div>
    </div>
  </div>
  );
}

export default App;
