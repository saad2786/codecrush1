import React from 'react'
import {Grid,Card,CardContent,Typography, CardActions,Button} from "@mui/material"
import Container from "@mui/material/Container"
import Data from "../TutorialData.json"
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Navbar from './container/Navbar/Navbar';
// import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import ScreenShareIcon from '@mui/icons-material/ScreenShare';
// import FileDownloadIcon from '@mui/icons-material/FileDownload';
const Tutorial = () => {
  const downloadPDF = (pdfUrl) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1); // Set the downloaded file name
    link.click();
  };

 


  return (
    <>
    <Navbar />
    <div className='App'>
      <Container maxWidth="lg">
      <Typography variant='h4' align='center' style={{marginTop:"80px"}}>
        Learn from <span style={{color:"teal"}}> Free </span> Video Tutorial
      </Typography>
      <Grid container spacing={5} style={{marginTop:"20px"}}>
      {Data.map((result,index)=>(
          <Grid item xs={12} sm={4} ms={4} key={index}>
          <Card sx={{ maxWidth: 345 }} style={{padding:"10px",marginBottom:"30px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          width="100" 
          image={result.img}
          alt=".netframeWork"
          style={{borderRadius:"5px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {result.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* {displayFirst15Words(result.desc)} */}
            {/* result.desc */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display:"flex",alignItems:"center",justifyContent:"center", height: "100%"}}>
      <Button  onClick={() => downloadPDF(result.pdfUrl)} style={{backgroundColor:"teal", color:"white"}} size="medium" >
          {/* <ScreenShareIcon /> */}
          <span style={{marginLeft:"4px"}}>Visit</span>
        </Button>
      </CardActions>
    </Card>
  </Grid>
      ))}
      </Grid>
      </Container>
    </div>
    </>
  )
}

export default Tutorial
