import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.post.id}</strong>
                <div>
                    {props.post.body}
                </div>
                <div className="post_btn">
                    <button>del</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;