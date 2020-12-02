import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles({
    typographyStyle:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"30px"
    }
})

const Header = () => {
    const classes = useStyles()
    return (
    <AppBar position='static'>
        <Toolbar>
        
        <Typography className={classes.typographyStyle}>
            <InvertColorsIcon />
            1037互助
        </Typography>
        <BeachAccessIcon />
        </Toolbar>
    </AppBar>)
}
export default Header