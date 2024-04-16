'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// interface Props {
//   window?: () => Window;
//   component?: React.ReactNode;
// }
// export default function Experience(props: Props) {
//   return <Typography>Experience page</Typography>;
// }

export default function Page() {
  return (
    <Box component="main" sx={{ px: 5, py: 3 }}>
      <Toolbar />
      <Typography>Experience view</Typography>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Timeline position="alternate">
            <TimelineItem sx={{ my: 3 }}>
              <TimelineOppositeContent color="text.secondary">
                Jul/2020 - till
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h5">Apexon</Typography>
                <Typography variant="h6">Software Engineer</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </AccordionSummary>
        <AccordionDetails>
          Achievements: May 2023 – till • Developed services for React using
          Typescript, ES6 • Developed and wired services/endpoints from Backend
          GraphQl server • Reverse engineering to find and solve existing
          performance issues • Created ETL (Extract Transform and Load) to
          improve application performance • Designed and created infrastructure
          in Amazon AWS to read from Replica DB (SQL server) and creating an ETL
          based on the changes • Created AWS RDS instances and implemented a new
          schema to support new ETL • Created AWS EC2 instances to monitor ETL
          workflow and data sync • Configured AWS services for RDS with EC2 and
          a hosted Graphql server • Tuned SQL queries from On-premise SQL Server
          to improve performance • Created functional and technical designs for
          existing issues and new features • Fixed security issues in
          GraphQl/TypeORM modifying query implementation to protect PHI data •
          Created Python scripts to monitor new ETL and data sync from Replica
          DB • Brainstorm, designing and implementing infrastructure to support
          PHI Data migration to-from Epic using Kafka topics • Created Lambda
          scripts and workflows to detect changes from on-premise DB (SQL
          server) using Python code • Created and implemented multiple EC2 and
          RDS instances on DEV, TEST and Prod environments • Reduced costs of
          EC2 and RDS instances through choosing and implementing the right size
          on application basis • Dockerized and configured applications and
          scripts to emulate deployments, Docker/Python DB like SQL Server
        </AccordionDetails>
      </Accordion>
      <Timeline position="alternate">
        <TimelineItem sx={{ my: 3 }}>
          <TimelineOppositeContent color="text.secondary">
            Jul/2020 - till
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">Apexon</Typography>
            <Typography variant="h6">Software Engineer</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ my: 3 }}>
          <TimelineOppositeContent color="text.secondary">
            March/2019 - Jul/2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">IMCS group</Typography>
            <Typography variant="h6">Software Engineer</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ my: 3 }}>
          <TimelineOppositeContent color="text.secondary">
            May/2018 - Jan/2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">Global Hitss</Typography>
            <Typography variant="h6">Frontend Engineer</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ my: 3 }}>
          <TimelineOppositeContent color="text.secondary">
            Jul/2012 - May/2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">Definity first</Typography>
            <Typography variant="h6">UI Engineer</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ my: 3 }}>
          <TimelineOppositeContent color="text.secondary">
            March/2011 - Jun/2012
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">Universidad Xochicalco</Typography>
            <Typography variant="h6">Web developer</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ my: 3 }}>
          <TimelineOppositeContent color="text.secondary">
            Feb/2008 - March/2011
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">CICESE</Typography>
            <Typography variant="h6">Web developer</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
