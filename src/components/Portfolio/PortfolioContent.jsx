import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { GiDiamondRing } from "react-icons/gi";
import { GiGlassCelebration } from "react-icons/gi";
import { GiPartyPopper } from "react-icons/gi";
import { BsGrid1X2 } from "react-icons/bs";
import Select from "react-select";

class PortfolioContent extends Component {
  state = {
    selectedGenre: "todos",
    currentMultiSelectionIcon: <BsGrid1X2 className="BsGrid1X2" />,
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
    multi_selection_options: [
      {
        value: "todos",
        label: "Todos",
        icon: <BsGrid1X2 className="BsGrid1X2" />,
      },
      {
        value: "casamento",
        label: "Casamento",
        icon: <GiDiamondRing className="GiDiamondRing" />,
      },
      {
        value: "evento",
        label: "Evento",
        icon: <GiGlassCelebration className="GiGlassCelebration" />,
      },
      {
        value: "aniversário",
        label: "Aniversário",
        icon: <GiPartyPopper className="GiPartyPopper" />,
      },
    ],
  };

  constructor(props) {
    super(props);
    this.setRef = React.createRef();
    this.MultiSelectRef = React.createRef();
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

  handleMultiSelect = (option) => {
    this.handleSelectedGenre(option.value);
    const currentMultiSelectionIcon = option.icon;
    this.setState({ currentMultiSelectionIcon });
  };

  render() {
    const { buttons, multi_selection_options, currentMultiSelectionIcon } =
      this.state;

    const customStyles = {
      option: (provided) => ({
        ...provided,
        color: "black",
        fontFamily: "Rufina",
      }),
      control: (provided) => ({
        ...provided,
        color: "black",
        fontFamily: "Rufina",
        fontWeight: "500",
      }),
      singleValue: (provided) => ({
        ...provided,
        color: "black",
        fontFamily: "Rufina",
      }),
    };

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
          <Select
            className="portfolio_multi_selection"
            placeholder="Todos"
            styles={customStyles}
            options={multi_selection_options}
            onChange={(option) => this.handleMultiSelect(option)}
          />
          <div className="current_multi_selection_icon">
            {currentMultiSelectionIcon}
          </div>
        </div>

        <div className="portfolioImages">{this.handleGenre()}</div>
      </div>
    );
  }
}

export default PortfolioContent;
