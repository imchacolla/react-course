import React from 'react';
import './menu-item.component';

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOW NOW</span>
            </div>
        </div>
    
)
export default MenuItem;