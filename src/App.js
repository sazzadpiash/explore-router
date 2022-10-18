import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home></Home>
    },
    {
      path: "about",
      element: <About></About>
    }
  ])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
