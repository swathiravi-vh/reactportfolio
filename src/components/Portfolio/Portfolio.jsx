import React, { useContext } from "react";
import "./Portfolio.css";
import "swiper/css";
import Todo from "../../img/todo.png";
import Food from "../../img/foodapp.png";
import Whats from "../../img/whats.png";
import Image from "../../img/photogallery.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
 <>
   <section className="recent-work" id="Project">
    <div class="container">
        <h1 id="h1">My Recent  <span id="id2">Works</span>
</h1>

    
           <u><h4 style={{textAlign:"center"}}>Credentials</h4></u>
           <h5 style={{textAlign:"center"}}>Admin : abc@gmail.com</h5>
           <h5 style={{textAlign:"center"}}>Password : 987</h5>


        <br /><br />
        <div class="projects">
          

          <div class="project">
            <div class="thubmnail">
            <img src={Todo} alt="" />
            </div>
            <h2>ToDo App </h2>
            <p>  Users can  list their daily activitis.They can Add, Read, Update and Delete. Here I have used React, NodejS and MongoDB</p>

            <div class="links">
            <br/>

<a href="https://github.com/swathiravi-vh/todoapp-frontend" target="_blank" ><button className="button s-button " id="btn">Frontend</button></a>

&nbsp;
          &nbsp;

<a href="https://github.com/swathiravi-vh/todoapp-backend" target="_blank"><button className="button s-button">Backend</button></a>

&nbsp;
          &nbsp;

<a href="https://todoappclient.netlify.app/" target="_blank"><button  className="button s-button">Live</button></a>

            </div>
            
            
          </div>
          
      
          <div class="project">
            <div class="thubmnail">
            




            <img src={Food} alt="" />




            </div>
            <h2>Food App</h2>
            <p> Where users can login and buy food by using add to cart and able to pay. Admin can able to update the food in the webpage. Here I used React,NodejS,and MongoDB</p>

            <div class="links">
            <a href="https://github.com/swathiravi-vh/foodappfrontend" target="_blank"><button className="button s-button">Frontend</button></a>
       
            &nbsp;
          &nbsp;

          <a href="https://github.com/swathiravi-vh/foodappbackend" target="_blank" ><button className="button s-button" id="btn">Backend</button></a>

          &nbsp;
          &nbsp;
          <a href="https://chipper-piroshki-b7e4e1.netlify.app/login" target="_blank"><button className="button s-button">Live</button></a>

            </div>
          </div>
   
        <div class="project">
          <div class="thubmnail">
          <img src={Image} alt="" />
          </div>
          <h2>Image App</h2>
          <p> Where User can view the image and add the image. They can explore the variety of image. 
              Here I used React,NodejS and MongoDB</p>
          <div class="links">
          <a href="https://github.com/swathiravi-vh/photo-gallery-app-frontend" target="_blank"><button className="button s-button">Frontend</button></a>
        

          &nbsp;
          &nbsp;

          <a href="https://github.com/swathiravi-vh/photo-gallery-app-backend" target="_blank"><button className="button s-button">Backend</button></a>

          &nbsp;
          &nbsp;
          <a href="https://zippy-mooncake-880e57.netlify.app/" target="_blank"><button className="button s-button" id="btn">Live</button></a>


          </div>
        </div>


        <div class="project">
          <div class="thubmnail">
          <img src={Whats} alt="" />
          </div>
          <h2>whatsapp Clone</h2>
          <p> Where users can login and chat with others in Whatsapp chat app. Users can easily send messages and post their daily activities. Here I used React,NodejS and Firebase</p>

          <div class="links">
          <a href="https://github.com/swathiravi-vh/Whatsappclone-client" target="_blank"><button className="button s-button">Frontend</button></a>
          

          &nbsp;
          &nbsp;
          <a href="https://github.com/swathiravi-vh/Whatsappclone-server" target="_blank"><button className="button s-button">Backend</button></a>

          &nbsp;
          &nbsp;
          <a  href="https://voluble-sundae-8dbfb0.netlify.app/" target="_blank"><button className="button s-button">Live</button></a>

          </div>
        </div>


        
     
      </div>
      </div>
      <br />
      <br /><br /> <br /><br />
      </section>
 </>
  );
};

export default Portfolio;
