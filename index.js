import React, { useState } from "react";
import ReactDOM from "react-dom";

const PARKS = ["Nuuksio National Park", "Pallas-Yllästunturi National Park"];
const TIMES = ["as soon as possible", "next week", "next month", "whenever"]

export function App() {
  const [parkIndex, setParkIndex] = useState(0);
  const [timeIndex, setTimeIndex] = useState(1);
  const [discountSet, setDiscounts] = useState([1, 2])

  const DISCOUNTS = {
    '00': [1, 2],
    '01': [1, 2],
    '02': [1],
    '03': [1],
    '10': [2],
    '11': [2],
    '12': [],
    '13': [],
  }

  const updateCards = () => {
    setDiscounts(DISCOUNTS[`${parkIndex % PARKS.length}${timeIndex % TIMES.length}`]);
  }

  return <>
    <div className="title">
      <span>Plan your trip to</span>
      {" "}
      <span className="title__dropdown title__park" onClick={() => { setParkIndex((parkIndex + 1) % PARKS.length); updateCards(); }}>{ PARKS[parkIndex] }</span>
      {" "}
      <span className="title__dropdown title__time" onClick={() => { setTimeIndex((timeIndex + 1) % TIMES.length); updateCards(); }}>{ TIMES[timeIndex] }</span>
    </div>
    <div className="emojibuf">
      {"🌲 ⛰ 🇫🇮"}
    </div>
    <div className="suggestions">
      <div className="suggestions__explanation">
        Using the data from the counters across the parks we have come up we a list of activities,
        which might be interesting for you:
      </div>
      <div className="suggestions__title">
        How about?..
      </div>

      {discountSet.includes(1) && (<div className="card card-orange">
        <div className="card__title">
          Mondays are awesome. Hotels🏨 are inviting
        </div>
        <div className="card__subtitle">
          Our data analysis revealed: mondays are extremely unpopular among the visitors.
          <b>Hotelli Jeris</b> and <b>Aurora Dome & Glamping</b> share our concerns and provide
          a <b>15% discount</b> for reservations through Visit Finland. Claim your discount below:
        </div>
        <div className="card__claim-button">
          Book for Monday-Tuesday, Nov 25
        </div>
        <div className="card__claim-button">
          Book for Monday-Tuesday, Dec 2
        </div>
      </div>)}

      {discountSet.includes(2) && (<div className="card card-yellow">
        <div className="card__title">
          Catch some sun☀️
        </div>
        <div className="card__subtitle">
          We've checked it for you and found the sunniest days upcoming. It is time to pack!
        </div>
        <div className="card__claim-button">
          Add to the calendar: sunny on Nov 28
        </div>
        <div className="card__claim-button">
          Add to the calendar: sunny on Dec 3
        </div>
      </div>)}

    </div>
  </>
}

ReactDOM.render(
  <App />,
  document.getElementById("main")
);
