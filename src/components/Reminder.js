import React, { useEffect, useState } from 'react';
import './Reminder.css';

import {useStateValue} from './StateProvider';

import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogTitle, TextField, Tooltip } from '@material-ui/core';

import ReminderCard from './ReminderCard';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    textField: {
      marginBottom: '20px',
    //   display: 'grid',
    //   placeItems: 'center'
    },
}));


function Reminder() {

    const history = useHistory();

    const classes = useStyles();

    const [{activeCategory, reminders}, dispatch] = useStateValue();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [activeReminders, setActiveReminders] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [nowDateTime, setNowDateTime] = useState("");

    // console.log(reminders);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const todayTime = () => {
        // set current date and time to provide in maui datetime
        // setNowDateTime()
    };

    // console.log(nowDateTime);

    useEffect(() => {
        const filterReminders = () => {
            var items = reminders.filter(function(reminder) {
                return reminder.category === activeCategory;
            })

            // console.log(items);

            setActiveReminders(items);
        }

        filterReminders();
        todayTime();
    }, [])

    console.log(activeReminders);

    const handleReminderSubmit = (e) => {
        e.preventDefault();

        console.log("Title>>>", title);
        console.log("Desc>>>", description);

        setTitle("");
        setDescription("");
        setDialogOpen(false);
    };

    // console.log("Dialog Open >>>>", dialogOpen);

    return (
        <div className="reminder">
            {
                activeCategory?.length > 0 ? (
                    <div className="reminder__container">
                        <h1>Your Reminders for {activeCategory}</h1>

                        <div className="reminder__add" onClick={handleDialogOpen}>
                            <AddCircleIcon className="reminder__addIcon"/>

                            <p className="reminder__addText">Add new reminder</p>
                        </div>

                        <Dialog open={dialogOpen} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
                            <div className="reminder__dialog">
                                <DialogTitle id="form-dialog-title">Add a Reminder</DialogTitle>
                                <DialogContent>
                                    <form onSubmit={handleReminderSubmit}>
                                        <TextField 
                                            helperText={null}
                                            autoFocus
                                            margin="dense"
                                            label="Title"
                                            type="text"
                                            fullWidth
                                            className={classes.textField}
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />

                                        <TextField 
                                            helperText={null}
                                            autoFocus
                                            margin="dense"
                                            label="Description"
                                            type="text"
                                            fullWidth
                                            className={classes.textField}
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />

                                        <TextField
                                            id="datetime-local"
                                            label="Set Date and Time"
                                            type="datetime-local"
                                            // defaultValue="2017-05-24T10:30"
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={(e) => console.log(e.target.value)}
                                        />

                                        <div className="reminder__dialogButtons">
                                            <button style={{backgroundColor: "#fe5f55", }} type="button" onClick={handleDialogClose}>close</button>
                                            <button style={{backgroundColor: "#17b978", }} type="submit" onClick={handleReminderSubmit}>add</button>
                                        </div>

                                    </form>
                                </DialogContent>
                            </div>
                        </Dialog>

                        <div className={`${activeReminders?.length == 0 && "reminder__noCards"} ${"reminder__cards"}`}>
                            {activeReminders?.map((reminder) => (
                                <ReminderCard 
                                    id = {reminder.id}
                                    title = {reminder.title}
                                    text = {reminder.text}
                                    time = {reminder.time}
                                    date = {reminder.date}
                                />
                            ))}
                        </div>

                        
                        <div className="reminder__buttons">
                        <Tooltip title="Go To Categories" placement="right-end">
                            <KeyboardReturnIcon 
                                style={{color: "#3a3d44", }} 
                                onClick={() => history.push('/categories')} 
                            />
                        </Tooltip>
                        <Tooltip title="Delete This Category" placement="left-end">
                            <DeleteIcon 
                                style={{color: "#3a3d44", }} 
                            />
                        </Tooltip>
                        </div>
                    </div>
                ) : (
                    <h1>No Category Selected</h1>
                )
            }
               

                
        </div>
        
    )
}
export default Reminder



