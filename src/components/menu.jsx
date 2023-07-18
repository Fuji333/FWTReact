/*import React, { useState } from 'react';
import Select from 'react-select';
import styles from './../styles/Rectangle.module.css';

const Rectangle = () => {
  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedCreated, setSelectedCreated] = useState(null);

  const handleAuthorChange = (selected) => {
    setSelectedAuthor(selected);

  };

  const handleLocationChange = (selected) => {
    setSelectedLocation(selected);

  };

  const handleCreatedChange = (selected) => {
    setSelectedCreated(selected);

  };

  return (
    <div className={styles.rectangle}>
      <div className={styles.name}>Name</div>
      <div className={styles.author}>
        <Select
          value={selectedAuthor}
          onChange={handleAuthorChange}
          options={options}
          isSearchable={false}
          className={styles['custom-select']}
          placeholder="Author"
        />
      </div>
      <div className={styles.location}>
        <Select
          value={selectedLocation}
          onChange={handleLocationChange}
          options={options}
          isSearchable={false}
          className={styles['custom-select']}
          placeholder="Location"
        />
      </div>
      <div className={styles.created}>
        <Select
          value={selectedCreated}
          onChange={handleCreatedChange}
          options={options}
          isSearchable={false}
          className={styles['custom-select']}
          placeholder="Created"
        />
      </div>
    </div>

  );
};

export default Rectangle;
*/
import React, { useState } from 'react';
import './../styles/menu.css';
import arrowIcon from './../image/Vector55.svg';

const CustomDropdown = ({ label, options, onSelect, isRange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <button className="custom-dropdown-button" onClick={handleClick}>
        {selectedOption ? selectedOption.label : label}
        <img
          className={`custom-dropdown-icon ${isOpen ? 'rotate' : ''}`}
          src={arrowIcon}
          alt="Dropdown Arrow"
        />
      </button>
      {isOpen && (
        <ul className="custom-dropdown-menu">
          {options.map((option) => (
            <li
              key={option.value}
              className={`custom-dropdown-option ${option === selectedOption ? 'active' : ''}`}
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </li>
          ))}
          {isRange && (
            <div className="custom-dropdown-inputs">
              <input
                type="text"
                className="custom-dropdown-input"
                placeholder="From"
              />
              <input
                type="text"
                className="custom-dropdown-input"
                placeholder="Before"
              />
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

const Rectangle = () => {
  const authorOptions = [
    { label: 'a', value: 'a' },
    { label: 'b', value: 'b' },
    { label: 'c', value: 'c' },
  ];

  const locationOptions = [
    { label: 'i', value: 'i' },
    { label: 'j', value: 'j' },
    { label: 'k', value: 'k' },
  ];

  const createdOptions = [];

  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleAuthorSelect = (value) => {
    setSelectedAuthor(value);

  };

  const handleLocationSelect = (value) => {
    setSelectedLocation(value);

  };

  return (
    <div className="custom-dropdown-container">
      <div className="custom-dropdown">
        <div className="custom-dropdown-label">Name</div>
      </div>
      <CustomDropdown
        label="Author"
        options={authorOptions}
        onSelect={handleAuthorSelect}
      />
      <CustomDropdown
        label="Location"
        options={locationOptions}
        onSelect={handleLocationSelect}
      />
      <CustomDropdown
        label="Created"
        options={createdOptions}
        onSelect={() => {}}
        isRange
      />
    </div>
  );
};

export default Rectangle;




