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
                    labels: ['Masa Ósea', 'Masa Grasa', 'Masa Muscular', 'Masa Residual'],
                    datasets: [{
                        data: [porcentaje.boneMass, porcentaje.bodyfat, porcentaje.muscleMass, porcentaje.residualmass],
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
    }, [porcentaje.boneMass, porcentaje.bodyfat, porcentaje.muscleMass, porcentaje.residualmass]);

    return (
        <div style={{ width: '100%', height: 'auto', backgroundColor: 'primary' }}>
            <center>
                <h1>Gráfica</h1>
            </center>
            <canvas ref={chartRef} id="pieChart"></canvas>
        </div>
    );
};