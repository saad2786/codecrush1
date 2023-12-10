import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import Container from "@mui/material/Container";
import Data from "../Data.json";
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'react-router-dom';
import Navbar from './container/Navbar/Navbar';

const Ebooks = () => {
  const { breakpoint } = useParams();

  const downloadPDF = (pdfUrl) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1); // Set the downloaded file name
    link.click();
  };

  const displayFirst15Words = (description) => {
    // Split the description into an array of words
    const words = description.split(' ');

    // Take the first 15 words
    const first15Words = words.slice(0, 15);

    // Join the first 15 words back into a string
    return first15Words.join(' ');
  };

  return (
    <>
      <Navbar />
      <div className='App'>
        <Container maxWidth="lg">
          <Typography variant='h4' align='center' style={{ marginTop: "90px" }}>
            Download <span className='text-Teal'>Free</span> E-books !!
          </Typography>
          <Grid container spacing={5} style={{ marginTop: "20px" }}>
            {Data.map((result, index) => (
              <Grid item xs={12} sm={4} ms={4} key={index}>
                <Card sx={{ maxWidth: 345 }} style={{ padding: "10px", marginBottom: "30px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="auto"
                      width="100"
                      image={result.img}
                      alt="bookimage"
                      style={{ borderRadius: "5px" }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {result.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {displayFirst15Words(result.desc)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                    <Button onClick={() => downloadPDF(result.pdfUrl)} style={{backgroundColor:"teal", color:"white"}} size="medium">
                      Download
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Ebooks;
