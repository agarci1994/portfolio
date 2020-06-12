import React from "react";

const Skills = () => (
  <section className="skill-card">
    <div className="card">
      <div className="border">
        <h4>HTML</h4>
      </div>
      <div className="card-content">
        <a href="https://developer.mozilla.org/es/docs/Web/HTML/%C3%8Dndice">
          <div className="content">
            <img src="../../images/html5.png" />
            <p>HTML5</p>
          </div>
        </a>
        <a href="https://es.reactjs.org/docs/introducing-jsx.html">
          <div className="content">
            <img src="../../images/react.png" />
            <p>JSX</p>
          </div>
        </a>
        <a href="https://handlebarsjs.com/">
          <div className="content">
            <img src="../../images/handler.png" />
            <p>Handlerbars.js</p>
          </div>
        </a>
      </div>
    </div>
    <div className="card">
      <div className="border">
        <h4>CSS</h4>
      </div>
      <div className="card-content">
        <div className="content">
          <a href="https://developer.mozilla.org/es/docs/Web/CSS">
            <div>
              <img src="../../images/css3.png" />
            </div>
            <p>CSS3</p>
          </a>
        </div>
        <div className="content">
          <a href="https://sass-lang.com/">
            <div>
              <img src="../../images/sass.png" />
            </div>
            <p>SASS</p>
          </a>
        </div>
        <div className="content">
          <a href="https://materializecss.com/">
            <div>
              <img src="../../images/materialize.png" />
            </div>
            <p>Materialize</p>
          </a>
        </div>
        <div className="content">
          <a href="https://material-ui.com/">
            <div>
              <img src="../../images/materialui.png" />
            </div>
            <p>Material UI</p>
          </a>
        </div>
        <div className="content">
          <a href="https://styled-components.com/docs/advanced">
            <div>
              <img src="../../images/styled-components.png" />
            </div>
            <p>Styled Components</p>
          </a>
        </div>
        <div className="content">
          <a href="https://tailwindcss.com/">
            <div>
              <img src="../../images/tailwindcss.png" />
            </div>
            <p>Tailwind CSS</p>
          </a>
        </div>
        <div className="content">
          <a href="https://getbootstrap.com/">
            <div>
              <img src="../../images/Bootstrap1.png" />
            </div>
            <p>Bootstrap</p>
          </a>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="border">
        <h4>Javascript</h4>
      </div>
      <div className="card-content">
        <div className="content">
          <a href="https://es.reactjs.org/">
            <div>
              <img src="../../images/react.png" />
            </div>
            <p>React</p>
          </a>
        </div>
        <div className="content">
          <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
            <div>
              <img src="../../images/javascript.png" />
            </div>
            <p>ES10</p>
          </a>
        </div>
        <div className="content">
          <a href="https://jquery.com/">
            <div>
              <img src="../../images/jquery.png" />
            </div>
            <p>JQuery</p>
          </a>
        </div>
        <div className="content">
          <a href="https://nodejs.org/es/">
            <div>
              <img src="../../images/nodejs.png" />
            </div>
            <p>Node</p>
          </a>
        </div>
      <div className="content">
          <a href="https://vuejs.org/">
          <div>
              <img style={{ marginTop: '30px' }} src="../../images/vue.svg" />
          </div>
          <p>VUE</p>
        </a>
      </div>
      <div className="content">
          <a href="https://reactnative.dev/">
          <div>
            <img src="../../images/react-native.png" />
          </div>
          <p>React Native</p>
        </a>
      </div>
        <div className="content">
          <a href="https://es.redux.js.org/">
            <div>
              <img src="../../images/redux.jpg" />
            </div>
            <p>Redux</p>
          </a>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="border">
        <h4>Back-end</h4>
      </div>
      <div className="card-content">
        <div className="content">
          <a href="https://www.mongodb.com/es">
            <div>
              <img src="../../images/mongodb.png" />
            </div>
            <p>MongoDB</p>
          </a>
        </div>
        <div className="content">
          <a href="https://console.cloud.google.com/?hl=es&pli=1">
            <div>
              <img style={{ marginTop: '30px' }} src="../../images/gp.png" />
            </div>
            <p>GCP</p>
          </a>
        </div>
        <div className="content">
          <a href="https://firebase.google.com/docs/functions/http-events">
            <div>
              <img style={{ marginTop: '30px' }} src="../../images/Firebase.png" />
            </div>
            <p>Firebase</p>
          </a>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="border">
        <h4>Otras</h4>
      </div>
      <div className="card-content">
        <div className="content">
          <a href="https://github.com/">
            <div>
              <img src="../../images/github.png" />
            </div>
            <p>Github</p>
          </a>
        </div>
        <div className="content">
          <a href="https://www.heroku.com/">
            <div>
              <img src="../../images/heroku.png" />
            </div>
            <p>Heroku</p>
          </a>
        </div>
        <div className="content">
          <a href="https://www.photoshop.com/en">
            <div>
              <img src="../../images/photoshop.png" />
            </div>
            <p>Photoshop</p>
          </a>
        </div>
        <div className="content">
          <a href="https://www.apple.com/es/final-cut-pro/">
            <div>
              <img src="../../images/fcpx.png" />
            </div>
            <p>Final Cut Pro</p>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
