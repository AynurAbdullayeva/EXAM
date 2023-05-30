import MainRoot from "../Pages/MainRoot";
import Home from "../Pages/Home/Home";
import About from '../Pages/About';
import Services from '../Pages/Services';
import Portfolio from '../Pages/Portfolio';


export const ROUTS = [
  {
    path: "/",
    element: <MainRoot/>,
    children: [
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/services',
        element:<Services/>
      },
      {
        path:'/portfolio',
        element:<Portfolio/>
      }
    ],
  },
];
