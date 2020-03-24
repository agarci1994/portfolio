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
  overflow: hidden;

  .section-header {
    height: 100vh;
    background: linear-gradient(160deg, #ffffff 0%,#c5c5c5 100%);
     h1{
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
       margin-top: 100px;
       font-size: .8em;
     }
     .study {
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
    background: linear-gradient(1600deg,#676767 0%,#232323 100%)
  }
  
  .section-main{
    height: 100vh;
    background: linear-gradient(130deg, #c5c5c5 0%,#989898 50%, #676767 100%);
    width: 100%;
  
    .main{
      margin-top: 100px;
      h1{font-weight: 200}
    }
    
    .card{
  width: 50%;
  position: relative;
  margin: auto;
  background-color: #fff;
  opacity: 80%;
  background-clip: padding-box;
  border: .01px black solid;

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
    width: 30%;
  }
  a{
    text-decoration: none;
    color: black;
    p {font-size: 2em;
    font-weight: 300}
  }
  

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

  }
`;

export default StyleMain;
