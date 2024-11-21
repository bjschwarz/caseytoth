import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image'
import TitleBar from '@/components/TitleBar';


export default function FAQ() {
  return (
    <Container sx={{paddingTop: '64px'}} maxWidth="lg">
      <TitleBar></TitleBar>

        <Box sx={{
                  mt:8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4
                }}>
            <Typography variant="body" component="">
            <b>Where do we start?</b><br></br>
            You can reach out schedule a free phone call, video call, or in-person meeting to feel whether we will be a good fit and I can answer any lingering questions you may have. Then you can fill out a reservation form (or print and write your answers). We will go through all your answers together during our two-hour in-home prenatal creative consultation. 
            </Typography>

            <Typography variant="body" component="">
            <b>When should I reserve you?</b><br></br>
            I can only accept two clients a month so connect me with as soon as you know you’ve conceived to ensure you are one of them. 
            </Typography>

            <Typography variant="body" component="">
            <b>What presence will you have in my birth space?</b><br></br>
            I regard an invitation to be in your birth space to be a tremendous honor. I balance my responsibilities for documenting with respecting your privacy, holding space for you and your family, and offering additional support as needed. My cameras are silent, unless a flash is desired. You can decide what type of supplemental lighting you want, if any. I will wear dark, solid, neutral-colored, natural fiber, fragrance-free clothing. Most people say they forgot I was there.
            </Typography>

            <Typography variant="body" component="">
            <b>What kind of supplemental lighting do you use in low-light situations?</b><br></br>
            I can bring the two options to our in-home prenatal creative consultation for you to see. I can either use direct flash, bounce a flash off of a white ceiling, or mount a warm continuous LED light on the camera, depending on if we’re doing photos or video. I could also help you arrange the best natural lighting in your birth space so supplemental light is not needed, however there are possible risks to image quality.
            </Typography>

            <Typography variant="body" component="">
            <b>When will you arrive at my birth?</b><br></br>
            Ideally I can be settled in with you and be in flow before the intensity of active labor. Between two and four hours of labor coverage is great to aim for, but I’d much rather rest on your couch for a few hours than worry about missing your birth on my own couch at home. Of course I defer to your intuition to know when to bring me in.
            </Typography>

            <Typography variant="body" component="">
            <b>What goes into the cost?</b><br></br>
            I try to keep my expenses as low as possible so your investment in my services can be as low as possible. My expenses still include 10k+ of camera gear, external hard drives, redundant hardware back ups, high-speed computer hardware, software subscriptions, website hosting, insurance, and all the other little things that go into running a business. In addition to my field time, there is roughly double that amount of time on the computer for editing photos and triple for editing video. Then the unique nature of being on call for birthwork requires lifestyle sacrifices that I am more than happy to make as a devoted homebody but they have a cost nonetheless. 
            </Typography>

            <Typography variant="body" component="">
            <b>Who will see my most private images?</b><br></br>
            Only with your enthusiastic permission do I share images and videos online in my portfolio or on social media. The decision is ultimately up to you, though homebirth imagery is of course a powerful tool for normalizing the safety of undisturbed physiological birth in one’s own home, and an updated portfolio will help more women and families connect with my work.
            </Typography>

            <Typography variant="body" component="">
            <b>What types of families and births do you serve?</b><br></br>
            I serve families choosing undisturbed physiological birth in their homes, midwife-attended or unassisted, regardless of gender binaries. Though I often use the words woman and mother and breast in my writing, I wholeheartedly respect that humans of all gender identities become pregnant and parent beautifully. I will happily use preferred pronouns and inclusive language to best describe your specific family design.
            </Typography>

            <Typography variant="body" component="">
            <b>Do you still cover hospital transfers?</b><br></br>
            If you want me to, absolutely. Most hospitals don’t allow video recording though, and access to operating rooms is sometimes limited, but I can do my best.
            </Typography>

            <Typography variant="body" component="">
            <b>Do you work with a back up?</b><br></br>
            I do not yet work with a back up but I hope to soon. If I were to miss your birth due to an unforeseen emergency in my life, I would absolutely provide a full refund of your remaining balance.
            </Typography>

            <Typography variant="body" component="">
            <b>Why do you charge based on household income?</b><br></br>
            I want my services to be accessible for a diversity of women and families in our community, especially Black Indigenous People of Color who face significantly higher rates of maternal mortality rates birthing in hospitals, and I believe accessibility is best achieved by higher-income clients subsidizing the cost of my services for lower-income clients.
            </Typography>

            <Typography variant="body" component="">
            <b>Do you offer payment plans or accept trades?</b><br></br>
            If the Tier 1 prices are still too heavy a burden for your family I would gladly entertain a payment plan and/or develop a relationship to trade for your services if I am in need of them.
            </Typography>

            <Typography variant="body" component="">
            <b>What additional charges might there be?</b><br></br>
            I require a minimum non-refundable deposit upon reservation and full payment upon entering ‘on call’. There is a cost to travel to homes farther than sixty minutes from my own, a cost to request shorter editing deadlines than originally offered, and a cost per day for births lasting longer than twenty-four hours.
            </Typography>
        </Box>
  
    </Container>
  );
}