import React from 'react';
import Card from '../assets/Card';



function Library(){
    return(
        <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
            <h1>Its Library</h1>
            <div className='cards'>
                <Card title={"Title"} content={"Content"}/>
            </div>
           
        </div>
        
    )
}

export default Library