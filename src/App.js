import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Main from './component/Layout/Main';
import Users from './component/Users/Users';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>
        },
        {
          path: "about",
          element: <About></About>
        },
        {
          path: 'users',
          loader: async() => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Users></Users>
        }
      ]
    },
    {
      path: '*',
      element: <h1>This route haraye gese!!!!</h1> // ai route kono 404 page k dekhabe, mane user jodi ulta palta nam likhe search kore tahole ai page dekhabe
    }
  ])
 
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
