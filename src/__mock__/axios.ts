import { imageUrl } from '../App';

const mockResponse = {
  data: {
    results: [
      {
        id: 1,
        backdrop_path: `${imageUrl}/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg`,
        title: 'Toy Story',
        vote_average: 8,
        poster_pat: `${imageUrl}/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg`,
      },
      {
        id: 2,
        backdrop_path: `${imageUrl}/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg`,
        title: 'Forest Gump',
        vote_average: 8.5,
        poster_pat: `${imageUrl}/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg`,
      },
      {
        id: 3,
        backdrop_path: `${imageUrl}/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg`,
        title: 'The Iron Giant',
        vote_average: 7.9,
        poster_pat: `${imageUrl}/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg`,
      },
      {
        id: 4,
        backdrop_path: `${imageUrl}/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg`,
        title: "A Bug's Life",
        vote_average: 7,
        poster_pat: `${imageUrl}/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg`,
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
