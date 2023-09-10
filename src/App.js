import './index.css';
import { faker } from '@faker-js/faker';
import React, { useState, useEffect, Fragment } from 'react';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import 'primeicons/primeicons.css';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import PostList from './PostList';
import Profile from './Profile';
import Login from './Login';

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [showPosts, setShowPosts] = useState(true);

  const profile = {
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
    username: faker.person.firstName('female'),
    bio: faker.lorem.sentences(2),
  }

  const [posts, setPosts] = useState([]);

  const [postsFiltrados, setPostsFiltrados] = useState([]);

  const onLogoClick = () => {
    setShowPosts(true);
  };

  const onProfileClick = () => {
    setShowPosts(false);
  };

  const onLoginComplete = (token) => {
    localStorage.setItem('token', token);
    setIsLogin(true);
  };

  const getPosts = async () => {
    const apiUrl = 'https://three-points.herokuapp.com/api/posts';
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const data = await response.json();        
        //console.log("Posts de API: ", data);
        const tempPosts = [];
        data.map((item) => {
          const nuevoPost = { image: item.image, createdAt: item.createdAt.slice(0, 10), likes:item.likes, autor: item.author.name, texto: item.text, comments: item.comments.length };
          tempPosts.push(nuevoPost);
          
        });
        //console.log("Posts Temp: ", tempPosts);
        setPosts(tempPosts);
        setPostsFiltrados(tempPosts);
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log("Si hay token");
      setIsLogin(true);
      getPosts();

    } else {
      console.log('no hay otken');
      setIsLogin(false);
    }
  }, []);

  return (
    isLogin ? <Fragment>
      <NavBar onLogoClick={onLogoClick} onProfileClick={onProfileClick}></NavBar>
      <SearchBar posts={posts} setPostsFiltrados={setPostsFiltrados}></SearchBar>
      {showPosts ? <PostList posts={postsFiltrados}></PostList> : <Profile avatar={profile.avatar} username={profile.username} bio={profile.bio}></Profile>}
    </Fragment> : <Login onLoginComplete={onLoginComplete}></Login>
  )
}

export default App;
