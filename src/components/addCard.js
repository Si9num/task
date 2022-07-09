import menuu from "../img/menu.svg";
import { store } from "../redux/store.js";

import {
 
  Dropdown,
  Menu,
  Space,
} from "antd";

export function addCard() {
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
  store.dispatch({
    type: "CARDS",
    cards: (
      <div className="card">
        <p>
          {store.getState().temp[store.getState().temp.length - 1]} &emsp;
          &emsp;&emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp;
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
    ),
  });
}
