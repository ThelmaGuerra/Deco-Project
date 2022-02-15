import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { GiDiamondRing } from "react-icons/gi";
import { GiGlassCelebration } from "react-icons/gi";
import { GiPartyPopper } from "react-icons/gi";
import { BsGrid1X2 } from "react-icons/bs";

class PortfolioContent extends Component {
  state = {
    selectedGenre: "todos",
    buttons: [
      {
        title: "Todos",
        genre: "todos",
        icon: <BsGrid1X2 className="BsGrid1X2" />,
      },
      {
        title: "Casamento",
        genre: "casamento",
        icon: <GiDiamondRing className="GiDiamondRing" />,
      },
      {
        title: "Evento",
        genre: "evento",
        icon: <GiGlassCelebration className="GiGlassCelebration" />,
      },
      {
        title: "Aniversário",
        genre: "aniversário",
        icon: <GiPartyPopper className="GiPartyPopper" />,
      },
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
          <NavLink
            className="nav_link nav_link_portfolio"
            to={"/portfolio/" + event.id}
          >
            <div
              className={event.className + " img_div"}
              style={{ backgroundImage: event.coverUrl }}
            ></div>
          </NavLink>
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
          <NavLink
            className="nav_link nav_link_portfolio"
            to={"/portfolio/" + event.id}
          >
            <div
              className={event.className + " img_div"}
              style={{ backgroundImage: event.coverUrl }}
            ></div>
          </NavLink>
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
        <h1>PORTFÓLIO</h1>
        <div className="portfolioButtons">
          {buttons.map((button) => (
            <div className="portfolioCell">
              <Button
                id={button.title}
                autofocus
                onClick={() => this.handleSelectedGenre(button.genre)}
              >
                <h2>{button.title}</h2>
              </Button>
              {button.icon}
            </div>
          ))}
        </div>

        <div className="portfolioImages">{this.handleGenre()}</div>
      </div>
    );
  }
}

export default PortfolioContent;
