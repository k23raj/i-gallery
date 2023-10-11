import React, {useState, useEffect} from 'react';
import AppBar from "./components/AppBar";
import Loader from "./components/Loader";
import UnsplashImages from "./components/UnsplashImages";
import axios from 'axios';
import { apiKey } from './apiKey';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiRoot ="https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    
    axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
    .then(res => setImages([...images, ...res.data]))
  },[])


  return (
    <div className="App">
      <AppBar></AppBar>
      <Loader></Loader>
      {images.map(images => (
        <UnsplashImages url={images.urls.thumb} key={images.id}/>
      ))}
    </div>
  );
}

export default App;
