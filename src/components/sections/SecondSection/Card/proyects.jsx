import React from "react";

const Proyect = () => (
  <section className="proyect">
    <article>
      <a href="https://github.com/agarci1994/proyectGame">
        <div className="image">
          <img src="../../images/kindoftrippy.png" />
        </div>
        <div className="margin">
          <h2>The King of Trippy</h2>
          <p>
            Pequeño juego de recolección de pistas, con un climax que combina el
            terror psicológico y los clásicos de zombis. Desarrollado con Canvas
            y Vanilla Javascript en la tercera semana de IronHack.
          </p>
        </div>
      </a>
    </article>
    <article>
      <a href="https://github.com/IronSRA/el-viajero">
        <div className="image">
          <img src="../../images/elviajero.png" />
        </div>
        <div className="margin">
          <h2>El Viajero</h2>
          <p>
            Web app de viajes que ofrece información básica sobre la ciudad en
            la que te encuentras y permite la interacción con otros usuarios.
            Realizado con Node.js y MoongoDB en la sexta semana de IronHack.
          </p>
        </div>
      </a>
    </article>
    <article>
      <a href="https://github.com/agarci1994/yayos">
        <div className="image">
          <img src="../../images/yayos.png" />
        </div>
        <div className="margin">
          <h2>Yayos</h2>
          <p>
            Single-page application que ofrece recursos para facilitar y
            gestionar las necesidades del día a día de las personas de la
            tercera edad. El proyecto se ha realizado con React para el cliente
            y Node.js para el servidor. Haciendo uso de: Reack Hooks, Style
            Components, Bootstrap-react, MongoDB, APIs, etc...
          </p>
        </div>
      </a>
    </article>
    <article>
      <a href="https://github.com/CoronaTeam1/proyect-goodboy">
        <div className="image">
          <img className="imgNative" src="../../images/goodboy.png" />
          <img className="imgNative" src="../../images/goodboy2.png" />
        </div>
        <div className="margin text-native">
          <h2>GoodBoy</h2>
          <p>
            Single Page Application construido con React en el front haciendo
            uso de Hooks y Redux para la gestión del estado. Para la elaboración
            de CSS se ha utilizado los estilos de Material UI basados en JSS. En
            el back se ha utilizado NodeJS, AJAX y MongoDB. Además se ha
            utilizado Cheerio para la extracción de información.
          </p>
        </div>
      </a>
    </article>
    <article>
      <a href="https://github.com/agarci1994/Tucuvi">
        <div className="image2">
          <img className='gp' src="../../images/GCP.png" />
         <img className='gp' src="../../images/GCP2.png" />
        </div>
        <div className="margin">
          <h2>Ejecución de tareas en la nube</h2>
          <p>
            El formulario te permite enviar una tarea con un id y una llamada a
            una función de Google Functions, si no indicas ninguna función te
            asigna una por defecto. También te permite cargar un archivo CSV con
            dos columnas una con los ID y otra con la fecha a ejecutarse. El
            proyecto se ha realizado con React para el cliente y Node.js para el
            servidor. Haciendo uso de: React Hooks, Material UI y Google Cloud.
          </p>
        </div>
      </a>
    </article>
    <article>
      <a href="https://github.com/agarci1994/RestaurantApp">
        <div className="image">
          <img className="imgNative" src="../../images/restaurant1.png" />
          <img className="imgNative" src="../../images/restaurant2.png" />
        </div>
        <div className="margin text-native">
          <h2>The Restaurant APP</h2>
          <p>
            App movil construida con React Native, se ha utilizado la Babel para los estilos. 
            App web ha construida con React haciendo uso de Hooks. Para la validación de formularios se ha utilizado Yup y Formik. Para la creación de estilos se ha utilizado TailwindsCSS.
            La gestion de infraestructuras se ha realizado con Firebase.
          </p>
        </div>
      </a>
    </article>
  </section>
);

export default Proyect;
