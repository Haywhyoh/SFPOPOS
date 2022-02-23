import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList'
import Footer from './Footer'
import { HashRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router >
    
      <div className="App">
        <Title/>
        <Routes>
        <Route exact path="/" element={<POPOSList />} />
        </Routes>
        <Footer />
      
      </div>
    
    </Router>
  );
}

export default App;
