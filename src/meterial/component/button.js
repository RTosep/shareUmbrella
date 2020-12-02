import React from 'react';
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    // buttonStyle:props => {
    //     return{
    //         color:props.cool?"blue":"green",
    //         backgroundColor:props.cool?"orange":"yellow"
    //     }
    // }
    buttonStyle:{
        color:"red",
        [theme.breakpoints.up("sm")]:{
            color:"blue",
            backgroundColor:"orange"
        }
    }
}))

export default function ButtonComponent(props) {  
    const classes = useStyles(props)
    return(
        <>
        <Button fullWidth className={classes.buttonStyle}>Small Button</Button>
        <h1 className={classes.textStyle}>hello</h1>
        </>
    )
}