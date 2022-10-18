import React from 'react'
import {Box,Stack,Card,Grid } from '@mui/material'
import { Link } from 'react-router-dom'

const Display = ({recipe,setIndex}) => {
    
    const hits=recipe.hits
  return (
    
    <Grid className='grid-container' container rowSpacing={3} columnSpacing={1}>
        {hits.map((hit,index) =>{
            const no=index
            setIndex(no)
            return(
        //    
            <Grid className='grid-item' item xs={6} sm={4} md={3} key={index} >
                <Card  className='results'>
                    <Stack className='result-img'><img src={hit.recipe.image} alt='recipe'/></Stack>
                    <Box className='result-detail'>
                        <h4>{hit.recipe.label}</h4>
                        <h5>-{hit.recipe.source}</h5>
                    </Box>
                    <Link to={`/recipe/${index}`}><Stack className='button'><button>View</button></Stack></Link>
                </Card>
            </Grid>
        // 
        )
        })}
    </Grid>
  
  )
}

export default Display