import './App.css';
import Footer from './Footer/Footer.js';
import Header from './Header/Header.js';
import Main from './Main/Main.js';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Main />
      <Footer />

    </div>
  );
}

export default App;

/* import and use the Header. Main, and Footer components here */
/* the Header component needs a string passed in as the `name` prop */
/* the Footer component needs a year passed in as the `year` prop */
/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */