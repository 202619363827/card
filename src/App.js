// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     // import
// import logo from './logo.svg';
// import './App.css';
// import './App.css';
import React from 'react'
import Card from "./components/Card";
// import cardpro from "./componant/card";
// import cardpro from'./componant';
// function App() {
//   return (
const User1 = {
	name : "Amit",
	image : "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
	designation : "Graphic Designer",
	description : "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design."
}

const User2 = {
	name : "Ruhi",
	image : "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	description : "perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, and other types of music groups.",
	designation : "Singer"
}
function App() {
return (
  <>

    <div>
      <Card 
        name = {User1.name}
        image = {User1.image}
        designation = {User1.designation}
        description = {User1.description}
        />
    </div>
    

      <br></br><br></br>

    <div>
      <Card
          name = {User2.name}
          image = {User2.image}
          designation = {User2.designation}
          description = {User2.description}
        />
    </div>

  </>
);
}
export default App;

// return(
//   <card user={User}/>
//   <card user={User}/>
// );
// }
// export default App;
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
//     // </div>
//   );
// }

// export default App;
