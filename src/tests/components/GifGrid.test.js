import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import React from 'react';
import '@testing-library/jest-dom';
import { useFetchGifs } from './../../hooks/useFetchGifs';
jest.mock('./../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', ()=>{

   const category = 'One punch';
   
   
   test('deberia cargar correctamente', ()=> {
      
      useFetchGifs.mockReturnValue({
         data: [],
         loading: true
      })
   
      const wrapper = shallow( <GifGrid category={category}/>) 
      expect( wrapper ).toMatchSnapshot();

   })
   test('deberia mostrar items cuando se cagan imágenes pruebas de useFetchGifs', ()=> { 

      const gifs = [{
         id: 'ABC',
         url: 'https://localhost/cualquier/lugar.jpg',
         title: 'un titulo cualquiera'
      }];

      useFetchGifs.mockReturnValue({
         data: gifs,
         loading: false
      });
      
      const wrapper = shallow( <GifGrid category={category}/>)
      
      // expect( wrapper ).toMatchSnapshot();
      expect( wrapper.find('p').exists()).toBe(false);
      expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

      
      
   }) 

})