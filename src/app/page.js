import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import TitleBar from '@/components/TitleBar';


export default function Home() {
  return (
    <Container sx={{paddingTop: '64px'}} maxWidth="lg">
      <TitleBar></TitleBar>
      <Box
        sx={{
          mt:8,
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}
      >
        <Typography variant="body" component="">
        <i>Documenting pregnancy, homebirth, & postpartum for women and families in central NC</i>
        </Typography>

        <Typography variant="body" component="">
        I offer both photo & video services to preserve the precious memories along your journey of nurturing new human life. From portraits of your growing belly, to the unique story of your homebirth, and of course the beloved fresh newborn session, you will be seen in your splendor. Based in Durham, serving the Triangle area, Raleigh, Chapel Hill, Cary Hillsborough & beyond.
        </Typography>
      </Box>
    </Container>
  );
}