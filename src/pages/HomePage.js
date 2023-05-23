import React from 'react'

import Grid from '@mui/material/Grid';

import ResponsiveAppBar from '../components/AppBar'
import Table from '../components/Table'

function HomePage() {
  return (
    <div>
       <Grid container spacing={2}>
          <Grid sx={{border:'1px solid red',
          
         
          }} item xs={4}>
            <Grid sx={{border:'1px solid blue'
          , margin:'auto'}} xs={11}>

            </Grid>
              
          </Grid>
          <Grid sx={{border:'1px solid red'}} item xs={8}>
              <ResponsiveAppBar />
           </Grid>
       </Grid>
      
     
          
   
       
        {/* <div style={{margin:"5rem"}}>
            <Table />
        </div> */}
     
    </div>
  )
}

export default HomePage