import React from 'react';
import useUI from "./utils/ui"
import {ThemeProvider} from "@material-ui/core"
import createTheme from "./theme";
import Router from "./router"

function App() {
  const {theme,setTheme,themes} = useUI();


  return (
    <ThemeProvider theme={createTheme(theme)}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
