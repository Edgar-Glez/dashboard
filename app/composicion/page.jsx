'use client'
import { IBM_Plex_Mono } from 'next/font/google'
import { Archivo_Narrow } from 'next/font/google'
import { useState } from 'react'
import chartjs from 'chart.js'
// import Tabla from '/components/Table'
import {Grafica} from '@/components/Grafica'
import { Table } from '@/components/Table'



export const Corporal =() =>{

    const [input, setInput] = useState({
        gender: "",
        age: 0,
        weight: 0,
        height: 0,
        bicep: 0,
        tricep: 0,
        subscapular: 0,
        suprailiac: 0,
        abdominal: 0,
        femur: 0,
        bystoloid: 0,
    });

        const [porcentaje, setPorcentaje] = useState({
            bodyfat: 0,
            residualmass: 0,
            muscleMass: 0,
            boneMass: 0,

        });
    
    const [densidad, setDensidad] = useState('');
    
    const [datos, setDatos] = useState(
        {
            masaOsea: null,
            masaGrasa: null,
            masaMusculo: null,
            masaresidual: null
        }
    );

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
      
        let parsedValue = value;
      
        if (type === 'number' && value.trim() !== '') {
          parsedValue = parseFloat(value);
        }
      
        setInput((prevValues) => ({
          ...prevValues,
          [name]: parsedValue,
        }));
    };   
    

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const X1 = parseFloat(parseFloat(input.bicep) + parseFloat(input.tricep) + parseFloat(input.suprailiac) + parseFloat(input.subscapular));
        console.log(X1);
        const density = input.gender === "Hombre" ? (1.1765 - 0.0744*(Math.log10(X1))) : (1.1567 - 0.0717*(Math.log10(X1)));;
        setDensidad(density);
        const GC = (495/density)-450
        const grasa =(GC*(input.weight)*0.01)
        const osea = ((((input.height)**2)*((input.femur)/100)*(input.bystoloid/100)*400)**0.712)*3.02
        const oseaporcentaje = 100/(input.weight)*osea
        const mResidual = input.gender === "Hombre" ? input.weight*0.24 : input.weight*0.21;
        const residual = 100/(input.weight)*mResidual
        const musculoporcentaje = (100 - (oseaporcentaje + GC + residual))
        const musculokg = input.weight-(osea+grasa+mResidual)
        // setgrasaPorcentaje(GC)
        // setGrasakg(grasa)
        // setMasa(osea)
        // setmasaOseaPorcentaje(oseaporcentaje)
        // setmasaResidualkg(mResidual)
        // setmasaResidualPorcentaje(residual)
        // setmasaMuscularPorcentaje(musculoporcentaje)
        // setmasaMuscularkg(musculokg)
        //const { masa_osea, grasa, musculo, residual}= informacion;
        setPorcentaje({bodyfat: GC.toFixed(3), residualmass: residual.toFixed(3), muscleMass: musculoporcentaje.toFixed(3), boneMass: oseaporcentaje.toFixed(3)});
        setDatos({masaOsea: osea.toFixed(3), masaGrasa: grasa.toFixed(3),  masaMusculo:musculokg.toFixed(3), masaresidual:mResidual.toFixed(3)})
        console.log(datos.masaOsea);
        console.log(datos.masaGrasa);
        console.log(datos.masaMusculo);
        console.log(datos.masaresidual);
    }
    return(
    <div className=' pl-14 w-full'>
        
        <div className='pb-10'>
        
        <h1 className="text-center text-white">Composicion Corporal</h1>
        <form onSubmit={handleSubmit} className=''> 
        
        <h3 className='text-white'>Genero</h3>
        <select className="text-white " name='gender' value={input.gender} onChange={handleInputChange}  >
            <option className='px-10' value="Hombre">Hombre</option>
            <option className='px-44' value="Mujer">Mujer</option>
        </select>

        <h3 className='text-white'>Edad</h3>
        <input type='number' className='rounded-md' name='age' value={input.age} onChange={handleInputChange}/> 
        <h3 className='text-white'>Peso</h3>
        <input type='number' className='rounded-md'  name='weight' value={input.weight} onChange={handleInputChange} /> 

        <h3 className='text-white'>Altura</h3>
        <input type='number' className='rounded-md'  name='height' value={input.height} onChange={handleInputChange} /> 


        <h3 className='text-white'>Bicipital</h3>
        <input type='text' className='rounded-md'  name='bicep' value={input.bicep} onChange={handleInputChange}/> 

        <h3 className='text-white'>Tricipital</h3>
        <input type='text' className='rounded-md'  name='tricep' value={input.tricep} onChange={handleInputChange} /> 

        <h3 className='text-white'>Subescapular</h3>
        <input type='text' className='rounded-md'  name='subscapular' value={input.subscapular} onChange={handleInputChange} /> 

        <h3 className='text-white'>Supraileaco</h3>
        <input type='text' className='rounded-md'  name='suprailiac' value={input.suprailiac} onChange={handleInputChange} /> 
        <h3 className='text-white'>Femur</h3>
        <input type='number' className='rounded-md'  name='femur' value={input.femur} onChange={handleInputChange} /> 
        <h3 className='text-white'>Biestiloideo</h3>
        <input className='rounded-md'  type='number' name='bystoloid' value={input.bystoloid} onChange={handleInputChange}/> 
        <br/>
        <div className='h-10'/>
        <input className='border-transparent bg-[#3282B8] text-white rounded-lg w-[30%] h-9' type='submit' value={"Enviar"}/>

        </form>
        </div>
        <div>
            <div>{densidad && <p className='text-white'> La densidad es igual a: {densidad} </p>}</div>
            <div>{porcentaje.bodyfat && <p className='text-white'> La grasa corporal es igual a: {datos.masaGrasa} </p>}</div>
            {/* <div>{masa && <p className='text-white'> La Masa osea es igual a: {datos.masaOsea} </p>}</div> */}
            {/* <div>{masaResidualkg && <p className='text-white'> La grasa residual es igual a: {datos.residual} </p>}</div> */}
        </div>
        <div className='text-white pt-[3%]'>
            <Table datos={datos} porcentaje={porcentaje}/>
            {/* <Tabla datos={datos} porcentaje={porcentaje} /> */}
            
            {datos && <Grafica porcentaje={porcentaje} /> }
        </div>

       
    </div>)
}
export default Corporal
//altura 1.685 
//peso = 66.4 
// edad= 21
// femur 7.25, 
// biestiloideo 4.75, 
// bicep 3.5, 
// tricep 10.5 
//  subes 10.5
// supra 11.5
// biesti 4.75



// Componente,   %    , Kg
// Masa Grasa   23.63   15.6
// Masa Osea    12.0    7.97
// Masa Residual 21     13.94
// Masa Muscular  43.5    28.88