import {Fragment} from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Grid } from '@mui/material';

export default function OppositeContentTimeline() {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Timeline>
            <h4> Education and Internships </h4>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                2013-18 <br/> 10th Board
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent> <span> Ryan International School (ICSE) </span>  <br/> <span style={{fontSize:'14px'}}> Percentage - 96% </span> </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                2018-20 <br/> 12th Board
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent> <span> Nirmala College of Science  </span> <br/><span style={{fontSize:'14px'}}> Percentage - 81% <br/> CET percentile - 99.13 </span> </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                2021-Present <br/> B.Tech, Computers
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent> <span> DJ Sanghvi <br/> College of Engg. </span> <br/> <span style={{fontSize:'14px'}}> CGPA - 9.59 </span> </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Timeline>
          <h4> College clubs and courses </h4>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Mar 21 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent> <span> DJS Robocon </span> <br/><span style={{fontSize:'14px'}}> Coding (IOT) </span> </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              June 21 - July 21
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent> <span> Ethical Hacking </span> <br/><span style={{fontSize:'14px'}}> CEH level training </span> </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              July 21 - Aug 21
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent> <span> Unicode ML School </span> <br/><span style={{fontSize:'14px'}}> ML Training Camp </span> </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Aug 21 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent> <span> DJ Unicode </span>  <br/> <span style={{fontSize:'14px'}}> Fullstack developer </span> </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Oct 21 
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent> <span> Hacktober Fest  </span> <br/><span style={{fontSize:'14px'}}> Contributed 11 PRs </span> </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Oct 21 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent> <span> DJ ACM  </span> <br/><span style={{fontSize:'14px'}}> Infotech Co-Committee </span> </TimelineContent>
          </TimelineItem>
        </Timeline>
        </Grid>
      </Grid>
    </Fragment>
  );
}
