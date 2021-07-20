import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const n = [];
  for (let i = 0; i < 50; i++) {
    n.push(i);
  }
  return (
    <div className="sidebar-wrapper">
      {/* Button Wrapper 1 */}
      <div className="button-wrapper">
        <p>button</p>
      </div>
      {/* Sidebar Content Wrapper 1 */}
      <div>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
      </div>
      {/* Button Group */}
      <div>
        <div>button</div>
        <div>button</div>
        <div>button</div>
      </div>
      {/* Input Box */}
      <p>text</p>
      <div>
        <div>input</div>
      </div>
      {/* Scrollobale Text */}
      <div>
        <p>text</p>
        <p>Scroll</p>
      </div>

      <div>
        {n.map((i) => {
          i++;
          return (
            <div key={i}>
              <div>
                <p> img</p>
              </div>
              <div>text ..............................</div>
              <div>text ..............................</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
