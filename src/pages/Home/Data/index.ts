import { ApexOptions } from "apexcharts";
import { getVariableColor } from "../Functions";



export const options1 =[
    {value: 'Select Your Account', label: 'Select Your Account'},
    {value: '5521000120354', label: '5521000120354'},
    {value: '5521000125145', label: '5521000125145'},
    {value: '5521000129665', label: '5521000129665'}
]

export const options2 =[
    {value: 'Enter Amount in USD', label: 'Enter Amount in USD'},
    {value: '100', label: '100'},
    {value: '200', label: '200'},
    {value: '500', label: '500'}
]


const optionsChart2: ApexOptions =
{
        colors: ['#008FFB'],
        chart: {
            toolbar: {
                show: false,
            },
        },
        markers: {
        size: 6,
        colors: '#FFFFFF',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 0,
        shape: 'circle', // Ensure shape is of type ApexMarkerShape
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        },
        xaxis: {
        categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
        },
        stroke: {
        width: 3,
        },
        grid: {
        show: true,
        strokeDashArray: 7,
        },
}

export const chart2 = {
    options: optionsChart2,
    series: [
        {
        name: 'Sales',
        data: [10, 82, 75, 68, 47, 60, 49, 91, 108],
        },
    ],
};