import React from 'react'

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';



import ResponsiveAppBar from '../components/AppBar'
import AreaCard from '../components/Cards';



function HomePage() {
  const matches = useMediaQuery('(min-width:1000px)');
  console.log("true",matches);

  return (
    <div>
       <Grid sx={{
          width:'100%',
          height:800,
          // border:"1px solid green"

           }}
          container
          spacing={2}
          >

            {/* your Library */}

          <Grid sx={{
            border:'1px solid red',
            hegiht:500,
            width:"30%"
            }} 
            item xs={4}>
            <Grid sx={{
              border:'1px solid blue',
              margin:'auto',
              borderRadius:'10px',
              marginTop:"1rem",
              height:500,
              width:'inherit',
              position:'fixed',
              }}
              item 
              xs={11}>
              Your Library
           

            </Grid>
              
          </Grid>

              {/* ResponsiveAppBar */}

          <Grid sx={{
            border:'1px solid red'
            }} item xs={8}>
              <ResponsiveAppBar />

              {/* Trending */}

              <Grid sx={{
                border:"1px solid black",
                margin:"auto",
                marginTop:"1em",
                padding:'10px 0 0 10px'
                }} 
                item  xs={11.5}>
                Trending

                <Stack
                  direction={{sm:"column",xs:'column',md:'row',lg:'row'}}
                  // divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  <AreaCard/>
                  <AreaCard/>
                  <AreaCard/>
 
                </Stack>

                
              </Grid>
          </Grid>
       </Grid>
      
     
          
   
       
       
     
    </div>
  )
}

export default HomePage