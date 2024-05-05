import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MyListPage from './pages/MyListPage';

export const routes = [
  {
    path: '/login',
    component: AuthPage,
    isPublic: true,
  },
  {
    path: '/',
    component: HomePage,
    isPublic: false,
  },
  {
    path: '/movie/:id',
    component: MovieDetailsPage,
    isPublic: false,
  },
  {
    path: '/my-list',
    component: MyListPage,
    isPublic: false,
  },
];
