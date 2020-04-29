import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
    return(
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
    <a href="/" className="author">{props.author}</a>
        </div>
        <div className="metadata">
            <span className="date">{props.TimeAgo}</span>
        </div>
        <div className="text">Nice Blog Post</div>
        </div>
    );
};

export default CommentDetail;