// components/KanbanBoard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import KanbanColumn from './KanbanColumn';
import FilterMenu from './FilterMenu';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [orderBy, setOrderBy] = useState('priority');
  const [loading, setLoading] = useState(true);

  // Fetch tickets from the API
  useEffect(() => {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        setTickets(response.data.tickets);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, []);

useEffect(() => {
  const savedGroupBy = localStorage.getItem('groupBy');
  const savedOrderBy = localStorage.getItem('orderBy');
  if (savedGroupBy) setGroupBy(savedGroupBy);
  if (savedOrderBy) setOrderBy(savedOrderBy);
}, []);

useEffect(() => {
  localStorage.setItem('groupBy', groupBy);
  localStorage.setItem('orderBy', orderBy);
}, [groupBy, orderBy]);

  // Group tickets based on the selected filter (status, user, or priority)
  const groupTickets = () => {
    switch (groupBy) {
      case 'status':
        return groupByStatus();
      case 'user':
        return groupByUser();
      case 'priority':
        return groupByPriority();
      default:
        return tickets;
    }
  };

  const groupByStatus = () => {
    const groups = tickets.reduce((acc, ticket) => {
      (acc[ticket.status] = acc[ticket.status] || []).push(ticket);
      return acc;
    }, {});
    return groups;
  };

  const groupByUser = () => {
    const groups = tickets.reduce((acc, ticket) => {
      (acc[ticket.userId] = acc[ticket.userId] || []).push(ticket);
      return acc;
    }, {});
    return groups;
  };

  const groupByPriority = () => {
    const groups = tickets.reduce((acc, ticket) => {
      (acc[ticket.priority] = acc[ticket.priority] || []).push(ticket);
      return acc;
    }, {});
    return groups;
  };

  // Render grouped columns (status, priority, user)
  const renderColumns = () => {
    const groupedTickets = groupTickets();
    return Object.keys(groupedTickets).map(group => (
      <KanbanColumn key={group} group={group} tickets={groupedTickets[group]} />
    ));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="kanban-board">
      <FilterMenu setGroupBy={setGroupBy} setOrderBy={setOrderBy} />
      <div className="kanban-columns">
        {renderColumns()}
      </div>
    </div>
  );
};

export default KanbanBoard;
