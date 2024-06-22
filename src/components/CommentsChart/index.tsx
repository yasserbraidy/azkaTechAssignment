import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function CommentsChart() {
    const optionsChart2: ApexOptions = {
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
        shape: "circle", // Ensure shape is of type ApexMarkerShape
        radius: 2,
        offsetX: 0,
        offsetY: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
            "Oct",
            "Nov",
          "Dec"
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
    };
    const chart2 = {
      options: optionsChart2,
      series: [
        {
          name: "Sales",
          data: [10, 82, 75, 68, 47, 60, 49, 91, 108, 112, 89, 14],
        },
      ],
    };
    return (
      <>
        <Col lg="6" md="12">
          <Card className="card-block card-stretch card-height">
            <Card.Header>
              <div className=" d-flex justify-content-between  flex-wrap">
                <h4 className="card-title">Comments Per Month</h4>

              </div>
            </Card.Header>
            <Card.Body>
              <Chart
                options={chart2.options}
                series={chart2.series}
                type="line"
                height="100%"
                className="dashboard-line-chart"
              ></Chart>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
}