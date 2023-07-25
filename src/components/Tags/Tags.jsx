import React from 'react';
import Tag from './Tag';
import './tags.scss'

const Tags = ({ tags, setTags }) => {
    return (
        <div id='tagsList'>
            {
                tags.map((tag, index) => (
                    <Tag
                        tag={tag}
                        tags={tags}
                        setTags={setTags}
                        key={index}
                    />
                ))
            }
        </div>
    )
}

export default Tags;