import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Routes, Route} from "react-router-dom";
import CV from './components/CV';
import Umiejetnosci from './components/Umiejetnosci';
import Doswiadczenie from './components/Doswiadczenie';
import Wyksztalcenie from './components/Wyksztalcenie';
import Portfolio from './components/Portfolio'

function App() {
  return (
    <Routes>
        <Route exact path='/' component={CV}/>
        <Routes>
          <Route path='/umiejetnosci' component={Umiejetnosci}/>
          <Route path='/doswiadczenie' component={Doswiadczenie}/>
          <Route path='/wyksztalcenie' component={Wyksztalcenie}/>
          <Route path='/portfolio' component={Portfolio}/>
        </Routes>
    </Routes>
  );
}

export default App;
