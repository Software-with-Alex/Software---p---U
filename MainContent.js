import React from 'react';
import Particles from 'react-particles-js';

const MainContent = () => {

    const styles = {
        root: {
          fontFamily: "sans-serif",
          textAlign: "center",
          height: "100%",
          
          background: "#37474f",
            display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      };

    return(
        <React.Fragment>
            <main style={styles.root} className="1-main">
                <section className="home bd-grid" id="home">
                    <div className="home__data">
                        <h1 className="home__title">Hi,<br/>I'm <span className="home__title-color">Alexander</span><br/> a Software Engineer</h1>
                        <a href="#footer" className="button" >Contact</a>
                    </div>
                    <div className="home__social">
                    
                        
                        <a href="https://github.com/Software-with-Alex" className="home__social-icon"><i className='bx bxl-github' ></i></a>
                    </div>
                    <div className="home__img">
                        <img src="https://avatars0.githubusercontent.com/u/58121595?s=460&u=fc94148be687ead86dab0cc11d9e2a81a532f3ae&v=4" alt="dsds"/>
                        
                    </div>
                    
                </section>
                <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 500, 
              density: { 
                enable: true, 
                value_area: 1900, 
              } 
            }, 
          },
        }} 
      />

            </main>
            
        </React.Fragment>
    )
}

export default MainContent;