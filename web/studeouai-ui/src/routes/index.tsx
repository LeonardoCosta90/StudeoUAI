import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';

import SimplePiston from '../pages/SimplePiston';

import Users from '../pages/Users';
import CreateUser from '../pages/Users/CreateUser';
import EditUser from '../pages/Users/EditUser';

import Categories from '../pages/Categories';
import CreateCategory from '../pages/Categories/CreateCategory';
import EditCategory from '../pages/Categories/EditCategory';

import Class from '../pages/Class';
import Details from '../pages/Class/Details';
import CreateClass from '../pages/Class/CreateClass';
import EditCar from '../pages/Class/EditClass';

import Rentals from '../pages/Rentals';
import Welcome from '../pages/Welcome';
import Register from '../pages/Register';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />

        <Route path="/simple-piston" exact component={SimplePiston} isPrivate />

        <Route path="/users" exact component={Users} isPrivate />
        <Route path="/users/create-user" exact component={CreateUser} isPrivate />
        <Route path="/users/edit-user" exact component={EditUser} isPrivate />

        <Route path="/categories" exact component={Categories} isPrivate />
        <Route path="/categories/create-category" exact component={CreateCategory} isPrivate />
        <Route path="/categories/edit-category" exact component={EditCategory} isPrivate />

        <Route path="/class" exact component={Class} isPrivate />
        <Route path="/class/details" exact component={Details} isPrivate />
        <Route path="/class/create-class" exact component={CreateClass} isPrivate />
        <Route path="/class/edit-class" exact component={EditCar} isPrivate />

        <Route path="/rentals" exact component={Rentals} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;