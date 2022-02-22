import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import ProjectCard from "./Card";

export default function CarouselCard() {

    const [items, setItem] = useState([])

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      useEffect(()=> {
        fetch("https://shrey-myblog.herokuapp.com/project", requestOptions)
        .then(response => response.json())
        .then(result => {
          setItem(result)
        })
        .catch(error => console.log('error', error));
        // eslint-disable-next-line
      }, [])

      return (
        <center style={{paddingBlock:'5%'}}>
          <Carousel>
            {
              items.map((det,index) => 
              <ProjectCard key={det.id} index={index+1} url={det.url} desc={det.desc} name={det.title} img={det.img.slice(0,-15)}/>
              )
            }
          </Carousel>
        </center>
      )
}