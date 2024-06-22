import { Card, Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import CountUp from "react-countup";

import { getVariableColor } from "../../utilities/root-var";
import { Link } from "react-router-dom";

export default function Impressions() {
    const colors = [getVariableColor().primary, getVariableColor().info];

    const chart1 = {
      options: {
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
    };

    return (
        <>
            <Col lg="3" md="6">
                <Card className="card-block card-stretch card-height">
                    <Card.Body>
                        <div className="d-flex align-items-start justify-content-between mb-2">
                            <p className="mb-0 text-dark">Gross Volume</p>
                            <Link
                                className="badge rounded-pill bg-soft-primary"
                                to="#javascript:void(0);"
                            >
                            View
                            </Link>
                        </div>
                        <div className="mb-3">
                            <h2 className="counter">
                            $
                            <CountUp
                                start={0}
                                end={199556}
                                duration={10}
                                useEasing={true}
                                separator=","
                            />
                            </h2>
                            <small>Last updated 1 hour ago.</small>
                        </div>
                        <div>
                            <Chart
                            options={chart1.options}
                            series={chart1.series}
                            type="bar"
                            height="100%"
                            ></Chart>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}