import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const transition = function(newMode) {
    setMode(newMode);
    setHistory(prev => [...prev, newMode]);
  };
  const back = function() {
    // if the history array is greater than one the set Mode to the second last value
    if (history.length > 1) setMode(history[history.length - 2]);
    // update the history array so that the last value gets removed from the array
    setHistory(prev => [...prev.slice(0, prev.length - 1)]);
  };
  return {
    mode,
    transition,
    back
  };
}
