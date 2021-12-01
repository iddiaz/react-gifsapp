// import React, {useState, useEffect } from 'react'
import React from 'react'
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from './../hooks/useFetchGifs';
import { PropTypes } from 'prop-types';

export const GifGrid = ({category}) => {


   const {data:images , loading } = useFetchGifs( category );




   return (
      <>
         <h3> {category} </h3>
         <div className="card-grid">

            { loading && <p className="animate__animated animate__flash">Loading</p>  }
            
               {
                  images.map(( img) => (
                     <GifGridItem 
                        key={img.id} 
                        // img={img} 
                        {...img}
                        />
                  ))
               }            
         </div>      
      </>
   )
}

GifGrid.propTypes = {
   category: PropTypes.string.isRequired
}
