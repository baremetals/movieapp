import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { InnerContainer, PageHeading, PageContainer } from './styles';


export default function MovieContainer({ children }: any) {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <PageContainer>
          <InnerContainer>
            <PageHeading>Comedy Films</PageHeading>
            {children}
          </InnerContainer>
        </PageContainer>
      </Container>
    </React.Fragment>
  );
}

