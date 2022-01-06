import React from 'react';
import './Card.scss';

const CardList = props => (
  <>
      <div
        className="card-component"
        style={props.style || null}
      >
        {props.children}
      </div>
  </>
);

export default CardList;
