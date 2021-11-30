
export const getGifs = async( category ) => {
   console.log('category??', category);
   const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&api_key=P88sYnaTcNSBWVQPiloP6uBwbLkJt4sg`;
   const resp = await fetch( url );
   const {data} = await resp.json();

   const gifs = data.map( img => {
      return {
         id: img.id,
         title: img.title,
         url: img.images.downsized_medium.url
      }
   })

   console.log(gifs);
   return gifs;
}