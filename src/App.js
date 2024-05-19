import './App.css';
import Header from './Common/Header';
import AboutPage from './Pages/AboutPage';
import ContentPage from './Pages/ContentPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" exact element={<ContentPage />} />
          <Route path="/about" exact element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
