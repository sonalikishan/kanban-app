// components/FilterMenu.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons'; // Display icon
 // Display icon
const FilterMenu = ({ setGroupBy, setOrderBy }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
    return (
        <div className="filter-menu">
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faSliders} /> Display <FontAwesomeIcon icon={faAngleDown} />
            </button>
            {showDropdown && (
              <div className="dropdown-content">
                <div className="dropdown-row">
                <div className="grouping-section">
                  <label for="grouping">Grouping: </label>
                  <select id="grouping" onChange={e => setGroupBy(e.target.value)}>
                    <option value="status">Status </option> 
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                  </select>
                </div>
              </div>
            <div className="dropdown-row">
                <div className="sorting-section">
                  <label for="sorting">Sorting: </label>
                  <select id="sorting" onChange={e => setOrderBy(e.target.value)}>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                  </select>
                  </div>
            </div>
              </div>
            )}
          </div>
        </div>
       
      );
    };
    
    export default FilterMenu;
