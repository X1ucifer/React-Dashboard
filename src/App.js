import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import UserList from "./components/userlist"
import userEdit from "./components/userEdit"
import userCreate from "./components/userCreate"
// const dataProvider = simpleRestProvider("http://json-proj.herokuapp.com/db");

const App = () => (
    <Admin dataProvider={restProvider("http://json-proj.herokuapp.com")}>
        <Resource name="users" list={UserList} edit={userEdit} create={userCreate}/>
    </Admin>
);

export default App;