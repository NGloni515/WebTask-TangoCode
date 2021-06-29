import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';

import { connect } from 'react-redux';

import { getCars } from './redux/cars/cars.actions';

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <button onClick={() => props.getCars()}>GET CARS</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    cars: state.cars.currentCars,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCars: () => dispatch(getCars())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
