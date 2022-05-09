import { Grid } from "@mui/material";
import blockchain from "../Assets/blockchain.png";
import coding from "../Assets/coding.png";
import cloud from "../Assets/cloud.png";
import data from "../Assets/data-science.png";
import hacker from "../Assets/hacker.png";
import neural from "../Assets/neural.png";
import sensor from "../Assets/sensor.png";
import cp from "../Assets/cp.png";
import web from "../Assets/web-programming.png";
import DomainCard from "./DomainCard";

export default function Domains() {

  const desc = {
    web: 'Familiar with frontend (HTML, CSS, Javascript, Typescript, React), Backend (Django)',
    hack: 'Received CEH (certified ethical hacking) training, practising pentesting on websites',
    ml: 'Studied about Deep learning (focused more towards CNN and CV based projects',
    ds: 'Basics of data visualization, preprocessing',
    iot: 'Efficient in coding arduino with sensors, buzzers etc. Studied about ROS applications.',
    cloud: 'Deployed websites and bots on cloud, used Docker to contribute in a project. ',
    cp: 'Practised on platforms like codechef, hacker rank',
    block: 'Developed smart contracts using solidity, familiar with tools like Ganache, Metamask',
    app: 'Learnt to develop simple designs on Android Studio using kotlin',
  }
  return (
    <center id="Domains">
      <div style={{ textAlign: "center", paddingInline: "10%", paddingTop:'4%' }}>
        <h3> Domains </h3>
        <Grid container>
          <Grid item style={{ paddingBlock: "2%" }} xs={12} sm={4} md={4}>
            <DomainCard img={web} name="Web dev" desc={desc.web} />
          </Grid>
          <Grid item style={{ paddingBlock: "2%" }} xs={12} sm={4} md={4}>
            <DomainCard img={hacker} name="CyberSecurity" desc={desc.hack} />
          </Grid>
          <Grid item style={{ paddingBlock: "2%" }} xs={12} sm={4} md={4}>
            <DomainCard img={neural} name="ML/AI" desc={desc.ml}/>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item style={{ paddingBlock: "2%" }} xs={12} sm={4} md={4}>
            <DomainCard img={data} name="Data Science" desc={desc.ds}/>
          </Grid>
          <Grid item style={{ paddingBlock: "2%" }} xs={12} sm={4} md={4}>
            <DomainCard img={sensor} name="IOT" desc={desc.iot}/>
          </Grid>
          <Grid item style={{ paddingBlock: "2%" }} xs={12} sm={4} md={4}>
            <DomainCard img={cloud} name="Cloud computing" desc={desc.cloud}/>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item style={{ paddingBlock: "2%" }} xs={12} sm={4} md={4}>
            <DomainCard img={cp} name="Algorithms" desc={desc.cp}/>
          </Grid>
          <Grid item style={{ paddingBlock: "2%" }} xs={12} sm={4} md={4}>
            <DomainCard img={blockchain} name="Blockchain" desc={desc.block}/>
          </Grid>
          <Grid item style={{ paddingBlock: "2%" }} xs={12} sm={4} md={4}>
            <DomainCard img={coding} name="App Dev" desc={desc.app}/>
          </Grid>
        </Grid>
      </div>
    </center>
  );
}
