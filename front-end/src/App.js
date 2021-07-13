
import { AuthProvider } from './contexts/UserContexts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes, PrivateRouteFuncionarios } from "./routes";
import Dashboard from './views/layouts/Dashboard/Dashboard'


function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            {routes?.public.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact
                component={route.component}
              />
            ))}
            <PrivateRouteFuncionarios path="/dashboard" component={Dashboard}/>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
