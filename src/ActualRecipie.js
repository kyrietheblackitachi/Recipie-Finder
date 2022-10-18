import React from 'react'
import {Box,Card,List,ListItem,Grid} from '@mui/material'
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material'
const ActualRecipie = ({recipe,index}) => {
    const hits=recipe.hits
    const tableData=[
        {
        "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1817.5826914,
            "unit": "kcal"
        },
        "FAT": {
            "label": "Fat",
            "quantity": 27.259347217000002,
            "unit": "g"
        },
        "FASAT": {
            "label": "Saturated",
            "quantity": 15.407163752200002,
            "unit": "g"
        },
        "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
        },
        "FAMS": {
            "label": "Monounsaturated",
            "quantity": 0.3094388555,
            "unit": "g"
        },
        "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 1.4927398798,
            "unit": "g"
        },
        "CHOCDF": {
            "label": "Carbs",
            "quantity": 352.881531591,
            "unit": "g"
        },
        "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 0,
            "unit": "g"
        },
        "FIBTG": {
            "label": "Fiber",
            "quantity": 14.625439770000002,
            "unit": "g"
        },
        "SUGAR": {
            "label": "Sugars",
            "quantity": 135.452360282,
            "unit": "g"
        },
        "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 99.8,
            "unit": "g"
        },
        "PROCNT": {
            "label": "Protein",
            "quantity": 55.122690201000005,
            "unit": "g"
        },
        "CHOLE": {
            "label": "Cholesterol",
            "quantity": 60.32778521000001,
            "unit": "mg"
        },
        "NA": {
            "label": "Sodium",
            "quantity": 2768.363406479,
            "unit": "mg"
        },
        "CA": {
            "label": "Calcium",
            "quantity": 851.984812279,
            "unit": "mg"
        },
        "MG": {
            "label": "Magnesium",
            "quantity": 90.6951607,
            "unit": "mg"
        },
        "K": {
            "label": "Potassium",
            "quantity": 989.5167076,
            "unit": "mg"
        },
        "FE": {
            "label": "Iron",
            "quantity": 5.219942775,
            "unit": "mg"
        },
        "ZN": {
            "label": "Zinc",
            "quantity": 0.8376700810000001,
            "unit": "mg"
        },
        "P": {
            "label": "Phosphorus",
            "quantity": 1160.5670080999998,
            "unit": "mg"
        },
        "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 9.071847400000001,
            "unit": "µg"
        },
        "VITC": {
            "label": "Vitamin C",
            "quantity": 186.88005644000003,
            "unit": "mg"
        },
        "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.44659032139999993,
            "unit": "mg"
        },
        "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.8562291768999999,
            "unit": "mg"
        },
        "NIA": {
            "label": "Niacin (B3)",
            "quantity": 5.0977967494000005,
            "unit": "mg"
        },
        "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.2324058636,
            "unit": "mg"
        },
        "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 270.9107029,
            "unit": "µg"
        },
        "FOLFD": {
            "label": "Folate (food)",
            "quantity": 87.31070290000001,
            "unit": "µg"
        },
        "FOLAC": {
            "label": "Folic acid",
            "quantity": 108.8,
            "unit": "µg"
        },
        "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.204,
            "unit": "µg"
        },
        "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
        },
        "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 1.3154178730000001,
            "unit": "mg"
        },
        "VITK1": {
            "label": "Vitamin K",
            "quantity": 9.979032140000003,
            "unit": "µg"
        },
        "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
        },
        "WATER": {
            "label": "Water",
            "quantity": 520.9970552890001,
            "unit": "g"
        }
        }
    ]
   const obj =tableData[0]
    const result=Object.keys(obj).map((key) => [obj[key]]);
    console.log(result)

  return (
    <Box className='actual-recipe'>
      
        {/* <h2>Ingredients</h2>
        <Box>{hits[index].recipe.ingredientLines.map((labels)=>{
            return<h3>{labels}</h3>
        })}
        </Box> */}
        <Card className='ingredient'><h2>Ingredients</h2></Card>
        <Grid container className='ingredient-container' rowSpacing={3} columnSpacing={1}>{hits[index].recipe.ingredients.map((labels)=>{
            return(
            <Grid item   className='ingredient-item' xs={6} sm={4} md={3} key={index}><Card className='ingredient-card'>
            <img src={labels.image} alt='label'/>
            <h3>{labels.text}</h3>
            <h3>{labels.weight}</h3>
            <h3>{labels.foodCategory}</h3>
            </Card></Grid>)
        })}
        </Grid>

        <Card className='info-box'>
            <Box>
            <Card className='diet-label'><h2>Diet Label</h2></Card>
            {hits[index].recipe.dietLabels.map((labels)=>{
                return(<List><ListItem><h3>{labels}</h3></ListItem></List>) 
            })}
            </Box>
            
            <Box>
                <Card className='health-label'><h2>Health Label</h2></Card>
                {hits[index].recipe.healthLabels.map((labels)=>{
                return(<List><ListItem><h3>{labels}</h3></ListItem></List>)
            })}
            </Box>
            
            <Box>
                <Card className='caution'><h2>Caution</h2></Card>
                {hits[index].recipe.cautions.map((labels)=>{
                return (<List><ListItem><h3>{labels}</h3></ListItem></List>)
            })}
            </Box>
        </Card>
        <Card  className='type-info'>
            <Box>
                <Card  className='calorie'><h4>Calories</h4></Card><h3>{hits[index].recipe.calories}</h3>
                <Card  className='weight'><h4>Total Weight</h4></Card><h3>{hits[index].recipe.totalWeight}</h3>
            </Box>
            <Box>
                <Card className='cuisine'><h3>Cuisine Type</h3></Card>
                {hits[index].recipe.cuisineType.map((type)=>{
                return<h3>{type}</h3>
            })}
            </Box>
            <Box>
                <Card className='meal'><h3>Meal Type</h3></Card>
                {hits[index].recipe.mealType.map((type)=>{
                return<h3>{type}</h3>
            })}
            </Box>
            <Box>
                <Card className='dish'><h3>Dish Type</h3></Card>
                {hits[index].recipe.dishType.map((type,index)=>{
                return<h3 key={index}>{type}</h3>
            })}
            </Box>
        </Card>

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>LABEL</TableCell>
                        <TableCell>QUANTITY</TableCell>
                        <TableCell>UNIT</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {result.map((data)=>(
                        
                        <TableRow key={data[0].label}
                        >
                            <TableCell><h3>{data[0].label}</h3></TableCell>
                            <TableCell><h3>{data[0].quantity}</h3></TableCell>
                            <TableCell><h3>{data[0].unit}</h3></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
    )
}

export default ActualRecipie