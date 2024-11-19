'use client'

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import TitleBar from '@/components/TitleBar';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';

export default function Home() {

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
          flexDirection: 'column',
          gap: 4
        }}
      >
        <Box sx={{
                 paddingTop: '50px',
                 paddingBlock: '50px',
                 backgroundColor: '#f3dfbc',
                 textAlign: 'center'
                }}>

          <Typography  variant="h6">
          <i>Documenting pregnancy, homebirth, & postpartum for women and families in central NC</i>
          </Typography>
        </Box>

        <Typography variant="h4">
        <b>OFFERINGS</b>
        </Typography>

        <Typography variant="body" component="">
        I offer both photo & video services to preserve the precious memories along your journey of nurturing new human life. From portraits of your growing belly, to the unique story of your homebirth, and of course the beloved fresh newborn session, you will be seen in your splendor. Based in Durham, serving the Triangle area, Raleigh, Chapel Hill, Cary Hillsborough & beyond.
        </Typography>

        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Item elevation={0}>    
            <video width="100%" height="auto" controls>
              <source src="/reel_vertical_v1.mp4" type="video/mp4" />
              
              Your browser does not support the video tag.
            </video>
            </Item>
          </Grid>
          <Grid xs={12} md={6}>
            <Item elevation={0}>    
            <video width="100%" height="auto" controls>
              <source src="/reel_vertical_v2_2.mp4" type="video/mp4" />
              
              Your browser does not support the video tag.
            </video>
            </Item>
          </Grid>
        </Grid>

          

        <Typography variant="body">
        <b>TIERED PRICING BY HOUSEHOLD INCOME</b><br/>
        Tier 1: Less than $60,000<br/>
        Tier 2: $60,000 to $100,000<br/>
        Tier 3: $100,000 to $200,000<br/>
        Tier 4: $200,000 or more<br/>

        </Typography>

        <Typography variant="body">
        <b>Birth video & photo</b><br/>
        - A two-hour in-home prenatal creative consultation<br/>
        - On call day and night from reservation<br/>
        - Coverage as desired, usually from active labor until two hours postpartum <br/>
        - 30-60+ minute raw 1080p video edit for safekeeping<br/>
        - 5-15+ minute cinematic 4k video full edit for sharing with family and friends<br/>
        - 90-second cinematic 4k video highlight edit for sharing on social media<br/>
        - 20+ high resolution images of only early active labor and postpartum, none of emergence<br/>
        - Images delivered within fourteen days<br/>
        - Videos delivered within thirty days<br/>
        - Tier 1: $2020<br/>
        - Tier 2: $2240<br/>
        - Tier 3: $2460<br/>
        - Tier 4: $2680<br/>

        </Typography>

        <Typography variant='body'>
        <b>Birth photography</b><br/>
        - A two-hour in-home prenatal creative consultation<br/>
        - On call day and night from reservation<br/>
        - Coverage as desired, usually from active labor until two hours postpartum <br/>
        - 100+ high resolution images<br/>
        - Images delivered within fourteen days<br/>
        - Tier 1: $1280<br/>
        - Tier 2: $1460<br/>
        - Tier 3: $1640<br/>
        - Tier 4: $1820<br/>

        </Typography>

        <Typography variant="body">
        <b>✽ Birth video ✽</b><br/>
        - A two-hour in-home prenatal creative consultation<br/>
        - On call day and night from reservation<br/>
        - Coverage as desired, usually from active labor until two hours postpartum <br/>
        - 30-60+ minute raw 1080p video edit for safekeeping<br/>
        - 5-15+ minute cinematic 4k video edit for sharing with family and friends<br/>
        - 90-second cinematic 4k video edit for sharing on social media<br/>
        - Videos delivered within thirty days<br/>
        - Tier 1: $1860<br/>
        - Tier 2: $2060<br/>
        - Tier 3: $2260<br/>
        - Tier 4: $2460<br/>

        </Typography>

        <Typography variant='body'>
        <b>Non-refundable deposit due upon reservation of a birth offering</b><br/>
        - Tier 1: $400<br/>
        - Tier 2: $480<br/>
        - Tier 3: $560<br/>
        - Tier 4: $640<br/>

        </Typography>

        <Typography variant='body'>
        <b>Pregnancy & postpartum family portrait sessions</b><br/>
        - A two-hour outdoor or indoor maternity or newborn portrait session<br/>
        - 50+ high resolution images<br/>
        - Images delivered within fourteen days<br/>
        - Tier 1: $320<br/>
        - Tier 2: $360<br/>
        - Tier 3: $400<br/>
        - Tier 4: $440<br/>
        </Typography>

        <Typography variant='body'>
        <b>Potential additional costs involved each</b><br/>
        • Cost to travel to homes farther than sixty minutes<br/>
        • Cost to request shorter editing deadlines than originally offered<br/>
        • Cost per day for births lasting longer than twenty-four hours<br/>
        - Tier 1: $140<br/>
        - Tier 2: $180<br/>
        - Tier 3: $220<br/>
        - Tier 4: $300<br/>

        (12 percent discount for booking a birth package and two portrait sessions)

        </Typography>
      </Box>
    </Container>
  );
}