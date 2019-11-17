import React, { useState } from "react";
import ReactDOM from "react-dom";

const PARKS = ["Nuuksio National Park", "Pallas-Yllästunturi National Park"];
const TIMES = ["as soon as possible", "next week", "next month", "whenever"]

export function App() {
  const [parkIndex, setParkIndex] = useState(0);
  const [timeIndex, setTimeIndex] = useState(1);

  const DISCOUNTS = {
    '00': [2, 3, 4],
    '01': [3, 4],
    '02': [2, 4],
    '03': [2, 4],
    '10': [1, 2, 3, 5],
    '11': [1, 2, 3, 5],
    '12': [1, 5],
    '13': [1, 2, 5],
  }

  const discountSet = DISCOUNTS[`${parkIndex % PARKS.length}${timeIndex % TIMES.length}`];

  return <>
    <div className="title">
      <span>Plan your trip to</span>
      {" "}
      <span className="title__dropdown title__park" onClick={() => setParkIndex((parkIndex + 1) % PARKS.length)}>{ PARKS[parkIndex] }</span>
      {" "}
      <span className="title__dropdown title__time" onClick={() => setTimeIndex((timeIndex + 1) % TIMES.length)}>{ TIMES[timeIndex] }</span>
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
          Thursdays are awesome. Hotels🏨 are inviting
        </div>
        <img className="card__pic" src="https://res.cloudinary.com/dhgy4yket/image/upload/v1573946168/junc19/finland_parks_visitors_per_weekday.png" />
        <div className="card__subtitle">
          Our data analysis revealed: thursdays are the least popular among the visitors.
          <b>Hotelli Jeris</b> and <b>Aurora Dome & Glamping</b> accepted the challenge and provide
          a <b>15% discount</b> for reservations through Visit Finland. Claim your discount below:
        </div>
        <div className="card__claim-button">
          Book for Thursday-Friday, Nov 21
        </div>
        <div className="card__claim-button">
          Book for Thursday-Friday, Dec 5
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

      {discountSet.includes(3) && (<div className="card card-blue">
        <div className="card__title">
          Daylength is rapidly shortening🌅 Around 4.5 minutes a day in South Finland. 8.5 minutes in Lapland
        </div>
        <div className="card__subtitle">
          Of course you'd prefer to go while it's not completely dark! Don't miss it.
        </div>
        <div className="card__claim-button">
          Lapland sun will be down all day from Dec 11
        </div>
        <div className="card__claim-button">
          South Finland will be lightened less than 6 hours a day on Dec 21
        </div>
      </div>)}

      {discountSet.includes(4) && (<div className="card card-grey">
        <div className="card__title">
          Avoid crowds! Weekly stats for trails in Nuuksio
        </div>
        <img className="card__pic" src="https://res.cloudinary.com/dhgy4yket/image/upload/v1573950596/junc19/north.png" />
        <div className="card__subtitle">
          Thanks to the counters, we have years of historical data for different trails within the Park.
          Research the map and avoid using the crowdiest paths
        </div>
        <div className="card__claim-button">
          Nuuksio map, week ago
        </div>
      </div>)}

      {discountSet.includes(5) && (<div className="card card-green">
        <div className="card__title">
          Pallas-Yllästunturi historical stats. Avoid crowdy trails!
        </div>
        <img className="card__pic" src="https://res.cloudinary.com/dhgy4yket/image/upload/v1573950596/junc19/south.png" />
        <div className="card__subtitle">
          Thanks to the counters, we have years of historical data for different trails within the Park.
          Research the map and avoid using the crowdiest paths
        </div>
        <div className="card__claim-button">
          Pallas-Yllästunturi trails on Maps
        </div>
      </div>)}

    </div>
  </>
}

ReactDOM.render(
  <App />,
  document.getElementById("main")
);
