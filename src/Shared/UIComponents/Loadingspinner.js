import React from 'react';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Watch } from  'react-loader-spinner'


const Loadingspinner =() => {

    return <Watch 
    heigth="100"
    width="100"
    color='#FFFFFF'
    ariaLabel='loading' 
    background= 'rgba(255, 255, 255, 0.9)'
    display='flex'
    justify-content= 'center'
    align-items= 'center'
    align-self='center'
    />
}

export default Loadingspinner;