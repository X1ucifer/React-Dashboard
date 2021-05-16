import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { defaultTheme } from 'react-admin';
import merge from 'lodash/merge';
import restProvider from 'ra-data-simple-rest';
import UserList from "./components/userlist"
import userEdit from "./components/userEdit"
import userCreate from "./components/userCreate"
import MyLayout from "./pages/MyLayout";
// import white from '@material-ui/core/colors/white';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// const [darkMode, setDarkMode]= useState(false);



function App() {

  const myTheme = merge({}, defaultTheme, {
    palette: {
      type: 'dark',
      // primary: white,
      secondary: pink,
      error: red,
      contrastThreshold: 3,
      tonalOffset: 0.2,
      primary: {
        main: '#b2ff59',
      },
      secondary: {
        main: "#303030",
      },
    },
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
    },
    overrides: {
      MuiButton: { // override the styles of all instances of this component
        root: { // Name of the rule
          color: 'white', // Some CSS
        },
      },
    },
  });

  return (
    <Admin layout={MyLayout} theme={myTheme} dataProvider={restProvider("https://json-proj.herokuapp.com")}>
      <Resource name="users" list={UserList} edit={userEdit} create={userCreate} />
    </Admin>
  );
};

export default App;