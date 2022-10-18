import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Main from './component/Layout/Main';
import Users from './component/Users/Users';
import UserData from './component/UserData/UserData';

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


        // ai line diye amra kono page a kono data fetch korte pari kono pera charai. Users component er moddhe useLoaderData namer code dekho
        {
          path: 'users',
          loader: async() => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Users></Users>
        },
        {
          path: '/user/:userId',
          loader: async({params})=> {
            return fetch('https://jsonplaceholder.typicode.com/users/'+params.userId)
          },
          element: <UserData></UserData>
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
