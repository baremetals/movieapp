import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieContainer from './components/MovieContainer';
import { TextField, Typography } from '@mui/material';
import { secret } from './config'
import {
  SearchDiv,
  RatingsDiv,
  PageWrapper,
  Card,
  CardImage,
  CardTitle,
  CardRating,
} from './components/styles';


export const url: string = `https://api.themoviedb.org/3/discover/movie?api_key=${secret.apiKey}&language=en-US&include_rating=true&include_adult=true&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=35`;

export const imageUrl: string = 'https://image.tmdb.org/t/p/original';

export type Movie = {
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
    ratings: 0,
  });



  useEffect(() => {
    let mounted = true;
    const getMovieData = async () => {
      const {data} = await axios.get(url);
      if (mounted) {
        setMovieContent(data.results);
      }
    };
    getMovieData();

    return () => {
      mounted = false;
    };
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
            return mov.vote_average >= ratings
            // return mov.vote_average == ratings;
          });
          setFilteredMovies(filteredData);
        } else setFilteredMovies(movieContent);
      };

   

  return (
    <MovieContainer data-testid='resolved'>
      <SearchDiv>
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
        <RatingsDiv>
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
        </RatingsDiv>
      </SearchDiv>
      <PageWrapper data-testid='filmDiv'>
        {filteredMovies.length === 0 && (<div>loading movies....</div>)}
        {filteredMovies.map((mov: any, id: number) => (
          
          <Card key={id} data-testid={`filmDataItem-${id}`}>
            <CardImage
              src={`${imageUrl}${
                mov.backdrop_path ? mov.backdrop_path : mov.poster_path
              }`}
              alt={mov.title}
            />
            <CardTitle>{mov.title}</CardTitle>
            <CardRating>{mov.vote_average}</CardRating>
          </Card>
        ))}
      </PageWrapper>
    </MovieContainer>
  );
}

export default App;
