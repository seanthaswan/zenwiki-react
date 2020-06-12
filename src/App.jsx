import React from 'react';
import { Header } from './partials/Header';
import { SearchPage } from './components/SearchPage';
// import { InfoModal } from './components/InfoModal';
import { Footer } from './partials/Footer';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <SearchPage />
        {/* {{ infoModalShown ? <div>info</div> : <InfoModal /> }} */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
