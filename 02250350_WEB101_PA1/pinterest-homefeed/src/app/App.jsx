import Navbar from '../layout/Navbar';
import PinGrid from '../components/PinGrid';
import { pins } from '../data/pins';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <PinGrid pins={pins} />
      </main>
    </div>
  );
}

export default App;
