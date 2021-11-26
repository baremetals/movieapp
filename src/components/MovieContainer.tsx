import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


export default function MovieContainer({ children }: any) {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        {children}
      </Container>
    </React.Fragment>
  );
}
