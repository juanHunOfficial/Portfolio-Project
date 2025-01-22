import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: "/Portfolio-Project/",
    element: <App />,
    children: [
      {
        index: true,
        element: <WorkPage />,
      },
      {
        path: "about/",
        element: <AboutPage />,
      },
      {
        path: "contact/",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;