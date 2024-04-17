'use client';
import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  const profileName = 'Nestor Madrigal';
  const profileDesc = `
  Software Engineer overall 15 years of experience in software development life cycle using a variety of programming languages, Frameworks and tools specialized for WEB development, special detail on creating interfaces (HTML5, CSS3, Javascript, Typescript, Jquery and Bootstrap, angular 4+, Cypress test, just for mention few tools) always taking care of the look and feel in a balance with performance. 
  Solid experience in different Programming language, Object Oriented Programming concepts and MVC pattern (C#, PHP, Python, Java) 
  Strong experience and certified on Amazon Web Services (AWS cloud practitioner) 
  Willing to share knowledge and coach team members when needed, I'm a person that likes to implement and improve communication skills everyday also coordinate the relationship between team members in different countries or time zones when needed.
  Experience with performance and optimization problems and a demonstrated ability to both diagnose and prevent these problems.
  Strong experience on analysis, development, maintenance of Databases SQL and non-SQL (MySQL, SQL Server, Postres, MongoDB)
  `;

  const card = (
    <React.Fragment>
      <Typography
        // sx={{ fontSize: 20 }}
        variant="h2"
        color="text.primary"
        gutterBottom
        align="center"
      >
        {profileName}
      </Typography>
      <Typography
        // sx={{ fontSize: 20 }}
        variant="h4"
        color="text.secondary"
        align="center"
      >
        Software Engineer
      </Typography>

      <CardContent></CardContent>
    </React.Fragment>
  );

  return (
    <Box component="main" sx={{ px: 5, py: 3 }}>
      <Toolbar />
      <Typography>{profileDesc}</Typography>
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
