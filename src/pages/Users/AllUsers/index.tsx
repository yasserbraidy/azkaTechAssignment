import { Col, Table, Card, Row, Image } from "react-bootstrap";
import useAllUsersHooks from "./hooks";
import Loader3 from "../../../components/Loader";
import ErrorAlert from "../../../components/Error";
import { useState } from "react";
import Image1 from "../../../assets/images/table/5.png";
import { Link } from "react-router-dom";
export default function Users() {
  const { users, loader, fetchingError} = useAllUsersHooks();
    return (
      <>
        {loader && <Loader3 />}
        {!loader && fetchingError.isError && <ErrorAlert {...fetchingError} />}
        {!loader && !fetchingError.isError && (
            <Row>
                <Col lg="12">
                    <Card>
                    <Card.Body>
                        <h5 className="mb-0">User List</h5>
                        <div className="simple-table table-responsive mt-4">
                        <Table
                            className="mb-0"
                            id="datatable"
                            data-toggle="data-table"
                        >
                            <thead>
                            <tr className="bg-white">
                                <th scope="col">Profiles</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Email</th>
                                <th scope="col">Website</th>
                                <th scope="col">Company</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((item, index) => {
                                return (
                                  <tr key={index}>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <Image
                                          className="rounded img-fluid w-25 me-3"
                                          src={Image1}
                                          alt=""
                                        />
                                        <div className="media-support-info">
                                          <h6 className="mb-0">
                                            <Link to={`/users/${item.id}`}>{item.name}</Link>
                                          </h6>
                                          <p className="mb-0">
                                            @{item.username}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-dark">{item.phone}</td>
                                    <td className="text-dark">{item.email}</td>
                                    <td className="text-dark">
                                      {item.website}
                                    </td>
                                    <td className="text-dark">
                                      {item.company.name}
                                    </td>
                                  </tr>
                                );
                            })}
                            </tbody>
                        </Table>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>)
            }
      </>
    );
}