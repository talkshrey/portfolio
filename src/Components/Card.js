import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function ProjectCard(props) {
  return (
    <div>
      <Card sx={{ width: "65%" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "white", color: "black" }}
              aria-label="project"
            >
              {props.index}
            </Avatar>
          }
          action={
            <IconButton aria-label="info">
              <a
                href={props.url}
                style={{ color: "black" }}
                target="_blank"
                rel="noreferrer"
              >
                <InfoOutlinedIcon />
              </a>
            </IconButton>
          }
          title={props.name}
        />
        <CardMedia
          component="img"
          height="250"
          image={props.img}
          alt={props.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
