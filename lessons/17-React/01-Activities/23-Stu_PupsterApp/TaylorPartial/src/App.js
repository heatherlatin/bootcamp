import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Judgement from './pages/judge';
import Search from './pages/search';
import NavBar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/judge" component={Judgement} />
          <Route exact path="/search/:searchTerm" component={Search} />
      </div>
    </BrowserRouter>
  );
}

export default App;
