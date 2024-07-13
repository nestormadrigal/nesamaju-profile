'use client';
import React from 'react';
import parse from 'html-react-parser';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Container, Drawer } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { userProfile } from './lib/placeholder-data';
import nsAvatar from '.ns-avatar.jpeg';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  const profileName = 'Nestor Madrigal';
  const profileDesc = userProfile.profileDescription;
  // const profileDesc = `
  // Software Engineer overall 15 years of experience in software development life cycle using a variety of programming languages, Frameworks and tools specialized for WEB development, special detail on creating interfaces (HTML5, CSS3, Javascript, Typescript, Jquery and Bootstrap, angular 4+, Cypress test, just for mention few tools) always taking care of the look and feel in a balance with performance.
  // Solid experience in different Programming language, Object Oriented Programming concepts and MVC pattern (C#, PHP, Python, Java)
  // Strong experience and certified on Amazon Web Services (AWS cloud practitioner)
  // Willing to share knowledge and coach team members when needed, I'm a person that likes to implement and improve communication skills everyday also coordinate the relationship between team members in different countries or time zones when needed.
  // Experience with performance and optimization problems and a demonstrated ability to both diagnose and prevent these problems.
  // Strong experience on analysis, development, maintenance of Databases SQL and non-SQL (MySQL, SQL Server, Postres, MongoDB)
  // `;
  const drawerWidth = 240;
  const bioCard = (
    <React.Fragment>
      <Stack spacing={4} mt={4} sx={{ alignItems: 'center' }}>
        {/* <img src="./static/images/avatar/ns-avatar.jpeg" alt="avatar" /> */}
        <Avatar
          alt="Nestor avatar"
          src="./images/avatar/ns-avatar.jpeg"
          sx={{ width: 120, height: 120 }}
        />
        <Typography
          // sx={{ fontSize: 20 }}
          variant="h4"
          gutterBottom
          align="center"
        >
          {profileName}
        </Typography>
        <Typography
          // sx={{ fontSize: 20 }}
          variant="h6"
          color="text.secondary"
          align="center"
        >
          Software Engineer
        </Typography>

        <CardContent></CardContent>
      </Stack>
    </React.Fragment>
  );

  return (
    <Box component="main" sx={{ px: 5, py: 3 }}>
      <Toolbar />

      <Container maxWidth="xl" className="mt-4">
        <Grid container spacing={3}>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: '80vh', backgroundColor: '#374151' }}
            >
              {bioCard}
            </Card>
          </Grid>
          <Grid xs={8}>
            <Card variant="outlined">
              <CardContent>
                <Typography sx={{ fontSize: 20 }}>
                  {parse(profileDesc)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
    // <div className={styles.page}>
    //   <div className="wrapper">
    //     <div className="container">
    //       <div id="hero" className="rounded">
    //         <div className="text-container">
    //           <h2>
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    //               />
    //             </svg>
    //           </h2>
    //         </div>
    //         <div className="logo-container">
    //           <Button
    //             type="button"
    //             {...getRootProps}
    //             className={`bg-green-600 ${styles.btn}`}
    //           >
    //             Touch here
    //           </Button>
    //         </div>
    //       </div>

    //       <div id="middle-content">
    //         <Card variant="outlined">{card}</Card>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
