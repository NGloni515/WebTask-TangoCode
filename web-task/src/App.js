import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Body from './components/Body/Body';


function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Body />
      {/* <button onClick={() => props.getCars()}>GET CARS</button> */}
    </div>
  );
}



export default App;
// export default App;
