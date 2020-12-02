import { FormControl, makeStyles, MenuItem, Select } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 120,
      borderRadius:"0 0 0 0",
      backgroundColor:"white" ,
      height: 50
    },
    select:{
        height:50,
        width:120,
        boxSizing:"content-box",
        border: "none",
        textAlign:"center"
    },
}));
const SelList = () => {
    const [string, setString] = React.useState('');

    const handleChange = (event) => {
      setString(event.target.value);
    };
    const classes = useStyles();
    return(
            <FormControl className={classes.formControl}>
                <Select value={string} onChange={handleChange} className={classes.select}>
                <MenuItem className={classes.item} style={{marginTop:"10px"}} value={10}>All</MenuItem>
                <MenuItem className={classes.item} value={20}>Completed</MenuItem>
                <MenuItem className={classes.item} value={30}>Deleted</MenuItem>
                </Select>
            </FormControl>
            // <select className={classes.select}>
            //     <option></option>
            //     <option></option>
            //     <option></option>
            // </select>
    )
}
export default SelList