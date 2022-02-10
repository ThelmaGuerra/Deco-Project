import React, { Component } from "react";
import { Button } from "react-bootstrap";

class PortfolioContent extends Component {
  state = {
    selectedGenre: "todos",
    buttons: [
      { title: "Todos", genre: "todos" },
      { title: "Casamento", genre: "casamento" },
      { title: "Evento", genre: "evento" },
      { title: "Aniversário", genre: "aniversário" },
    ],
  };

  constructor(props) {
    super(props);
    this.setRef = React.createRef();
  }

  handleGenre = () => {
    const { events } = this.props;
    const { selectedGenre } = this.state;
    if (selectedGenre === "todos") {
      return events.map((event) => (
        <div className="above_div">
          <div
            className={event.className + " img_div"}
            style={{ backgroundImage: event.coverUrl }}
          ></div>
          <h2>{event.name}</h2>
          <div className="border"></div>
        </div>
      ));
    } else {
      const filterEvents = events.filter(
        (event) => event.genre === selectedGenre
      );
      return filterEvents.map((event) => (
        <div className="above_div">
          <div
            className={event.className + " img_div"}
            style={{ backgroundImage: event.coverUrl }}
          ></div>
          <h2>{event.name}</h2>
          <div className="border"></div>
        </div>
      ));
    }
  };

  handleFixImg = () => {};

  handleSelectedGenre = (genre) => {
    const selectedGenre = genre;
    this.setState({ selectedGenre });
  };

  handleButtons = () => {
    const buttons = this.state.buttons;
    buttons.map((button) => (
      <Button onClick={this.handleSelectedGenre(button.genre)}>
        {button.title}
      </Button>
    ));
  };

  render() {
    const { buttons } = this.state;
    return (
      <div className="portfolioContent">
        <h1>PORTFOLIO</h1>
        <div className="portfolioButtons">
          {buttons.map((button) => (
            <Button
              autofocus
              onClick={() => this.handleSelectedGenre(button.genre)}
            >
              {button.title}
            </Button>
          ))}
        </div>
        <div className="portfolioImages">{this.handleGenre()}</div>
      </div>
    );
  }
}

export default PortfolioContent;
