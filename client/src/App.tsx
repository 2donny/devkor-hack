import { Route, Switch } from 'react-router-dom';
import useLogin from './hooks/useLogin';
import Layout from './components/Layout';
import Login from './components/auth/Login';
import { GlobalStyles } from './styles/styles';
import Profile from './components/profile/Profile';
import Call from './components/call/Call';
import CallWaitingRoom from './components/call/CallWatingRoom';
import KakaoRedirect from './components/auth/KakaoRedirect';

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

        <Route path="/auth/kakao">
          <KakaoRedirect />
        </Route>

        <Route path="/call" exact>
          <Call />
        </Route>

        <Route path="/call/waiting">
          <CallWaitingRoom />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
