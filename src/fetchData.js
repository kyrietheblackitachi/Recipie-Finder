export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a89c01df2msh1ef1d4936ffde17p1a03d4jsna2fdc86d2f1b',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};
export const recipeSearch=async(url,options)=>{
    const response = await fetch(url,options)
    const data = await response.json()
    return data
}
