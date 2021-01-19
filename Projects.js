import React from 'react';
import FutureProjects from './\Loan Calculator - Google Chrome 1_19_2021 3_38_27 AM (2).png';
import FutureProjects1 from './\game-photo.png';

const Projects = () => {



    return (
        <>
            <h1 className="projects-h1">Projects</h1>
        <div className="projects-container">

            

            <div className="projects-squares">
                <img src={FutureProjects1} alt="dsds"/>
            </div>

            {/* <div className="projects-squares">
            <img src="https://avatars0.githubusercontent.com/u/58121595?s=460&u=fc94148be687ead86dab0cc11d9e2a81a532f3ae&v=4" alt="dsds"/>
            </div> */}

            <div className="projects-squares">
            <img src={FutureProjects} alt="dsds"/>
            </div>
            

        </div>
                
            
        
            
        
        </>
    )
}



export default Projects;