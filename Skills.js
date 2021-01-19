import React from 'react';
import codeImport from './\Your Repositories - Google Chrome 1_18_2021 6_13_25 AM (2).png'


const Skills = () => {
    
    return(
        <>
        
        <section className="skills section" id="skills">

         <h2 className="section-title">Skills</h2>

            <div className="skills__container bd-grid">
                <div>
                <h2 class="skills__subtitle">Profesional Skills</h2>
         <p className="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
         <div className="skills__data">
            <div className="skills__names">
            <i className='bx bxl-html5 skills__icon'></i>
            <span className="skills__name">JavaScript</span>
            </div>
            <div className="skills__bar skills__html">

              </div>
              <div>
                    <span className="skills__percentage">95%</span>
                 </div>

         </div>
         <div className="skills__data">
            <div className="skills__name">
            <i className='bx bxl-css3 skills__icon'></i>
            <span className="skills__name">CSS</span>
            </div>
            <div className="skills__bar skills__css">
                                
             </div>
             <div>
          <span className="skills__percentage">85%</span>
            </div>
         </div>
         <div className="skills__data">
            <div className="skill__names">
            <i className='bx bxl-javascript skills__icon' ></i>
             <span clasName="skills__name">React</span>

            </div>
            <div className="skills__bar skills__js">
                                
              </div>
              <div>
                <span className="skills__percentage">65%</span>
                </div>

         </div>
           <div className="skills__data">
             <div className="skills__names">
             <i className='bx bxs-paint skills__icon'></i>
               <span className="skills__name">UX/UI</span>
             </div>
             <div className="skills__bar skills__ux">
                                
             </div>
             <div>
             <span class="skills__percentage">85%</span>
             </div>

           </div>
             
        </div>
        <div className="github-img-img">
            <a href="https://github.com/Software-with-Alex">
            <img  src={codeImport} alt=""/>
            </a>
               

        </div>
                
</div>
        
        
        </section>
        
        
        </>
    )
}


export default Skills;