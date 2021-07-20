import React from "react";
import Header from "./Header";
import "./Content.css";

function Content() {
  const para = [];
  for (let i = 0; i < 24; i++) {
    para.push(i);
  }
  return (
    <div>
      <Header />

      <div className="content-wrapper">
        <div>
          {para.map((i) => {
            i++;
            return <p key={i}>text</p>;
          })}
        </div>

        <div className="text-grid">
          <div>
            <p>text</p> <p>button</p>
          </div>
          <div>
            <p>text</p>
            <p>text</p>
          </div>

          <div>
            <hr />
          </div>

          <div>
            <p>text</p>
          </div>

          <div>
            <p>text</p>
            <p>text</p>
          </div>

          <div>
            <p>text</p>
            <p>text</p>
          </div>

          <div>
            <p>text</p>
            <p>text</p>
          </div>
        </div>
      </div>
      <div>text</div>
      <hr />
      <div className="content2">
        <div>text</div>
        <div>text text text</div>

        <div>text</div>
        <div>text text text</div>

        <div>text</div>
        <div>text</div>

        <div>text</div>
        <div>text</div>
      </div>
    </div>
  );
}

export default Content;
