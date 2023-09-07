import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const Grafica = ({ porcentaje }) => {
    const chartRef = useRef(null);
    let myChart = null;

    useEffect(() => {
        if (chartRef.current) {
            if (myChart) {
                myChart.destroy();
            }
            myChart = new Chart(chartRef.current, {
                type: 'pie',
                data: {
                    labels: ['Masa Grasa', 'Masa Osea',  'Masa Residual', 'Masa Muscular',],
                    datasets: [{
                        data: [ porcentaje.bodyfat, porcentaje.boneMass, porcentaje.residualmass, porcentaje.muscleMass],
                        backgroundColor: ['blue', 'red', 'black', 'green'],
                    }],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }
        return () => {
            if (myChart) {
                myChart.destroy();
            }
        };
    }, [porcentaje.bodyfat, porcentaje.boneMass, porcentaje.residualmass, porcentaje.muscleMass]);

    return (
        <div style={{ width: '100%', height: 'auto' }}>
            <center>
                <h1>Gráfica</h1>
            </center>
            <canvas ref={chartRef} id="pieChart"></canvas>
        </div>
    );
};