import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const InnerContainer = styled.div`
  flex: 1 0 0%;
  padding: 2.5rem;
  @media (max-width: 991px) {
    padding: 1rem 1.5rem 2rem;
  }
`;

export const PageHeading = styled.h1`
  color: #000;
  font-size: 3rem;
  margin-bottom: 2rem;
  line-height: 1;
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
`;

export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  width: 22rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;
export const CardImage = styled.img`
  height: 12rem;
  width: 20rem;
  margin-bottom: 1rem;
`;
export const CardRating = styled.p`
  font-size: 0.875rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const SearchDiv = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const RatingsDiv = styled.div`
  margin-left: 2rem;
`;