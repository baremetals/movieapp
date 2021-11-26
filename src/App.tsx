import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieContainer from './components/MovieContainer';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { secret } from './config'





const url: string = `https://api.themoviedb.org/3/discover/movie?api_key=${secret.apiKey}&language=en-US&include_rating=true&include_adult=true&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=35`;

const imageUrl: string = 'https://image.tmdb.org/t/p/original';
type Movie = {
  id: number;
  backdrop_path: string;
  title: string;
  vote_average: number;
  poster_path: string;
};
function App() {
  const [movieContent, setMovieContent] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [values, setValues] = useState({
    title: '',
    ratings: null,
  });

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.results);
        setMovieContent(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setFilteredMovies(movieContent);
  }, [movieContent]);

  const handleSearch =
    (name: string) => (event: { target: { value: string } }) => {
      setValues({ ...values, [name]: event.target.value });
      const searchValue = event.target.value;
      if (searchValue !== '') {
        const filteredData = movieContent.filter((mov: string) => {
          return Object.values(mov)
            .join(' ')
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        });
        setFilteredMovies(filteredData);
      } else setFilteredMovies(movieContent);
      
    };

    const handleRating =
      (name: string) => (event: { target: { value: any } }) => {
        setValues({ ...values, [name]: event.target.value });
        const ratings = event.target.value;
        if (ratings !== 0 || null) {
          let filteredData = movieContent.filter((mov: any) => {
            // 
            return mov.vote_average >= ratings
          });
          setFilteredMovies(filteredData);
        } else setFilteredMovies(movieContent);
      };

   

  return (
    <MovieContainer>
      <div>
        <Typography variant='h2'>Comedy Movies</Typography>
      </div>
      <ImageList sx={{ width: '100%', height: 450 }}>
        {filteredMovies.map((item: Movie) => (
          <ImageListItem key={item.id}>
            <img
              src={`${imageUrl}${
                item.backdrop_path ? item.backdrop_path : item.poster_path
              }`}
              srcSet={`${imageUrl}${
                item.backdrop_path ? item.backdrop_path : item.poster_path
              }`}
              alt={item.title}
              loading='lazy'
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>Average Vote: {item.vote_average}</span>}
              position='below'
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div>
        <Typography variant='h6'>Search by movie title</Typography>
        <TextField
          size='small'
          placeholder='Search'
          variant='outlined'
          name='title'
          onChange={handleSearch('title')}
          value={values.title}
        />
      </div>
      <div>
        <Typography variant='h6'>Search by average vote</Typography>

        <TextField
          size='small'
          type='number'
          placeholder='Rating'
          variant='outlined'
          name='rating'
          onChange={handleRating('ratings')}
          value={values.ratings}
        />
      </div>
    </MovieContainer>
  );
}

export default App;
