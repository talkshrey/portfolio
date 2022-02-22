import CountUp from 'react-countup';
import CarouselCard from './Carousel';
import {Grid, Typography} from '@mui/material';
import { useState } from 'react';

export default function Projects() {

    const [loading, setLoading] = useState(false);

    const onStart = () => {
      setLoading(true);
    };
  
    const onEnd = () => {
      setLoading(false);
    };
  
    const containerProps = {
      'aria-busy': loading,
    };

    return (
        <center id="Projects" style={{paddingBlock:'8%'}}>
            <h3> Projects </h3>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography variant='h6' my={5}> Projects completed <br/>
                    <CountUp end={40} duration={3} onStart={onStart} onEnd={onEnd} containerProps={containerProps}/>
                    </Typography>

                    <Typography variant='h6' my={5}> Ongoing projects <br/>
                    <CountUp end={5} duration={3}/>
                    </Typography>

                    <img align="center" className='img' src="https://github-readme-streak-stats.herokuapp.com/?user=talkshrey" alt="shrey parekh" />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <CarouselCard/>
                </Grid>
            </Grid>
        </center>
    )
}