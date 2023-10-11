import React, { useState, useEffect } from "react";
import AppBar from "./components/AppBar";
import Loader from "./components/Loader";
import UnsplashImages from "./components/UnsplashImages";

import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import InfiniteScroll from "react-infinite-scroll-component";

//Style
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
}
`;

const WrapperImage = styled.section`
	max-width: 70rem;
	margin: 4rem auto;
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-auto-rows: 300px;
`;

function App() {
	const [images, setImages] = useState([]);

	useEffect(() => {
		fetchImages();
	}, []);


  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
		const accessKey = process.env.REACT_APP_ACCESSKEY;

		axios
			.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
			.then((res) => setImages([...images, ...res.data]));
  } 

	return (
		<div className="App">
			<AppBar></AppBar>
			<GlobalStyle />

			<InfiniteScroll 
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
				<WrapperImage>
					{images.map((images) => (
						<UnsplashImages url={images.urls.thumb} key={images.id} />
					))}
				</WrapperImage>
			</InfiniteScroll>
		</div>
	);
}

export default App;
