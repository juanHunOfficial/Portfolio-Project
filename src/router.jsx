import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import WorkPage from './pages/WorkPage';

const router = createBrowserRouter([
  {
      path:"/",
      element: <App/>,
      children:[
          {
              index:true,
              element: <WorkPage />,
          },
      ]
  }
]);

export default router;