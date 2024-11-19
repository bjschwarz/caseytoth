'use client'

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import theme from '@/theme';
import portrait from "../../../public/images/profile_image.jpg"
import Image from 'next/image'
import TitleBar from '@/components/TitleBar';
import Carousel from '@/components/Carousel';


export default function About() {
  const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
  }));

  return (
    <Container sx={{paddingTop: '64px'}} maxWidth="lg">
      <TitleBar></TitleBar>
      <Box
        sx={{
          mt:8,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Item elevation={0}>    
              <Carousel></Carousel>
            </Item>
          </Grid>
          <Grid xs={12} md={6}>
            <Item elevation={0}>
              <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4
                }}>
                <Typography variant="body" component="">
                Motherhood ushered me into her humbling gyre with the birth of a beautiful baby boy last year and this journey opened my eyes to an elaborate underworld of caregiving that is too often hidden from view. Emerging from my postpartum cocoon, I feel creatively inspired to evolve my visual storytelling skills to serve mothers and families by preserving their precious moments of attunement to and nurturing of new human lives. 
                </Typography>
                <Typography variant="body" component="">

                In hopes of leaving the world a little better than we found it, I believe sharing our experiences of raising good humans is a meager strand of flax in the linen of online activism. I’ve found motherhood to be extraordinarily rewarding and pleasurable in opportunities where I must use every ounce of my privilege and power to resist modern culture’s efforts to separate mother from baby, body from earth, soul from spirit. Sharing the ways we can try to honor our biological designs such as homebirthing, breastfeeding, cosleeping, babywearing, elimination communication, etc., can help lay a strong foundation for a more just, sustainable, and peaceful life on earth for future generations.

                </Typography>
                <Typography variant="body" component="">

                My work is greatly influenced by a previous chapter of life in which I worked on staff at the News & Observer in Raleigh, N.C., focusing on long-form documentary-style video storytelling across the state. My passions led me to delve deeply into stories about health and environmental issues, from childhood cancer to sustainable agriculture and more, granting me opportunities to develop unique sensitivities to the intensity of the human experience. I graduated from the University of North Carolina at Chapel Hill in 2017 with a bachelor’s degree in photojournalism.

                </Typography>
                 
              </Box>
            </Item>
          </Grid>     
        </Grid>
      </Box>
    </Container>
  );
}