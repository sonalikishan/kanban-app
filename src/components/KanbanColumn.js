// components/KanbanColumn.js
import React from 'react';
import TicketCard from './TicketCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'; // Display icon

import '../Kanban.css';
const KanbanColumn = ({ group, tickets, onAddTicket }) => {
  return (
    <div className="kanban-column">
        <div className="row">
      <h3>{group} </h3> 
      <div className="row1">
      <button onClick={() => onAddTicket(group)} className="add-ticket-btn"><FontAwesomeIcon className="r1" icon={faPlus} /> </button>
      <FontAwesomeIcon className="r1" icon={faEllipsis} />
      </div>
      </div>

      {           }
      {tickets.map(ticket => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanColumn;
