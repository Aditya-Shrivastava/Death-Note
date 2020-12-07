import React from 'react';
import './ExistingCategory.css';

import CategoryIcon from '@material-ui/icons/Category';

function ExistingCategory({name}) {
    // set onclick func to go to category pages
    return (
        <div className="exCategory">
            <div className="exCategory__items">
                <div className="exCategory__itemsIcon">
                    <CategoryIcon />
                </div>
                
                <p>{name}</p>
            </div>
        </div>
    )
}

export default ExistingCategory
