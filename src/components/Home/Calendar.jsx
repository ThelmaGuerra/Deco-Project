import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Calendar extends Component {
  state = {};
  render() {
    return (
      <div className="page">
        <div className="calendar">
          <h1>Calendário de Eventos</h1>
          <div className="nextEventRow">
            <div className="nextEventCell">
              <div className="nextEventContent">
                <h2>Evento 1</h2>
                <h3>23/07</h3>
                <p>Aasdasd dasdasd. Kaushd asudhuashuas.</p>
              </div>
            </div>
            <div className="nextEventCell">
              <div className="nextEventContent">
                <h2>Evento 2</h2>
                <h3>08/10</h3>
                <p>Aasdasd dasdasd. Kaushd asudhuashuas.</p>
              </div>
            </div>
            <div className="nextEventCell">
              <div className="nextEventContent">
                <h2>Evento 3</h2>
                <h3>24/12</h3>
                <p>Aasdasd dasdasd. Kaushd asudhuashuas.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonDiv">
          <Button>Contato</Button>
        </div>
      </div>
    );
  }
}

export default Calendar;
