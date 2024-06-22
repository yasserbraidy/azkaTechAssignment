import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import IPost from "../../services/entities/IPost";
import usePostsChart from "./hooks";
interface IPostChart{
    posts: Array<IPost>;
}
export default function PostChart(props: IPostChart) {
    const {chart} = usePostsChart(props.posts)

    
  return (
    <>
      <Col lg="6" md="12">
        <Card className="card-block card-stretch card-height">
          <Card.Header>
            <div className=" d-flex justify-content-between  flex-wrap">
              <h4 className="card-title">Posts Per Month "Random date"</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <Chart
              options={chart.options}
              series={chart.series}
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