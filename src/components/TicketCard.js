// components/TicketCard.js
import React from 'react';
import '../Ticket.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons'; // Display icon

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
        <div className="tcard">
      <label class="form-control">
      <input type="checkbox" className="checkbox" />
      <h4>{ticket.title}</h4>
      </label>
      </div>
      <div className="items">
      <button type="button" className="collapsible"><FontAwesomeIcon icon={faEllipsis} /></button>
      <div className="content">
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <p>User ID: {ticket.userId}</p>
      </div>
      <p className="feature"><FontAwesomeIcon icon={faCircle} />{ticket.tag.join(', ')}</p>
      </div>
    </div>
  );
};

export default TicketCard;
