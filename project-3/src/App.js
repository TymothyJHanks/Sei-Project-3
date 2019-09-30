import React, {Component} from 'react';
import './App.css';

//Imported Components
import NavComp from "./Components/NavComp"
import SearchComp from "./Components/SearchComp"
import CreatePageComp from "./Components/CreatePageComp"

class App extends Component {
  render(){
    return (
      <div className="AppWrapper">
        <NavComp></NavComp>
        {/* <SearchComp></SearchComp> */}
        <CreatePageComp></CreatePageComp>
        

      </div>
    );
  }
}

export default App;


// Default 
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
