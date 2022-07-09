import addSet from "../img/settingsadd.svg";
import vacManFill from "../img/vacMan1.svg";
import switcher from "../img/switcher.svg";
import { useRef } from "react";

export function AddMenu() {
  let container = useRef();
  let vis = useRef();
  let arrow = useRef();

  return (
    <div className="settCont" ref={container}>
      <div ref={vis}>
        <p className="headSet">Settings</p>
        <div className="param">
          <img src={addSet}></img>
          <p>General</p>
        </div>
        <div className="vacManFill">
          <img src={vacManFill}></img>
          <p>Vacation Manager</p>
        </div>
        <div className="vacManParam">
          <p>Leave Types</p>
          <p className="loc">Locations</p>
        </div>
      </div>
      <img
        src={switcher}
        className="switcher"
        ref={arrow}
        onClick={() => {
          if (getComputedStyle(container.current).width === "240px") {
            container.current.style.transition = "0.5s";
            container.current.style.width = "20px";
            vis.current.style.visibility = "hidden";
            arrow.current.style.marginLeft = "-20px";
          } else {
            container.current.style.transition = "0.5s";
            container.current.style.width = "240px";
            vis.current.style.visibility = "visible";
            arrow.current.style.marginLeft = "200px";
          }
          console.log(getComputedStyle(container.current).width);
        }}
      ></img>
    </div>
  );
}
