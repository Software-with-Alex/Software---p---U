import React from 'react';
import ResumePicture from './unnamed.jpg';
import Resumeresume from './\Resume - 2020 - updated (2) - Word 1_18_2021 4_28_03 AM.png'


const Resume = ( ) => {
    
    
    
    return(

            <>
                
                <section className="about section " id="about">
                    <h2 className="section-title">Resume</h2>
                    <div className="about__container bd-grid">
                        <div className="about__img">
                            
                            <img className="resume-resume" src={Resumeresume} alt="ececec"/>

                        </div>
                        <div>
                            <h2 className="about__subtitle">
                                I'm Alexander
                            </h2>
                            <p className="about__text">    I'm currently a senior in college in the <b>Analytics</b> field. I served in the world greatest AirForce. I have volunteered outside of my military career to those in need of homes, and shelter in many states. Upon the  completion of the AirForce I have chosen to dedicate my life to education in the field of technology. I have some experience with <b>Python</b> , <b>JavaScript</b> , <b>React</b> , and many libraries associated with these languages. I am currently in pursuit of my career in <b>Frontend Development</b> . I am <b>Competitive</b> , <b>Hardworking</b> , <b>Dedicated</b> and  to my <b>Professionalism</b> .   </p>
                        </div>
                    </div>
                </section>
            
            
            </>
    )
}


export default Resume;