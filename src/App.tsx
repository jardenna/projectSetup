import { FC } from 'react';
import { RouterProvider } from 'react-router';
import routeConfig from './routeConfig';

const App: FC = () => <RouterProvider router={routeConfig} />;

export default App;
