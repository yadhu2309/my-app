import React from 'react'

import { Grid } from '@mui/material'
import AreaCard from './Cards'

function YourLibrary() {

    let ar = [1,2,3,4,5]

  return (
    <div>

            
        
        
<Grid 
                        // position='sticky'
                        sx={{
                            border:'1px solid blue',
                            // margin:'auto',
                            borderTopRightRadius:'10px',
                            borderTopLeftRadius:'10px',
                            // marginTop:"1rem",
                            //   height:500,
                            width:'30%',
                            position:'fixed',
                            padding:"10px 0 10px 10px"
                            }}
                            item 
                            xs={11}>
                            Your Library
                

                        </Grid>
            <Grid sx={{
              borderBottom:'1px solid blue',
              borderLeft:'1px solid blue',
              borderRight:"1px solid blue",
            //   border:'1px solid blue',
              margin:'auto',
              borderBottomRightRadius:'10px',
              borderBottomLeftRadius:'10px',

              marginTop:"2.6rem",
              height:500,
              width:'30%',
              overflow:'auto',

               position:'fixed',
                //   padding:"10px 0 10px 10px"
              }}
              item 
              xs={11}>
                        
              {/* Your Library */}
              <div style={{marginTop:'4rem',marginBottom:'1em'}}>

              {
                ar.map((data)=>{
                    return(
                        <div key={data} style={{marginTop:"1rem"}}>
                            <AreaCard />
                        </div>
                    )
                })
              }
           </div>

            </Grid>
    </div>
  )
}

export default YourLibrary