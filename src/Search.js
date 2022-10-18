import React from 'react'
import {Box,TextField,Stack } from '@mui/material'
import image from './images/download.jpg'
import searchIcon from './images/search.png'
const Search=({recipeData,input,setInput})=>{
    const fetchData=()=>{
        recipeData()
        setInput('')
    }
    const styles={
        paperContainer:{
            height:'100%',
            backgroundImage:`url(${image})`,
            opacity:'.9'
        }
    }
    return(
        <Box style={styles.paperContainer} className='search-box'>
            <h1>Struggling to cook that meal?</h1>
            <h2>Well you're one search away.</h2>
            <Stack alignItems='center' direction='row'><TextField label='Search..' className='text-field' onChange={(e)=>{setInput(e.target.value.toLowerCase())}} value={input}/><img onClick={fetchData}src={searchIcon} alt='icon'/></Stack>
        </Box>
        
    )
}
export default Search