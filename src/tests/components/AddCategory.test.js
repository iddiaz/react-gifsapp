
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import { React } from 'react';
import '@testing-library/jest-dom';

describe('Pruebas en <AddCategory />', () => {

   const setCategories = jest.fn();

   let wrapper = shallow(<AddCategory setCategories= {setCategories} />);
   
   beforeEach( ()=>{
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory setCategories= {setCategories} />);

   })


   test('Debe mostrar el componente correctamente', () => {
      expect( wrapper ).toMatchSnapshot();
   })
   
   test('Debe cambiar la caja de texto', () => {
      const input = wrapper.find('input'); 
      const value = 'hola mundo';
      input.simulate('change', {
         target: {
            value
         } 
      });

      expect( wrapper.find('p').text().trim() ).toBe(value); 
   })


   test('No debe postear la informacion on submit', ()=>{
      wrapper.find('form').simulate('submit', { preventDefault: ()=>{} });

      expect( setCategories ).not.toHaveBeenCalled(); 

   })

   test('Debe llamar el setCategories y limpiar la caja de texto', ()=>{      
      
      const value = 'Hola';
      
      //1 simula el imputChange
      wrapper.find('input').simulate('change', {
         target: {
            value
         }
      } )

      //2 SImula el submit
      wrapper.find('form').simulate('submit', {
         preventDefault: ()=>{} 
      })

      //3 setCategories se debe haber llamado
      expect( setCategories ).toHaveBeenCalled();
      
      //4 el valor del input debe estar ''
      expect( wrapper.find('input').prop('value') ).toBe(''); 


   })
   
})