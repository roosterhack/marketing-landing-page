import './App.css';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="my-0 mx-auto bg-white px-28">
        <Hero />
      </div>
    </>
  );
}

export default App;
