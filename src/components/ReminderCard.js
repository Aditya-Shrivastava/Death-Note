import React from 'react';
import './ReminderCard.css';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { Tooltip } from '@material-ui/core';

import TextTruncate from "react-text-truncate";

function ReminderCard({title, text, time, date}) {
    return (
        <div className="card">
            <div className="card__left">
                <h1>{title}</h1>
                {/* <TextTruncate 
                    line={1}
                    element="p"
                    truncateText="  ..."
                    text={text}
                    textTruncateChild={<a href="#">Read more</a>}
                /> */}
                <p>{text}</p>
            </div>
            
            <div className="card__right">
                <div className="card__rightText">
                    <p>{date}</p>
                    <p>{time}</p>
                </div>

                <div className="card__rightIcons">
                <Tooltip title="Delete Reminder" placement="left-end">
                    <DeleteIcon style={{color: "#e53935", }} className="card__rightIcons--hover"/>
                </Tooltip>
                <Tooltip title="Edit Reminder" placement="right-end">
                    <EditIcon style={{color: "#0d8549", }} className="card__rightIcons--hover"/>
                </Tooltip>
                    
                    
                </div>
            </div>  
        </div>
    )
}

export default ReminderCard
