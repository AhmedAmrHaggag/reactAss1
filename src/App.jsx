import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About ';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
// import Home from './home/home';







const router = createBrowserRouter ([
  {path:'/',element:  <Project/>,children:[
    {path:'/', element: <Home/>},
    {path:'about',element: < About /> },
    {path:'portfolio',element: < Portfolio /> },
    {path:'contact',element: < Contact /> }
  ] },
  {path:'navbar',element: <Navbar/>},
  
  {path:'*',element: <h1> Unexpected Application Error! 404 Not Found</h1> }
])

function App() {
  return ( <>
  
  {/* < Home/>
  < About /> */}

  
  {/* <h1 className='bg-danger'>hello</h1>
  <h1 className='bg-warning ' > hello again</h1> */}
  
  <RouterProvider router={router} />

  </>


    
   

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
