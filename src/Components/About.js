import { Grid } from "@mui/material";
import Flip from "./Flip";
import Typed from "react-typed";
import './components.css';

export default function About() {
    return (
        <div style={{paddingBlock:'13%'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7} sm={7} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Flip/>   
                </Grid>
                <Grid item xs={12} md={5} sm={5} sx={{paddingInline:'2%', textAlign:'justify'}}>
                    <h2> Hi, I am Shrey Parekh. </h2>
                    <span className="typer"> I'm </span>
                    <Typed
                    className="typer"
                    strings={[
                      "a Fullstack Developer",
                      "an ML Developer",
                      "a Pentester",
                      "an IOT developer",
                      "an Open Source Contributor",
                      "Why you still here?"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                    <p> Developing products via technology is my forte. I love to collaborate with people in team
                        projects and events. A focused tech enthusiast dedicated towards my work and open to all 
                        types of ideas that support technology.
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}