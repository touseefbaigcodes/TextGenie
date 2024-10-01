import React, { useState, useContext } from "react";
import "./Css.css";
import Alert from "./Alert";
import { DarkModeContext } from "./Context";

export default function Txtutility() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState(null);
  const { copybtnColor } = useContext(DarkModeContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const showAlert = (message, type) => {
    setMessage({ msg: message, tp: type });
    setTimeout(() => setMessage(null), 1000);
  };

  const convertText = (transformFunction, alertMessage) => {
    setText(transformFunction(text));
    showAlert(alertMessage, "success");
  };

  const UpperCase = () =>
    convertText((text) => text.toUpperCase(), "Text converted to uppercase");
  const SentenceCase = () =>
    convertText(
      (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),
      "Text converted to sentence case"
    );
  const Lowercase = () =>
    convertText((text) => text.toLowerCase(), "Text converted to lowercase");
  const SentenceCaseToEachElem = () =>
    convertText(
      (text) =>
        text
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      "Text converted to sentence case for each word"
    );
  const clearText = () => convertText(() => "", "Text has been cleared");
  const removeExtraSpaces = () =>
    convertText((text) => text.replace(/\s+/g, " "), "Extra spaces removed");
  const copyText = () => {
    navigator.clipboard.writeText(text);
    showAlert("Text copied to clipboard", "success");
  };

  return (
    <div id="home" className="container">
      <Alert message={message} />
      <h5 id="h1" className="fs-4 w-100 text-center mt-2">
        Making Text modify easy, capitalize and case convert to Title Case,
        sentence case, UPPERCASE, lowercase and more.
      </h5>
      <div id="textarea" className="d-flex justify-content-center w-100">
        <textarea
          id="input"
          type="text"
          className="w-75 rounded mt-4"
          value={text}
          onChange={handleChange}
          placeholder="Enter text here..."
          aria-label="Text input area"
        />
        <div
          disabled={text.length === 0}
          id="Copying"
          className="rounded"
          onClick={copyText}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747938.png"
            alt="Copy icon"
            className="ms-2 h-50 mt-5 w-100"
            id="copyimg"
            style={copybtnColor}
          />
        </div>
      </div>
      <div>
        <div className="btnClass w-75 mt-3 m-auto">
          <button
            style={{ margin: "0 0 0 7px" }}
            type="button"
            className="btn btn-sm btn-primary rounded-3 mb-2"
            onClick={UpperCase}
            disabled={text.length === 0}
          >
            UpperCase
          </button>
          <button
            style={{ margin: "0 0 0 7px" }}
            type="button"
            className="btn btn-sm btn-secondary rounded-3 mb-2"
            onClick={SentenceCase}
            disabled={text.length === 0}
          >
            SentenceCase
          </button>
          <button
            style={{ margin: "0 0 0 7px" }}
            type="button"
            className="btn btn-sm btn-success rounded-3 mb-2"
            onClick={Lowercase}
            disabled={text.length === 0}
          >
            Lowercase
          </button>
          <button
            style={{ margin: "0 0 0 7px" }}
            type="button"
            className="btn btn-sm btn-primary rounded-3 mb-2"
            onClick={clearText}
            disabled={text.length === 0}
          >
            ClearText
          </button>
          <button
            style={{ margin: "0 0 0 7px" }}
            type="button"
            className="btn btn-sm btn-danger rounded-3 mb-2"
            onClick={SentenceCaseToEachElem}
            disabled={text.length === 0}
          >
            SentenceCaseToEachElem
          </button>
          <button
            style={{ margin: "0 0 0 7px" }}
            type="button"
            className="btn btn-sm btn-primary rounded-3 mb-2"
            onClick={removeExtraSpaces}
            disabled={text.length === 0}
          >
            RemoveExtraSpaces
          </button>
        </div>
        <div className="w-75 m-auto mt-3">
          <h4>Your Text Summary</h4>
          <p>
            {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(" ").filter((element) => element.length !== 0)
                .length}{" "}
            Minutes Read
          </p>
        </div>
      </div>
      <footer className=" m-auto w-75 text-white text-center py-0">
  <div className="container">
    <p>&copy; 2024 TextGenie. All Rights Reserved.</p>
    <p>
      <a href="#" className="text-white mx-2">Privacy Policy</a> |
      <a href="#" className="text-white mx-2">Terms of Service</a> 
    </p>
    <div>
      <a href="#" className="text-white mx-2"><i className="bi bi-facebook"></i></a>
      <a href="#" className="text-white mx-2"><i className="bi bi-twitter"></i></a>
      <a href="#" className="text-white mx-2"><i className="bi bi-linkedin"></i></a>
    </div>
  </div>
</footer>

    </div>
  );
}
