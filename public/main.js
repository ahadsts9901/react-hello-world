import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Hi() {
  return (
    <div>
      <img src="https://avatars.githubusercontent.com/u/120649081?v=4" />
      <h1>Muhammad Ahad</h1>
      <ul>
        <li>
          <a href="https://github.com/ahadsts9901">Github</a>
        </li>
        <li>
          <a href="https://www.youtube.com/@AhadSTS/">Youtube</a>
        </li>
        <li>
          <a href="https://www.facebook.com/abdulahad.ansari.1481/">Facebook</a>
        </li>
        <li>
          <a href="https://wa.me/+923130019086">Whatsapp</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/muhammad-ahad-3136b1236">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
