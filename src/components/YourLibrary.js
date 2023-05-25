import React from 'react'

import { Grid } from '@mui/material'
import AreaCard from './Cards'

function YourLibrary() {

    let ar = [1,2,3,4,5]

  return (
    <div>

            
        
        
            <Grid sx={{
              border:'1px solid blue',
              margin:'auto',
              borderRadius:'10px',
              marginTop:"1rem",
              height:500,
              width:'30%',
              overflow:'auto',

               position:'fixed',
            //   padding:"10px 0 10px 10px"
              }}
              item 
              xs={11}>
                        <Grid 
                        // position='sticky'
                        sx={{
                            border:'1px solid blue',
                            // margin:'auto',
                            borderTopRightRadius:'10px',
                            borderTopLeftRadius:'10px',
                            // marginTop:"1rem",
                            //   height:500,
                            width:'inherit',
                            position:'fixed',
                            padding:"10px 0 10px 10px"
                            }}
                            item 
                            xs={11}>
                            Your Library
                

                        </Grid>
              {/* Your Library */}

              {
                ar.map((data)=>{
                    return(
                        <div key={data} style={{marginTop:"5rem"}}>
                            <AreaCard />
                        </div>
                    )
                })
              }
           

            </Grid>
    </div>
  )
}

export default YourLibrary