import "./App.css";

import setIcon from "./img/setting1.svg";
import arrow from "./img/Shape.svg";
import tip from "./img/tip.svg";
import menuu from "./img/menu.svg";
import { store } from "./redux/store.js";
import { MainMenu } from "./components/mainMenu";
import { AddMenu } from "./components/addMenu";
import { addCard } from "./components/addCard";

import {
  Button,
  Modal,
  Input,
  Checkbox,
  Select,
  Tooltip,
  Col,
  Row,
  Dropdown,
  Menu,
  Space,
} from "antd";
import { useState } from "react";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    addCard();
    console.log(store.getState().cards[5]);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const users = [];

  for (let i = 0; i < store.getState().users.length; i++) {
    users.push(<Option key={store.getState().users[i]}></Option>);
  }
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <p>Edit</p>,
        },
        {
          key: "2",
          label: <p>Set as Default</p>,
        },
        {
          key: "3",
          label: <p>Delete</p>,
        },
      ]}
    />
  );
  return (
    <div className="window">
      <div className="container">
        <MainMenu />
        <AddMenu />
      </div>
      <div className="mainCont">
        <header className="header">
          <img src={setIcon} className="setImg"></img>
          <p className="setP">Settings</p>
          <img src={arrow} className="arrow"></img>
          <p className="vacMP">Vacation Manager</p>
        </header>
        <div className="location">
          <h3>Locations</h3>
          <p>
            Create new users or update the existng users. You can then set their
            permissons here too.{" "}
          </p>
          <Button
            type="primary"
            style={{
              position: "absolute",
              marginLeft: "794px",
              marginTop: "-61px",
              fontSize: "13px",
              width: "152px",
              height: "40px",
              borderRadius: "6px",
            }}
            onClick={showModal}
          >
            Create Location
          </Button>
          <Modal
            title="Create Location"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Create"
          >
            <div>
              <p
                style={{
                  position: "absolute",
                  zIndex: "1",
                  fontWeight: "600",
                  fontSize: "11px",
                  marginLeft: "25px",
                }}
              >
                Name
              </p>
              <p
                style={{
                  position: "absolute",
                  color: "#F24445",
                  marginLeft: "57px",
                }}
              >
                *
              </p>
              <Input
                placeholder="Location Name"
                style={{
                  height: "38px",
                  width: "470px",
                  marginTop: "9px",
                  marginLeft: "13px",
                  marginBottom: "23px",
                }}
                onChange={(ev) => {
                  store.dispatch({
                    type: "TEMP",
                    temp: ev.target.value,
                  });
                  console.log(store.getState().temp);
                }}
              />
            </div>
            <div className="workWC">
              <p
                style={{
                  marginLeft: "13px",
                  fontWeight: "600",
                  color: "#1E212A",
                }}
              >
                Workweek
              </p>
              <p style={{ color: "#F24445" }}>*</p>
              <Checkbox.Group
                style={{
                  width: "100%",
                  marginLeft: "65px",
                  fontSize: "13px",
                }}
                onChange={onChange}
              >
                <Row>
                  <Col span={9} style={{ marginBottom: "6px" }}>
                    <Checkbox value="Sunday">Sunday</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="Monday">Monday</Checkbox>
                  </Col>
                  <Col span={1}>
                    <Checkbox value="Tuesday">Tuesday</Checkbox>
                  </Col>
                  <Col span={9}>
                    <Checkbox value="Wednesday">Wednesday</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="Thursday">Thursday</Checkbox>
                  </Col>
                  <Col span={4} style={{ marginBottom: "5px" }}>
                    <Checkbox value="Friday">Friday</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="Saturday">Saturday</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </div>
            <div>
              <p
                style={{
                  position: "absolute",
                  zIndex: "1",
                  fontWeight: "600",
                  fontSize: "11px",
                  marginLeft: "27px",
                  marginTop: "19px",
                }}
              >
                Leave Quota Reset Based on
              </p>
              <Select
                defaultValue="Accounting year"
                style={{
                  height: "42px",
                  width: "440px",
                  marginTop: "30px",
                  marginLeft: "14px",
                  marginBottom: "20px",
                  marginRight: "15px",
                }}
                onChange={handleChange}
              >
                <Option value="Accounting year">Accounting year</Option>
                <Option value="User Employment Date">
                  User Employment Date
                </Option>
              </Select>
              <Tooltip
                overlayInnerStyle={{ fontSize: "11px", borderRadius: "6px" }}
                title="This setting will determine if your leave balance will be reset based on the accounting year (company's fiscal year) or based on the employee's start date. Besides quotas, your roll-over policy will also be affected according to this setting."
              >
                <img src={tip}></img>
              </Tooltip>
            </div>
            <div>
              <p
                style={{
                  position: "absolute",
                  zIndex: "1",
                  fontWeight: "600",
                  fontSize: "11px",
                  marginLeft: "27px",
                  marginTop: "0px",
                }}
              >
                Fiscal Year Start
              </p>
              <Select
                defaultValue="January"
                style={{
                  fontSize: "13px",
                  height: "48px",
                  width: "125px",
                  marginTop: "10px",
                  marginLeft: "15px",
                  marginBottom: "10px",
                  marginRight: "15px",
                }}
                onChange={handleChange}
              >
                <Option value="January">January</Option>
                <Option value="February">February</Option>
                <Option value="March">March</Option>
                <Option value="April">April</Option>
                <Option value="May">May</Option>
                <Option value="June">June</Option>
                <Option value="July">July</Option>
                <Option value="August">August</Option>
                <Option value="September">September</Option>
                <Option value="October">October</Option>
                <Option value="November">November</Option>
                <Option value="December">December</Option>
              </Select>
              <Input placeholder="1" style={{ width: "80px" }} />
            </div>
            <div>
              <Checkbox
                onChange={onChange}
                style={{
                  marginLeft: "18px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                No Brought Forward Expiry Date
              </Checkbox>
              <Tooltip
                overlayInnerStyle={{ fontSize: "11px", borderRadius: "6px" }}
                title="Each year, the user's rolled over leaves will expire on the date you set. The quotas for each leave type are configured through the Leave Types section for this location and each can be set individually to allow or not allow roll overs."
              >
                <img src={tip}></img>
              </Tooltip>
            </div>
            <div>
              <p
                style={{
                  position: "absolute",
                  zIndex: "1",
                  fontWeight: "600",
                  fontSize: "11px",
                  marginLeft: "28px",
                  marginTop: "21px",
                }}
              >
                Week Starts On
              </p>
              <Select
                defaultValue="Monday"
                style={{
                  fontSize: "13px",

                  width: "145px",
                  marginTop: "30px",
                  marginLeft: "15px",
                  marginBottom: "10px",
                  marginRight: "15px",
                }}
                onChange={handleChange}
              >
                <Option value="Monday">Monday</Option>
                <Option value="Tuesday">Tuesday</Option>
                <Option value="Wednesday">Wednesday</Option>
                <Option value="Thursday">Thursday</Option>
                <Option value="Friday">Friday</Option>
                <Option value="Saturday">Saturday</Option>
                <Option value="Sunday">Sunday</Option>
              </Select>
            </div>
            <div>
              <p
                style={{
                  position: "absolute",
                  zIndex: "1",
                  fontWeight: "600",
                  fontSize: "11px",
                  marginLeft: "30px",
                  marginTop: "20px",
                }}
              >
                Time Zone
              </p>
              <p
                style={{
                  position: "absolute",
                  zIndex: "1",
                  color: "#F24445",
                  marginLeft: "86px",
                  marginTop: "19px",
                }}
              >
                *
              </p>
              <Select
                showSearch
                defaultValue="(GMT+03:00) Minsk"
                style={{
                  fontSize: "13px",

                  width: "440px",
                  marginTop: "30px",
                  marginLeft: "15px",
                  marginBottom: "10px",
                  marginRight: "15px",
                }}
                onChange={handleChange}
              >
                <Option value="vil">(GMT+02:00) Vilnius</Option>
                <Option value="kha">(GMT+03:00) Khartoum</Option>
                <Option value="nai">(GMT+03:00) Nairobi</Option>
                <Option value="su">(GMT+03:00) Syowa</Option>
                <Option value="bag">(GMT+03:00) Baghdad</Option>
                <Option value="q">(GMT+03:00) Qatar</Option>
                <Option value="ri">(GMT+03:00) Riuadh</Option>
                <Option value="mi">(GMT+03:00) Minsk</Option>
              </Select>
              <Tooltip
                overlayInnerStyle={{ fontSize: "11px", borderRadius: "6px" }}
                title="This default time zone is used throughout the system. For example for accurately displaying leave information in the calendar and for the system events listed in the Logs."
              >
                <img src={tip}></img>
              </Tooltip>
            </div>
            <div>
              <Select
                mode="tags"
                style={{
                  width: "470px",
                  marginLeft: "15px",
                  marginTop: "33px",
                }}
                placeholder="Add Users"
                onChange={handleChange}
              >
                {users}
              </Select>
            </div>
            <div>
              <Checkbox
                onChange={onChange}
                style={{
                  marginTop: "27px",
                  marginLeft: "15px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Make This Location Default
              </Checkbox>
              <Tooltip
                overlayInnerStyle={{ fontSize: "11px", borderRadius: "6px" }}
                title="By making this Location the default one, all new team members will be automatically added to this Location."
              >
                <img src={tip}></img>
              </Tooltip>
            </div>
            <div className="leavePolCont">
              <p className="leavePol">
                Once you've created a Location, assign a Leave Policy to the
                Location, in<br></br>order to enable Users to request Leave. To
                assign a Leave Policy, go to<br></br> Location {">"} Leave
                Policies {">"} Assign Leave Policy.
              </p>
            </div>
          </Modal>
        </div>
        <div className="cardCont">
          {store.getState().cards}
          <div className="card">
            <p>
              Australia &emsp; &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp; &emsp;&emsp;
              <Dropdown overlay={menu}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <img src={menuu}></img>
                  </Space>
                </a>
              </Dropdown>
            </p>

            <div className="cardText">
              <p>
                Holidays &emsp; &emsp;&emsp; <span>View Holidays</span>
              </p>
              <p>
                Leave Policies &emsp; <span>View Leave Policies</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
