import { getGifs } from './../../../helpers/getGifs';


describe('pruebas con getGifs Fetch',()=>{

   test('debe traer 10 elementos', async()=>{
      
      const gifs = await getGifs('One Punch');

      expect( gifs.length ).toBe(10);

   })

   test('debe ser un array vacio', async()=>{
      
      const gifs = await getGifs('');
      console.log(gifs);

      expect( gifs.length ).toBe(0); 

   })

})