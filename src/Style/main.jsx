import styled from "styled-components"

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
     p{
         font-weight: 140;
         font-size: 2.3em;
         line-height: .2em;
     }
     img{
         margin-top: 50px;
         width: 30%;
         border-radius: 50%;
         -webkit-box-shadow: 2px 2px 21px -14px rgba(0,0,0,0.68);
-moz-box-shadow: 2px 2px 21px -14px rgba(0,0,0,0.68);
box-shadow: 2px 2px 21px -14px rgba(0,0,0,0.68);
     }
   .cursor {
    position: absolute;
    animation: cursorAnimation .5s forwards infinite;
}
  }
  .section-footer {
    height: 70vh;
    background: linear-gradient(1600deg,#676767 0%,#232323 100%)
  }
  
  .sticky, .sticky2 {
    height: 100vh;
    background: linear-gradient(130deg, #c5c5c5 0%,#989898 50%, #676767 100%);
    width: 100%;

    & .animation, .animation2 {
      width: 100%;
      height: 100%;
      position: absolute;

      & svg {
        opacity: 1;
        position: absolute;
        width: 300px;
        height: 300px;
      }
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

export default StyleMain