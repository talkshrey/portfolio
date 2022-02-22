import Grid from "@mui/material/Grid";
import OppositeContentTimeline from "./Timeline";

export default function Resume() {
  return (
      <Grid id="Details" container spacing={2} style={{paddingBlock:'6%'}}>
        <Grid item md={8} sm={8} xs={12} style={{textAlign:'center'}}>
          <center>
            <OppositeContentTimeline/>
          </center>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <center style={{ height: "70vh"}}>
            <h3> Resume </h3>
            <iframe
              src="https://drive.google.com/file/d/11rpxK-pqYUZfHk65LshdUPq0VXcEqkTn/preview"
              width="300vh"
              height="420vh"
              allow="autoplay"
              title="resume"
            />
          </center>
        </Grid>
      </Grid>
  );
}
