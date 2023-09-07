import { useEffect } from "react"

export const Table = ({datos,porcentaje}) => {
    const {boneMass, bodyfat, muscleMass, residualmass} = datos
    const {bodyFatPercent, residualMassPercent, muscleMassPercent, boneMassPercent} = porcentaje
    

    // useEffect(() => {
    //     setChartData({
    //         labels: ['Masa Ósea', 'Masa Grasa', 'Masa Muscular', 'Masa Residual'],
    //         datas: [
    //             porcentaje.boneMass,
    //             porcentaje.bodyfat,
    //             porcentaje.muscleMass,
    //             porcentaje.residualmass
    //         ],
    //     });
    // }, [porcentaje])

    return (
        <div>
            <h1 className="text-2xl">Composicion Corporal</h1>
            <table className="table-auto" >
                <thead className='text-white'>
                    <tr>
                        <th>Componente</th>
                        <th>%</th>
                        <th>Kg</th>
                    </tr>
                </thead>
                <tbody >
                        <tr className='border-b-2 border-b-white'><td>Masa Grasa</td><td className=' border-x-transparent border-x-8'>{(porcentaje.bodyfat)}%</td><td className='border-x-transparent border-x-8'>{(datos.masaGrasa)} kg</td></tr>
                    <tr className='border-b-2 border-b-white'><td>Masa Osea</td><td className='border-x-transparent border-r-8'>{porcentaje.boneMass}%</td><td className='border-x-transparent border-x-8'>{datos.masaOsea} kg</td></tr>
                    <tr className='border-b-2 border-b-white'><td>Masa Residual</td><td className='border-x-transparent border-x-8'>{porcentaje.residualmass}%</td><td className='border-x-transparent border-x-8'>{datos.masaresidual} kg</td></tr>
                    <tr className='border-b-2 border-b-white'><td>Masa Muscular</td><td className='border-x-transparent border-x-8'>{porcentaje.muscleMass}%</td><td className='border-x-transparent border-x-8'>{datos.masaMusculo} kg</td></tr>
                </tbody>
            </table>
        </div>
    )

}