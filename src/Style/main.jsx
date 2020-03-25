import styled, { keyframes } from "styled-components";

const loop = keyframes`
   from {
   opacity: 0
  }
  to {
 opacity: 1
  }
`;

const StyleMain = styled.div`
*{
  font-family: 'Source Code Pro', monospace;
}
.position{
position:absolute; 
top:400px; 
left:600px; 
width:300px; 
height:300px; 
visibility:visible 
}

  overflow: hidden;

  .section-header {
    height: 100vh;
    background: linear-gradient(160deg, #ffffff 0%,#c5c5c5 100%);
  clip-path: polygon(0 7%, 100% 1%, 100% 96%, 0% 100%);
     h1{
        text-transform: uppercase;
         margin: 0;
         padding-top: 200px;
         font-size: 5em;
         font-weight: 200
     }
     h2{
       margin-top: 100px;
         margin-bottom: 60px;
         font-weight: 300
       }
     p{
         font-weight: 140;
         font-size: 2.3em;
         line-height: .2em;
     }
     .profile img{
         margin-top: 50px;
         width: 30%;
         border-radius: 50%;
         -webkit-box-shadow: 2px 2px 21px -14px rgba(0,0,0,0.68);
         -moz-box-shadow: 2px 2px 21px -14px rgba(0,0,0,0.68);
         box-shadow: 2px 2px 21px -14px rgba(0,0,0,0.68);
     }
     .about{
       margin-top: 300px;
       font-size: .8em;
     }
     .study {
       margin-top:200px;
       display: flex;
       article{
         width: 50%;
       }
      img{
       width: 30%
     }}
    

  .cursor {
    font-weight: 900
    position: absolute;
    animation: ${loop} .8s forwards infinite;
}

  }
  .section-footer {
    height: 100vh;
    background: linear-gradient(1600deg,#676767 0%,#232323 100%);
    display:flex;
    justify-content: center;
    align-items: center;


 ul{
   font-size: 2em;
   color: white;
   margin-left: 100px;
   margin-top:150px;
   list-style:none;
 }
    h3{
      margin-top: 200px;
      margin-left: 300px;
      font-size:4em;
      color: rgb(245, 245, 245);

    }
  a{
    text-decoration:none;
    color: rgb(245, 245, 245);

    img{ 
      width: 3%;
      margin-right: 30px;
    }
        .code{
              width:6%;
              margin-left: -25px;
              margin-right: -2px;
            }
  }

.end{
  margin-top:150px;
  margin-right: 300px;
  img{
    margin: 20px;
    width: 40%;
  }
  p{
    font-size:2em;
    color:white;
  }
}

}

.flex{
  display: flex;
}

  .section-main{
    height: 120vh;
    background: linear-gradient(130deg, #c5c5c5 0%,#989898 50%, #676767 100%);
    width: 100%;
  clip-path: polygon(0 0, 100% 4%, 100% 100%, 0 94%);
    
  
    .main{
      margin-top: 100px;
      h1{font-weight: 200}
    }
    
    .card{
  padding-right:200px;
  padding-left:200px;
  padding-top:10px;

  width: 50%;
  position: relative;
  margin: auto;
  background-color: #fff;
  opacity: 80%;
  background-clip: padding-box;
  border: .01px black solid;
    box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.35);

.border {
    border-bottom: .05px grey solid

}
  h4{
    font-weight: 300

  }
    .card-content{
      margin: 20px;
      display: flex;
    justify-content: space-around

  }
      img{
        width: 100px
      }
    }
    .proyect{
      margin: 200px;
      display: flex;
      justify-content: space-around

    }
    img{
    width: 90%;
  }
  article{
    padding-top: 50px;
    background-color: rgb(245, 245, 245);;
    width: 30%;
    box-shadow: 10px 10px 5px -3px rgba(0,0,0,0.3);
  }
  a{
    text-decoration: none;
    color: black;
    p {font-size: 2em;
    font-weight: 300}
  }

  .margin{
    margin:30px
  }
  .margin:hover { cursor:pointer;}
  

    .heading {
      position: absolute;
      height: 100%;
      width: 100%;

      h2 {
        font-size: 40px;
        position: absolute;
        bottom: 10%;
        left: 10%;
        margin: 0;
      }
    }

  .section {
    height: 100vh;
  }

  .textContainer {
    position: relative;
    display: inline-block;
    transform-origin: center;
  }

  .text{
    font-size:5em;
    position: relative;
    font-size: 80px;
    font-weight: bold;
    display: inline-block;
  }

  }
`;

export default StyleMain;
