import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';

const router = createBrowserRouter([
  {
      path:"/",
      element: <App/>,
      children:[
          {
              index:true,
              element: <WorkPage />,
          },
          {
            path:"/about/",
            element: <AboutPage />
          },
      ]
  }
]);

export default router;