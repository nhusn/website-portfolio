import { useState } from 'react';
import './App.css';
import About from './component/About';
import Footer from './component/Footer';
import Header from './component/Header';
import MyService from './component/MyService';
import Projects from './component/Projects';

function App() {
  const [theme,setTheme] = useState('light')

  return (
    <div className="App" data-theme={theme}>
      <div id='full'>
        <Header theme={theme} setTheme={setTheme}/>
        <About/>
        <MyService/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
