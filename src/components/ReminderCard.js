import React from 'react';
import './ReminderCard.css';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import TextTruncate from "react-text-truncate";

function ReminderCard({title, text, time, date}) {
    return (
        <div className="card">
            <div className="card__left">
                <h1>{title}</h1>
                <TextTruncate 
                    line={1}
                    element="p"
                    truncateText="  ...read more"
                    text={text}
                />
                {/* <p>{text}</p> */}
            </div>
            
            <div className="card__right">
                <div className="card__rightText">
                    <p>{date}</p>
                    <p>{time}</p>
                </div>

                <div className="card__rightIcons">
                    <DeleteIcon />
                    <EditIcon />
                </div>
            </div>  
        </div>
    )
}

export default ReminderCard
