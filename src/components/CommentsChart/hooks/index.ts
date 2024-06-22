import { ApexOptions } from "apexcharts";
import IPost from "../../../services/entities/IPost";

export default function usePostsChart(posts: Array<IPost>) {
        const countPostsPerMonth = (posts: Array<IPost>) => {
        const postCounts = new Array(12).fill(0);
        posts.forEach(post => {
            const postDate = new Date(post.date || "");
            const month = postDate.getMonth(); 
            postCounts[month]++;
        });
        return postCounts;
    };

    // Get post counts per month
    const postCountsPerMonth = countPostsPerMonth(posts);
    const months = ["Jan","Feb","Mar","Apr", "May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const options: ApexOptions = {
        colors: ["#008FFB"],
        chart: {
            toolbar: {
                show: false,
            },
        },
        markers: {
            size: 6,
            colors: "#FFFFFF",
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 0,
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
        },
        xaxis: {
        categories: months,
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
    };
    const chart = {
        options: options,
        series: [
        {
            name: "Posts",
            data: postCountsPerMonth,
        },
        ],
    };
    return {
        months, options, chart
    }
}