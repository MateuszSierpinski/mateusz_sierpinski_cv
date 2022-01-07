import './App.css';
import CV from './components/CV';
import DropdownJezyki from './components/DropdownJezyki';


export default function App() {

  return (
    <section>
      <div className="sticky-dropdown">
        <DropdownJezyki />
      </div>
      <div className='cv-overlay'>
        <CV />
      </div>
    </section>
  );
}

