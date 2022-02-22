import { Grid, Paper, TextField, Fab } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import { MdOutlineMailOutline } from 'react-icons/md';
import { styled } from "@mui/material/styles";
import "./components.css";

export default function Contact() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div style={{ padding: "5%"}} id="Contact">
      <Grid container spacing={4}>
        <Grid item xs={12} md={7} sm={5} sx={{ padding: "5%" }}>
          <center>
            <h3> Contact Me </h3>
            <p>
              You can approach me with any problem, big or small, in any tech
              domain, I'll help you develop it into a product. Open for any 
              collaborations and internship opportunities.
            </p>
            <p>
              Provide your name and email and a short description of the kind of
              project you want to develop, I will reply as soon as possible. Feel
              free to drop in your queries.
            </p>
            <div style={{ display: "flex", flexDirection: "row", justifyContent:'space-evenly', alignItems:'center', width:'60%', marginTop:'10%' }}>
              <a href="https://www.linkedin.com/in/shrey-parekh-a16644200/" target="_blank" rel="noreferrer"> <GrLinkedinOption color="black" style={{fontSize:'1.75rem'}}/> </a> 
              <a href="mailto:talkshrey@gmail.com" target="_blank" rel="noreferrer"> <MdOutlineMailOutline color="black" style={{fontSize:'1.85rem', marginTop:'3px'}}/> </a> 
              <a href="https://twitter.com/Shrey68767170" target="_blank" rel="noreferrer"> <GrTwitter color="black" style={{fontSize:'1.7rem', marginTop:'3px'}}/> </a> 
            </div>
          </center>
        </Grid>
        <Grid item xs={12} md={5} sm={7} sx={{ width: "80%" }}>
          <center>
            <Item
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "9%",
              }}
              elevation={5}
            >
              <TextField label="Name" variant="outlined" margin="normal" className="input"/>
              <TextField label="Email" variant="outlined" margin="normal" className="input"/>
              <TextField
                label="Description"
                variant="outlined"
                margin="normal"
                multiline
                rows={5}
                maxRows={7}
                className="input"
              />
              <Fab
                variant="extended"
                size="medium"
                aria-label="add"
                sx={{
                  textTransform: "none",
                  marginInline: "20%",
                  marginTop: "5%",
                }}
                type="submit"
              >
                <EmailOutlinedIcon sx={{ mr: 1 }} />
                Email
              </Fab>
            </Item>
          </center>
        </Grid>
      </Grid>
    </div>
  );
}
