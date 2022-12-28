import './App.css';
import NavbarComponent from "./Film/Component/NavbarComponent.js";
import MovieListe from './Film/Component/MovieListe';
import Footer from './Film/Component/Footer';

function App() {

  const bdStyle = {backgroundColor : "black", minHeight: "100vh", paddingTop : '12px', paddingLeft : '20px', paddingRight : '20px'}
   

  return (

    <div className="App">
      <header className="App-header"  style={bdStyle}>
            <NavbarComponent/>
            <MovieListe/>
      </header>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
