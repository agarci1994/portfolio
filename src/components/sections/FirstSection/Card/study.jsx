import React from "react";

const Study = () => (
  <div>
    <h2>Estudié:</h2>
    <section className="study">
      <article>
        <a href="https://www.ucm.es/">
          <div className='image'>
            <img src="../images/UCM.png" />
          </div>
          <p className="bold">Universidad Complutense de Madrid</p>
          <p>Grado en comunicación audiovisual</p>
        </a>
      </article>
      <article>
        <a href="https://master-lav.com/">
                    <div className='image'> 
            <img src="../images/lav.png" />
          </div>
          <p className="bold">MasterLAV</p>
          <p>Master en arte contemporaneo</p>
        </a>
      </article>
      <article>
        <a href="https://www.ironhack.com/en">
                    <div className='image'>
            <img src="../images/ironhack.png" />
          </div>
          <p className="bold">Ironhack</p>
          <p>Bootcamp Desarrollo Web</p>
        </a>
      </article>
    </section>
  </div>
);

export default Study;
