import React, { Component } from "react";

class OurTeam extends Component {
  state = {};
  render() {
    return (
      <div className="ourTeam">
        <div className="ourTeam_content">
          <h1>Nosso time</h1>
          <div className="ourTeam_content_border"></div>
          <div className="team_board">
            <div className="team_cell">
              <img
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <div className="team_detail">
                <h2>Chris Reebals</h2>
                <h3>Interior Designer</h3>
                <p>
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nobis aperiam itaque non reiciendis ipsa repudiandae
                  asperiores suscipit obcaecati? Doloribus rerum magnam
                  assumenda ipsa harum minus, provident officiis ea illum?
                  Reiciendis."
                </p>
              </div>
            </div>
            <div className="team_cell">
              <img
                src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <div className="team_detail">
                <h2>Whitney Tingle</h2>
                <h3>Project Manager</h3>
                <p>
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nobis aperiam itaque non reiciendis ipsa repudiandae
                  asperiores suscipit obcaecati? Doloribus rerum magnam
                  assumenda ipsa harum minus, provident officiis ea illum?
                  Reiciendis."
                </p>
              </div>
            </div>
            <div className="team_cell">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                alt=""
                style={{ objectPosition: "0% 0%" }}
              />
              <div className="team_detail">
                <h2>Whitney Tingle</h2>
                <h3>Project Manager</h3>
                <p>
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nobis aperiam itaque non reiciendis ipsa repudiandae
                  asperiores suscipit obcaecati? Doloribus rerum magnam
                  assumenda ipsa harum minus, provident officiis ea illum?
                  Reiciendis."
                </p>
              </div>
            </div>
            <div className="team_cell">
              <img
                src="https://images.unsplash.com/photo-1585240975858-7264fd020798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                alt=""
              />
              <div className="team_detail">
                <h2>Whitney Tingle</h2>
                <h3>Project Manager</h3>
                <p>
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nobis aperiam itaque non reiciendis ipsa repudiandae
                  asperiores suscipit obcaecati? Doloribus rerum magnam
                  assumenda ipsa harum minus, provident officiis ea illum?
                  Reiciendis."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurTeam;
