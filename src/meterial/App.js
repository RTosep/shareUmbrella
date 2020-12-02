import React from 'react';
import {  createMuiTheme, MuiThemeProvider, Typography, CssBaseline } from "@material-ui/core"

import TodoList from './component/addTodo';
const App = () => {
    const darkTheme = createMuiTheme({
        palette: {
            background:{
                default:'#ffb74d'
            }
        },
    });
    return(
        <MuiThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Typography variant="h3" align="center" style={{color:"white"}}>
                RTosep's Todo List
            </Typography>
            <TodoList />
        </MuiThemeProvider>
    )
}

export default App