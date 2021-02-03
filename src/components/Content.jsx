import React from "react";
import { Row, Col } from "react-bootstrap";
import play from "../images/play.png";
import name from "../images/name.png";
import "../styles/Content.css";

function content({ handleChange }) {
  return (
    <>
      <Row className="box-content">
        <Col className="info">
          <div>
            <img className="banner-movie" src={name} alt="movietitle" />
          </div>

          <span className="item">2020</span>
          <span className="item">
            <i className="item-edad">12+</i>
          </span>
          <span className="item">1h 55min</span>
          <span className="item">Action</span>

          <p>
            La aclamada cineasta Niki Caro le da vida al épico relato de la
            legendaria guerrera china en la nueva película de Disney, Mulán, en
            la que una joven valiente arriesga todo, por amor a su familia y a
            su país, para convertirse en una de las más grandes guerreras que
            China haya conocido.Cuando el Emperador de China decreta que un
            hombre de cada familia debe servir en el Ejército Imperial para
            defender al país de los invasores del Norte, Hua Mulán, la hija
            mayor de un honrado guerrero, toma el lugar de su padre que se
            encuentra enfermo. Vestida de hombre emprende un viaje épico que la
            transformará en una guerrera honrada y respetada por toda una nación
            agradecida… y un padre orgulloso. Disponible ahora.
          </p>

          <div>
            <a href="#/home" className="btn">
              <i class="fas fa-plus"> Play</i>
            </a>
            <a href="#/home" className="link">
              <i class="fas fa-play"> My List</i>
            </a>
          </div>
          <div>
            <a href="" className="play">
              <img onClick={handleChange} src={play} alt="play" />
              Watch trailer
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default content;
