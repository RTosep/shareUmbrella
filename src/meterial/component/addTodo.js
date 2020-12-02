import React, { useState } from 'react';
import "./TodoList.css"
import { makeStyles, TextField, Box, Button, List, ListItem, Checkbox, ListItemText, IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SelList from './selectList';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const useStyles = makeStyles({
    root:{
        display:"flex",
        // marginLeft:'50%',
        // transform:'translateX(-50%)'
        justifyContent:"center",
        marginTop:"13vh",
        alignItems:"flex-start",
    },
    text:{
        width: '400px',
        height:52,
        borderRadius:"0 0 0 0",
        backgroundColor:"white",
        boxSizing:"content-box"
    },
    sumbitText:{
        height:52,
        borderRadius:"0 0 0 0",
        backgroundColor:"white",
    },
    boxicon:{
        color:"#e65100"
    },
    item:{
        display:"flex",
        flex:"1 0 auto",
        backgroundColor:"white",
        width:'620px',
        margin:"50px auto",
    },
    itemtext:{
        fontSize:"32px" 
    }
})  
const TodoList = () => {
    const classes = useStyles()
    const [input, setInput] = useState("")
    const [allList, setList] = useState([])
    const [check, setCheck] = useState([])
    const [style, setStyle] = useState("textDecoration:'none'")
    const handleSubmit = () => {
        if(!input.trim()){
            return
        }
        setList([...allList, input])
        setCheck([...check, 'true'])
        setInput("")
    }
    const deleteItem = (key) => {
        setList(allList.filter(item => key !== allList.indexOf(item) ))
        check.splice(key, 1)
    }
    const completed = (id) => {
        check[id] = !check[id]
        check[id]? setStyle("textDecoration:'none'") : setStyle("textDecoration:'line-through'")
        console.log(style)
        console.log(check)
    }
    const Item = () => {
        return 
    }
    return(
        <>
        <Box className={classes.root} >
            <form>
                <Box width={650}>
                    <TextField 
                        className={classes.text}
                        inputProps={{style: {fontSize: 32, margin:"0 10px", color:"", padding:"7px 0"}, }} 
                        onChange={(event => setInput(event.target.value))} 
                    >   
                    </TextField>
                    <Button className={classes.sumbitText} onClick={handleSubmit}>
                        <AddBoxIcon className={classes.boxicon} />
                    </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<SelList /> 
                </Box>
            </form>
        </Box>
        <Box>
            <List>
                {
                    allList.map((item, index) => {
                        return (
                            <ListItem
                                className={classes.item}
                                key = {index}
                                id = {item.id} // Add dynamic ID
                            >
                            <Checkbox
                                tabIndex={-1}
                                disableRipple
                                onClick={() => completed(index)}
                            />
                            <ListItemText style={{style}} classes={{primary:classes.itemtext}}>
                                {item}
                            </ListItemText>
                            <IconButton onClick={() => deleteItem(index)}>
                                <HighlightOffIcon style={{marginRight:"0"}}/>
                            </IconButton>
                            </ListItem>
                        )
                    })
                }
                
            </List>
        </Box>
        </>
    )   
}
export default TodoList