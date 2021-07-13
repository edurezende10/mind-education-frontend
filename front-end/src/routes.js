import React from 'react';
import {
  RiDashboardLine, RiProfileFill, RiUserSettingsLine
} from "react-icons/ri";
import { Redirect, Route } from 'react-router-dom';
import { getToken } from './services/auth';
import Listusers from './views/pages/ListUsers/ListUsers';
import Profile from './views/pages/Profile/Profile'
import SignIn from './views/pages/SignIn/SignIn';
import SignUp from './views/pages/SignUp/SignUp';

export const PrivateRouteFuncionarios = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...{ rest }}
      render={
        (props) =>
          getToken() != null ? (
            <Component {...{ props }} />
          ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  );
};

export const routes = {
  protected: [
    {
      path: "/dashboard",
      title: "Dashboard",
      role: [999, 1],
      icon: RiDashboardLine,
      component: () => <div />,
    },

    {
      path: "/dashboard/users",
      title: "Usuários",
      role: [999],
      icon: RiUserSettingsLine,
      component: () => <Listusers />,
    },
     {
      path: "/dashboard/profile",
      title: "Meu perfil",
      role: [999, 1],
      icon: RiProfileFill,
      component: () => <Profile />,
    }, 
  ],
  public: [
    {
      path: '/',
      component: () => <SignIn />,
    },
    {
      path: '/register',
      component: () => <SignUp />,
    },
  ],
};
