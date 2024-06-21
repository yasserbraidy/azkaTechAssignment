import { ApexOptions } from "apexcharts";
import { getVariableColor } from "../Functions";

export const options = [
    {value: 'Past 30 Days', label: 'Past 30 Days'},
    {value: 'Past 60 Days', label: 'Past 60 Days'},
    {value: 'Past 90 Days', label: 'Past 90 Days'},
    {value: 'Past 1 year', label: 'Past 1 year'},
    {value: 'Past 2 year', label: 'Past 2 year'}
]

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

const colors = [getVariableColor().primary, getVariableColor().info];

export const chart1 = {      
    options:{
        chart: {
            stacked: true,
            toolbar: {
            show: false,
            },
        },
    colors: colors,
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "28%",
            endingShape: "rounded",
            borderRadius: 3,
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 3,
        colors: ["transparent"],
    },
    grid: {
        show: true,
        strokeDashArray: 7,
    },
    xaxis: {
        categories: ["S", "M", "T", "W", "T", "F", "S"],
        labels: {
            minHeight: 20,
            maxHeight: 20,
            style: {
            colors: "#8A92A6",
            },
        },
    },
    yaxis: {
        title: {
            text: "",
        },
        labels: {
            minWidth: 20,
            maxWidth: 20,
            style: {
            colors: "#8A92A6",
            },
        },
    },
    fill: {
        opacity: 1,
    },
    tooltip: {
        y: {
            formatter: function (val: number) {
                return "$ " + val + " thousands";
            },
        },
    },
    responsive: [
        {
            breakpoint: 1025,
            options: {
            chart: {
                height: 130,
            },
            },
        },
        ],
    },
    series: [
        {
            name: "Successful deals",
            data: [30, 50, 35, 60, 40, 60, 60],
        },
        {
            name: "Failed deals",
            data: [40, 50, 55, 50, 30, 80, 30],
        },
    ],
}
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