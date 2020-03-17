import React from "react";
import classnames from "classnames";
import "./DayListItem.scss";

export default function DayListItem(props) {
  const formatSpots = () => {
    if (props.spots === 0) {
      return "no spots remaining";
    } else if (props.spots === 1) {
      return "1 spot remaining";
    } else {
      return props.spots + " spots remaining";
    }
  };
  const dayClass = classnames("day-list__item", {
    "day-list__item--selected ": props.selected,
    "day-list__item--full": props.spots === 0 ? true : false
  });
  return (
    <li selected onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2 className={dayClass}>{props.name}</h2>
      <h3 className={dayClass}>{formatSpots()}</h3>
    </li>
  );
}
