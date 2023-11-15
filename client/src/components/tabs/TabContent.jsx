import React from "react";
import "./tabContent.scss";

export default function TabContent() {
  const [activeTab, setActiveTab] = React.useState(0);
  const content = [
    "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
    "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. ",

    "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. ",
  ];
  const tabs = ["html", "css", "js"];
  function changeTab(index) {
    setActiveTab(index);
  }
  return (
    <div className="tab-container">
      <ul className="tab-btns">
        {tabs.map((e, index) => {
          if (index == activeTab)
            return (
              <li
                key={index}
                className="tab-active"
                onClick={() => changeTab(index)}
              >
                {e}
              </li>
            );
          else {
            return <li onClick={() => changeTab(index)}>{e}</li>;
          }
        })}
      </ul>
      <div className="tab-content">{content[activeTab]}</div>
    </div>
  );
}
