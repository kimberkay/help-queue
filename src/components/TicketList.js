import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";



function TicketList(props){
  return (
    <React.Fragment>
      <hr />
      {/* We now need to map over the values of an object, not an array. */}
      {Object.values(props.ticketList).map((ticket) =>
        <Ticket
          whenTicketClicked = { props.onTicketSelection }
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          id={ticket.id}
          key={ticket.id}/>
      )}
      {/* Don't forget to add the curly brace above - otherwise there will be a syntax error. */}
    </React.Fragment>
  );
}

  
  TicketList.propTypes = {
    ticketList: PropTypes.object,
    onTicketSelection: PropTypes.func
  };

export default TicketList;

// const countDots = (iterations) => {
//   let dots = 0;
//   if(iterations === 0){
//   return 0;
//   }else if(iterations === 1){
//     return 1;
//   } else {
//   dots = ((iterations-1) *5);
//   }
//   return countDots(iterations-1) + dots;
//   }