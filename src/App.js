import React from 'react';
import {Grid} from "@material-ui/core"
import Header from './Header'
import SignUp from './signUp';
import SignIn from './signIn'

const Initial = () => {
    return(
        <Grid container direction="column">
            <Grid item>
                <Header />
            </Grid>
            <Grid>
                <SignIn />
            </Grid>
        </Grid>
    )
}
export default Initial