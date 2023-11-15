import React from "react";
import TopDeals from "../../components/topdeals/TopDeals";
import "./home.scss";
import ChartBox from "../../components/chartbox/ChartBox";

export default function Home() {
  return (
    <div className="home">
      <div className="box">
        <TopDeals />
      </div>
      <div className="box">
        <ChartBox></ChartBox>
      </div>
      <div className="box">
        <ChartBox></ChartBox>
      </div>
      <div className="box">Box4</div>
      <div className="box">
        <ChartBox></ChartBox>
      </div>
      <div className="box">
        <ChartBox></ChartBox>
      </div>
      <div className="box">Box7</div>
      <div className="box">Box8</div>
      <div className="box">Box9</div>
    </div>
  );
}
