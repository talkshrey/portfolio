import Flippy, { FrontSide, BackSide } from "react-flippy";
import shrey from '../Assets/shrey.jpeg';
import qr from '../Assets/qr.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Grid} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Flip() {

  return (
    <center style={{height:'100%'}}>
      <Flippy
        flipOnHover={false}
        flipOnClick={true}
        flipDirection="horizontal"
        style={{ width: "65%", height:"100%", paddingBlock:'2%'}}
      >
        <FrontSide className="side">
          <Grid container spacing={0} style={{paddingTop:'8%'}}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <img src={shrey} alt="shrey" className="shrey"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <section>
              <p style={{fontSize:'1.2rem', fontWeight:'600'}}> SHREY PAREKH </p>
              <p style={{fontSize:'1rem'}}> Fullstack Developer </p>
              </section>
              <div style={{paddingInline:'8%', paddingBlock:'8%'}}>
                <div className="card-icon"> <EmailIcon/> &nbsp; talkshrey@gmail.com </div>
                <div className="card-icon"> <PhoneIcon/> &emsp; 9833447698 </div>
              </div>
            </Grid>
          </Grid>
        </FrontSide>
        <BackSide className="side">
          <Grid container spacing={0} style={{paddingTop:'8%'}}>
            <Grid item xs={12} sm={12} md={12} lg={6} className="grid">
              <div className="social">
                <a href="https://twitter.com/Shrey68767170" target="_blank" rel="noreferrer"> <TwitterIcon className="icons" fontSize="large"/> </a>
                <span className="label"> @Shrey68767170 </span> 
              </div>
              <div className="social">
                <a href="https://www.instagram.com/_shrey003_/" target="_blank" rel="noreferrer"> <InstagramIcon fontSize="large" className="icons"/> </a>
                <span className="label"> @_shrey003_ </span>
              </div>
              <div className="social">
                <a href="https://www.facebook.com/shrey.parekh.142/" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'black'}}> <FacebookIcon fontSize="large" className="icons"/> </a>
                <span className="label"> @shrey.parekh.142 </span>
              </div>
              <div className="social">
                <a href="https://github.com/talkshrey" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'black'}}> <GitHubIcon fontSize="large" className="icons"/> </a>
                <span className="label"> talkshrey </span>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <img src={qr} width="75%" alt="qr-code"/>
            </Grid>
          </Grid>
        </BackSide>
      </Flippy>
    </center>
  );
}
