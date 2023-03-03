import React from 'react';
import {FaFilter} from "react-icons/fa"
import "./style.css"

function  Posts(){
return(
    <div id='main'>
        <h3>Latest Posts</h3><br></br>
        <div><i><FaFilter/></i>   Filter By Catagory</div><br></br>
        <div>
            <div id='container'>
                <div className='one'>All</div>
                <div className='one'>Artificial Intelligence</div>
                <div className='one'>Cloud Computing</div>
                <div className='one'>Devops</div>
                <div className='one'>Programming Languages</div>
                <div className='one'>Mobile Application Development</div>
                <div className='one'>Technology and tools </div>
                <div className='one'>Get a Job in a Tech Company</div>
                <div className='one'>Others</div>
            </div>
        </div>
    </div>
)
}

export default Posts;
