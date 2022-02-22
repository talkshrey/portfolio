import { Grid } from "@mui/material";
import blockchain from "../Assets/blockchain.png";
import coding from "../Assets/coding.png";
import cloud from "../Assets/cloud.png";
import data from "../Assets/data-science.png";
import hacker from "../Assets/hacker.png";
import neural from "../Assets/neural.png";
import sensor from "../Assets/sensor.png";
import vr from "../Assets/vr-goggles.png";
import web from "../Assets/web-programming.png";
import DomainCard from "./DomainCard";

export default function Domains() {

  const desc = {
    web: 'HTML,CSS,JavaScript,React,Django',
    hack: 'Certified ethical hacking (CEH) training',
    ml: 'Deep Learning-CV,CNN,NLP',
    ds: 'Data Visualisation',
    iot: 'Arduino,ROS,Sensors',
    cloud: 'Google Cloud,Deployment, CI/CD',
    vr: 'Spark AR filters',
    block: 'Smart Contracts',
    app: 'Android App dev, Kotlin',
  }
  return (
    <center id="Domains">
      <div style={{ textAlign: "center", paddingInline: "10%", paddingTop:'5%' }}>
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
            <DomainCard img={vr} name="AR/VR" desc={desc.vr}/>
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
