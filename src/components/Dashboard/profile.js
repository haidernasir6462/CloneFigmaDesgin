import React from "react";
import user from "../../assests/images/user.jpg";
import { Button, Card, Row, Col, Table } from "react-bootstrap";

function Profile() {
  return (
    <div className=" container-xl">
      <Row>
        <Col xs="12" sm="12" md="3" lg="3">
          <Card className="card-user shadow">
            <Card.Body>
              <div className="author text-center">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="avatar border-gray rounded-pill"
                    src={user}
                  ></img>
                  <h5 className="title">Elon Musk</h5>
                </a>
                <p className="description">@michael24</p>
              </div>
              <Table hover striped responsive="lg" borderless="false">
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>dummy@gmail.com</td>
                  </tr>
                  <tr>
                    <td>DOB</td>
                    <td>11/02/2021</td>
                  </tr>
                  <tr>
                    <td>Countery</td>
                    <td>USA</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col xs="12" sm="12" md="6" lg="6">
          <Card className="card-user shadow">
            <Card.Body>
              <div className="text-center">
                <h5>Elon Musk Registery</h5>
              </div>
              <div>
                <Table hover striped responsive="lg" borderless="false">
                  <thead
                    style={{
                      backgroundColor: "rgb(0,233,255)",
                      background:
                        "linear-gradient(5deg, rgba(0,233,255,1) 50%, rgba(6,232,195,1) 73%",
                    }}
                  >
                    <tr className="text-white">
                      <th>Name</th>
                      <th>Address</th>
                      <th>view/Hide</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Elon Musk</td>
                      <td>lorem ipsum dotor expel router </td>
                      <td>hide</td>
                    </tr>
                    <tr>
                      <td>Elon Musk</td>
                      <td>lorem ipsum dotor colok </td>
                      <td>hide</td>
                    </tr>
                    <tr>
                      <td>Elon Musk</td>
                      <td>lorem ipsum dotor colok </td>
                      <td>hide</td>
                    </tr>
                    <tr>
                      <td>Elon Musk</td>
                      <td>lorem ipsum dotor expel router </td>
                      <td>hide</td>
                    </tr>
                    <tr>
                      <td>Elon Musk</td>
                      <td>lorem ipsum dotor colok </td>
                      <td>hide</td>
                    </tr>
                    <tr>
                      <td>Elon Musk</td>
                      <td>lorem ipsum dotor colok </td>
                      <td>hide</td>
                    </tr>
                    <tr>
                      <td>Elon Musk</td>
                      <td>lorem ipsum dotor expel router </td>
                      <td>hide</td>
                    </tr>
                    <tr>
                      <td>Elon Musk</td>
                      <td>lorem ipsum dotor colok </td>
                      <td>hide</td>
                    </tr>
                  </tbody>
                </Table>
                <Button variant="success" className="w-100">
                  View More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs="12" sm="12" md="3" lg="3">
          <Card className="card-user shadow">
            <Card.Body>
              <div className="text-center">
                <h5>My special days</h5>
              </div>
              <div>
                <Table hover striped responsive="lg" borderless="false">
                  <thead
                    style={{
                      backgroundColor: "rgb(0,233,255)",
                      background:
                        "linear-gradient(5deg, rgba(0,233,255,1) 50%, rgba(6,232,195,1) 73%",
                    }}
                  >
                    <tr className="text-white">
                      <th>Name</th>
                      <th>Date</th>
                      <th>Notify me</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Birthday</td>
                      <td>15/11</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input bg-success"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            placeholder="ON"
                            for="flexSwitchCheckDefault"
                          ></label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Birthday</td>
                      <td>15/11</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input bg-success"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            placeholder="ON"
                            for="flexSwitchCheckDefault"
                          ></label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Birthday</td>
                      <td>15/11</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input bg-success"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            placeholder="ON"
                            for="flexSwitchCheckDefault"
                          ></label>
                        </div>
                      </td>{" "}
                    </tr>
                    <tr>
                      <td>Birthday</td>
                      <td>15/11</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input bg-success"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            placeholder="ON"
                            for="flexSwitchCheckDefault"
                          ></label>
                        </div>
                      </td>{" "}
                    </tr>
                  </tbody>
                </Table>
                <Button variant="secondary" className="w-100">
                  View More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
