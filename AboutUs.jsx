import React, { useContext, useEffect } from "react";
import { DarkModeContext } from "./Context";

export default function About() {
  const { Aboutdmode } = useContext(DarkModeContext);
  return (
    <div id="accordion" className="container mt-5">
      <h2 id="ab" style={Aboutdmode}>About Us</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={Aboutdmode}
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={Aboutdmode}>
              TextGenie gives you a way to analyze your text quickly and efficiently. Be it word count, character count, or other metrics.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={Aboutdmode}
            >
              Free to Use
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={Aboutdmode}>
              TextGenie is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limits.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={Aboutdmode}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={Aboutdmode}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, blog, books, excel documents, pdf documents, essays, etc.
            </div>
          </div>
        </div>
      </div>
      <div className="border border-primary">
      </div>
    </div>
  );
}
