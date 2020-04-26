import React from "react";

const Contact = () => (
  <ul>
    <li>
      <p>
        <a href="mailto::alejandro.garci.rodr@gmail.com">
          <div className="flex">
            <img src="../../images/mail.svg" />
            <p>Email</p>
          </div>
        </a>
      </p>
    </li>
    <li>
      <p>
        <a href="tel:+34655215109">
          <div className="flex">
            <img src="../../images/tel.svg" />
            <p>Telefono</p>
          </div>
        </a>
      </p>
    </li>
    <li>
      <p>
        <a href="https://github.com/agarci1994">
          <div className="flex">
            <img src="../../images/github.svg" />
            <p>Github</p>
          </div>
        </a>
      </p>
    </li>
    <li>
      <p>
        <a href="https://www.linkedin.com/in/alexgarciarodriguez/">
          <div className="flex">
            <img src="../../images/linkedin.svg" />
            <p>Linkedin</p>
          </div>
        </a>
      </p>
    </li>
    <li>
      <p>
        <a href="https://www.codewars.com/users/agarci1994">
          <div className="flex">
            <img src="../../images/codewars.svg" className="code" />
            <p>Codewars</p>
          </div>
        </a>
      </p>
    </li>
  </ul>
);

export default Contact;
