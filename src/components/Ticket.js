import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function Ticket(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTicketClicked(props.id)}>
      <h4>{props.id}</h4>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Ticket;