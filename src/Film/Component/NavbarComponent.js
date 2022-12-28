import logo from '../assets/kn.png';

const NavbarComponent = () => {


  const enteteStyle = {
       height : "40px", 
       backgroundColor : "white", 
       marginTop : "-15px", 
       marginLeft : -15 , 
       marginRight : -15, 
      }
  const styleObject = {color : "black", textAlign : "center", fontSize : "15px", paddingTop :"12.5px"}

  return (

     <div>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <div style={enteteStyle}>
            <h1 style={styleObject}>Regarder vos films préférés</h1>
          </div>
          <div  className='navPrincipal'>
             <img src={logo} className="App-logo" alt="logo" />             
             <ul className='usericon'>
                <li><a href="http://">Connexion</a><i class="fa fa-user"></i></li>
             </ul>
          </div>
          <div>
             <ul className='liStyle'>
                <li><a href="./App.js">Accueil</a></li>
                <li><a href="http://">Series</a></li>
                <li><a href="http://">Movies</a></li>
                <li><a href="http://">My liste</a></li>
                <li><a href="./AddMovie.js">Add new movie</a></li>
              </ul>
          </div>
          
     </div>

  );
}

export default NavbarComponent;