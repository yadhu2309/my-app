import React, { useState }  from 'react'

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';



import ResponsiveAppBar from '../components/AppBar'
import AreaCard from '../components/Cards';
import Trendings from '../components/Trendings';
import YourLibrary from '../components/YourLibrary';



function HomePage() {
  const matches = useMediaQuery('(min-width:600px)');
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
          <Grid sx={{
            border:'1px solid red',
            hegiht:500,
            width:"30%",
          display:matches? "block":'none'
            // position:'fixed',

            }} 
            item xs={4}>
           <YourLibrary /> 
              
          </Grid>

              {/* ResponsiveAppBar */}

          <Grid
           sx={{ padding:0
            // border:'1px solid red'
            }} item xs={matches?8:12}>
              <ResponsiveAppBar />
              <div style={{marginTop:matches?0:'5rem'}}>
                  {/* Trendings */}

                <Trendings title="Trendings"/>

                    {/* Recently */}
                  <Trendings title="Recently"/>
              </div>
              
          </Grid>
       </Grid>
      
     
          
   
       
       
     
    </div>
  )
}

export default HomePage