import React, {useState} from 'react';
import Whale from "./components/Whale";
import './styles/App.css'
import PostItem from "./components/PostItem";
const App = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavascriptTitle', body: 'Description'},
        {id: 2, title: 'JavascriptTitle2', body: 'Description2'},
        {id: 3, title: 'JavascriptTitle3', body: 'Description3'}
    ])
    return (
        <div className='App'>
            <h1 style={{textAlign: 'center'}}>All Posts</h1>
            {posts.map(post =>
            <PostItem post={post} key={post.id}/>
            )}



        </div>
    );
};

export default App;