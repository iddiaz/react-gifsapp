import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"
import { React } from 'react';
import '@testing-library/jest-dom'

describe('Prubeas en <GifGridItem />', ()=> {

   const title = 'Un titulo';
   const url = 'http://localhost/algo.jpg'

   const wrapper = shallow( <GifGridItem title={title} url={url} /> )

   test('Debe mostrar el componente corretamente', () => {

      expect( wrapper ).toMatchSnapshot();      
      
   })


   test('Debe tener un párrafo con el titulo', () => {

      const p = wrapper.find('p');

      expect (p.text().trim()).toBe(title);
      
   })

   test('Debe tener ula imagen igual al url y al de props', () => {

      const img = wrapper.find('img');

      // console.log(img.html());
      // console.log(img.props()); 
      // console.log(img.prop('src'));
      
      expect( img.prop('src') ).toBe( url );
      expect( img.prop('alt') ).toBe( title );
      
   })

   test('Debe tener animate__bounce', () => {

      const div = wrapper.find('div');  
      
      console.log(div.props()); 

      const className = div.prop('className');
      
      expect( className.includes('animate__bounce') ).toBe(true) 

      
   })


})