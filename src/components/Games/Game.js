import React from 'react';
import { Breakpoint } from 'react-socks';
import './Game.scss';
import './Games.css';

const movie = props => (
  <>
    <Breakpoint medium up>

      <div className='main-card'>
        <div style={{ backgroundColor: "#080404" }}>

        </div>
        <div className="game-component">

          <div className="game-details">
            <span style={{ color: "white" }} className="movie-title1">{props.name}</span>
            <p style={{ color: "#c1d1e8" }}>
              <strong  >Release Date:</strong>  <span className="movie-title1"> {new Date(props.first_release_date).toLocaleString('en-GB', { timeZone: 'UTC' }).split(',')[0]} </span>
            </p>
            <div className='game-summery'>
              <p style={{ color: "#c1d1e8" }} className="movie-released">
                <strong  >[Summery]</strong> {props.summary}
              </p>

            </div>

          </div>
          <div className='score-component'>
            <h3><div className="circle">{parseInt(props.rating)}</div></h3>
          </div>

        </div>
      </div>
    </Breakpoint>
    <Breakpoint small down>
      <div className='main-card'>
        <div className='score-component' style={{ height: "150px"}}>
          <h3 style={{marginTop:"5%",marginLeft:"15%"}}><div className="circle">{parseInt(props.rating)}</div></h3>
        </div>
        <div className="game-component">
          <div className="game-details">
            <span style={{ color: "white" }} className="movie-title1">{props.name}</span>
            <p style={{ color: "#c1d1e8" }}>
              <strong  >Release Date:</strong>  <span className="movie-title1"> {new Date(props.first_release_date).toLocaleString('en-GB', { timeZone: 'UTC' }).split(',')[0]} </span>
            </p>
            <div className='game-summery'>
              <p style={{ color: "#c1d1e8" }} className="movie-released">
                <strong  >[Summery]</strong> {props.summary}
              </p>
            </div>
          </div>
        </div>
      </div>

    </Breakpoint>
  </>
);

export default movie;
