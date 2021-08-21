import { Route, Switch } from 'react-router-dom';
import useLogin from './hooks/useLogin';
import Layout from './components/Layout';
import Login from './components/auth/Login';
import { GlobalStyles } from './styles/styles';
import Profile from './components/profile/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useLogin();

  return (
    <Layout>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/me">
          <Profile />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
