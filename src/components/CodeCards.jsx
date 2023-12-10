// import React from 'react';
// import { Grid, Card, CardContent, Typography, CardActions, Button } from "@mui/material";
// import Container from "@mui/material/Container";
// import Data from "../components/CodeCards.json";
// import { CardActionArea } from '@mui/material';
// import CardMedia from '@mui/material/CardMedia';
// import { Link, useParams } from 'react-router-dom';
// import Navbar from './container/Navbar/Navbar';

// const CodeCards = () => {
//   const { breakpoint } = useParams();



//   const displayFirst15Words = (description) => {
//     // Split the description into an array of words
//     const words = description.split(' ');

//     // Take the first 15 words
//     const first15Words = words.slice(0, 15);

//     // Join the first 15 words back into a string
//     return first15Words.join(' ');
//   };

//   return (
//     <>
//       <Navbar />
//       <div className='App'>
//         <Container maxWidth="lg">
//           <Typography variant='h4' align='center' style={{ marginTop: "90px" }}>
//             Learn <span className='text-Teal'>Free</span> Programming Language
//           </Typography>
//           <Grid container spacing={5} style={{ marginTop: "20px" }}>
//             {Data.map((result, index) => (
//               <Grid item xs={12} sm={4} ms={4} key={index}>
//                 <Card sx={{ maxWidth: 345 }} style={{ padding: "10px", marginBottom: "30px" }}>
//                   <CardActionArea>
//                     {/* <CardMedia
//                       component="img"
//                       height="50%"
//                       width="50%"
//                       // image={result.img}
//                       alt="bookimage"
//                       style={{ borderRadius: "5px" , height:"100", width:"80%" , alignItems:"center"}}
//                     /> */}
//                     <CardContent style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
//                       <Typography gutterBottom style={{alignItems:"center"}} 
//                       variant="h3" 
//                       // component="div"
//                       >
//                         <span style={{textAlign:"center"}}>{result.title}</span> 
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
                       
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                   <CardActions style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
//                     <Button  style={{backgroundColor:"teal", color:"white"}} size="medium" >
//                        <Link  > Learn </Link>
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </div>
//     </>
//   );
// }

// export default CodeCards;

import './main.scss'
// import Navbar from '../components/dashboard_cont/Navbar/Navbar'
import Widget from '../components/dashboard_cont/Widget/Widget'
import Navbar from './container/Navbar/Navbar'

const CodeCards = () => {
  return (
    <div className="main">
      <div className="mainContainer">
        <Navbar />
        <div className="section">
          <h1 className="heading" style={{fontSize:"20px"}}>Programming Languages</h1>
          <div className="widgets">
            <Widget title="C" desc="A programming language" />
            <Widget title="C++" desc="A programming language" />
            <Widget
              title="Javascript"
              desc="The language for programming web pages"
            />
            <Widget title="Java" desc="A programming language" />
            <Widget
              title="Python"
              desc="A programming language most popular and use in AL and ML"
            />
          </div>
        </div>
        {/* <div className="section">
          <h1 className="heading">Web Development</h1>
          <div className="widgets">
            <Widget title="HTML" desc="A programming language" />
            <Widget title="CSS" desc="A programming language" />
            <Widget
              title="Javasript"
              desc="The language for programming web pages"
            />
            <Widget title="React" desc="A programming language" />
            <Widget
              title="Bootstrap"
              desc="A programming language most popular and use in AL and ML"
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default CodeCards

