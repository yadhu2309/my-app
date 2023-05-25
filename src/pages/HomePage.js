import React, { useState }  from 'react'

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';



import ResponsiveAppBar from '../components/AppBar'
import AreaCard from '../components/Cards';
import Trendings from '../components/Trendings';
import YourLibrary from '../components/YourLibrary';



function HomePage() {
  const matches = useMediaQuery('(min-width:1000px)');
  console.log("true",matches);
  let ar=[1,2,3,4,5,6]

 
    const [showMore, setShowMore] = useState(false);
    const content = showMore ? ar:ar.slice(0,3);

    const toggleShowMore = () => {
      setShowMore(!showMore);
    };

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
            // border:'1px solid red',
            hegiht:500,
            width:"30%",
            overflow:'auto'
            // position:'fixed',
            }} 
            item xs={4}>
           {/* <YourLibrary />  */}
              
          </Grid>
          <Grid sx={{
            border:'1px solid red',
            hegiht:500,
            width:"30%",
            position:'fixed',

            }} 
            item xs={4}>
           <YourLibrary /> 
              
          </Grid>

              {/* ResponsiveAppBar */}

          <Grid sx={{ 
            // border:'1px solid red'
            }} item xs={8}>
              <ResponsiveAppBar />

              
                <Trendings/>
              
              {/* Recently */}
              <Grid sx={{
                // border:"1px solid black",
                margin:"auto",
                marginTop:"1em",
                padding:'10px 0 0 10px'
                }} 
                item  xs={11.5}>
                  Recently
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