import React from 'react';

const Tag = ({tag, tags, setTags}) => {
    const handleClick = () => {
        setTags(tags.filter(element => element.id !== tag.id));
    }
    return (
        <div className='tag'>
            <div>{tag.name}</div>
            <button type='button' onClick={handleClick}>x</button>
        </div>
    )
}
export default Tag;