import React, { useState }  from 'react'

import Grid from '@mui/material/Grid';

import AreaCard from './Cards';

function Trendings(props) {
  let title = props.title

    let ar=[1,2,3,4,5,6]

 
    const [showMore, setShowMore] = useState(false);
    const content = showMore ? ar:ar.slice(0,3);

    const toggleShowMore = () => {
      setShowMore(!showMore);
    };
  return (
    <div>
        {/* Trendings */}
        <Grid sx={{
                marginTop:"1rem",
                display:"flex",
                justifyContent:'space-between',
            }}
            item  xs={11.5}
            >
              <span>
                {/* Title */}
                  {title}
                </span>
                <span style={{color:'blue',
            cursor:'pointer'}} onClick={toggleShowMore}>
                  Show More
                </span>
              </Grid>
        <Grid 
              container
              direction={{sm:"column",xs:'column',md:'row',lg:'row'}}
              sx={{
                padding:'10px 0 0 10px'
              }} 
                item  xs={11.5}>
              
                
                  {
                  content.map((data,index)=>{
                    return(
                          <div key={index+data}
                          style={{margin:'0 0 10px 10px',display:'flex',
                          alignContent:'center',justifyContent:'center'}}>

                            <AreaCard/>
                          </div>
                    )
                  })
                }
                 
                
              </Grid>

    </div>
  )
}

export default Trendings