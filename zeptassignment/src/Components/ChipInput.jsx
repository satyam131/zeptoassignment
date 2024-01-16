import React, { useState, useEffect, useRef, useMemo } from 'react';
import './ChipInput.css';
import Avatar from 'react-avatar';
import md5 from 'md5';

const ChipInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [chips, setChips] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const inputRef = useRef(null);
    const [showItemsList, setShowItemsList] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false);


    const items = useMemo(() => ['Bob Johnson', 'Satyam', 'Anil', 'Pranav', 'Ambuj', 'Shivam', 'Anjali', 'Saurabh', 'Raj', 'Devang'], []);

    useEffect(() => {
        setFilteredItems(items.filter(item => !chips.find(chip => chip.label === item)));
    }, [chips, items]);

    const handleInputChange = event => {
        setInputValue(event.target.value);
        setFilteredItems(items.filter(item => item.toLowerCase().includes(event.target.value.toLowerCase())));
    };

    const handleItemClick = item => {
        setChips([...chips, { id: Date.now(), label: item }]);
        setInputValue('');
        setShowItemsList(false);
        setIsInputFocused(false);
    };

    const handleChipRemove = chipId => {
        setChips(chips.filter(chip => chip.id !== chipId));
    };

    const handleInputKeyDown = event => {
        if (event.key === 'Backspace' && inputValue === '' && chips.length > 0) {
            const lastChip = chips[chips.length - 1];
            setInputValue(lastChip.label);
            handleChipRemove(lastChip.id);
        }
    };

    const handleInputFocus = () => {
        setShowItemsList(true);
        setIsInputFocused(true);
    };

    const getRandomAvatar = (item) => {
        const gravatarUrl = `https://www.gravatar.com/avatar/${md5(item.toLowerCase())}?d=identicon`;
        return <Avatar size="24" round src={gravatarUrl} />;
    };

    return (
        <div className="chips-input-container">
            <div className="chips-outer">
                <div className="chips-container">
                    {chips.map(chip => (
                        <div key={chip.id} className="chip">
                            <div className="circular-icon">{getRandomAvatar(chip.label)}</div>
                            {chip.label}
                            <button onClick={() => handleChipRemove(chip.id)} style={{ marginLeft: '40px', borderRadius: '46%' }}>X</button>
                        </div>
                    ))}
                </div>

                <div>
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        onClick={handleInputFocus}
                        placeholder="Type here ..."
                    />
                    <div className='div-line'></div>
                    <div className={`suggestions-list ${isInputFocused ? 'visible' : ''}`}>
                        {showItemsList &&
                            filteredItems.map((item, index) => (
                                <div key={index + item} onClick={() => handleItemClick(item)} className="suggestion-item">
                                    <div className="circular-icon">{getRandomAvatar(item)}</div>
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChipInput;
