import { ApexOptions } from "apexcharts";
import { getVariableColor } from "../Functions";






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