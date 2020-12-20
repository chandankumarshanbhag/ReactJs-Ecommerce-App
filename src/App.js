import React from 'react';
import useUI from "./utils/ui"
import {ThemeProvider} from "@material-ui/core"
import createTheme from "./theme";
import Button from "@material-ui/core/Button"
import DefaultLayout from "./layouts/default"

function App() {
  const {theme,setTheme,themes} = useUI();


  return (
    <ThemeProvider theme={createTheme(theme)}>
      <DefaultLayout>
      <Button onClick={() => setTheme(themes.UNICORN)} variant="contained" color="primary">Hello</Button>
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default App;
