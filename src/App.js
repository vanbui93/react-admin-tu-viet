import React, { Component } from 'react';
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';
import { UserList } from './components/users';
import { PostList, PostEdit, PostCreate } from './components/posts';

import Dashboard from './components/dashboard/Dashboard';
import authProvider from './components/authProvider';
import categories from './components/categories';
import products from './components/products';
import reviews from './components/reviews';



import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('http://localhost:3000');

class App extends Component {
  state = { dataProvider: null };
  componentDidMount() {
    this.setState({ dataProvider });
  }
  
  render() {
    const { dataProvider } = this.state;
    if (!dataProvider) {
        return (
            <div className="loader-container">
                <div className="loader">Loading...</div>
            </div>
        );
    }
  return (
    //name="posts" => là endpoint, vd:  http://localhost:3000/posts
    <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      <Resource name="users" list={UserList} icon={UserIcon} />
      <Resource name="categories" {...categories} />
      <Resource name="products" {...products} />
      <Resource name="reviews" {...reviews} />
    </Admin>
  );
}
}

export default App;