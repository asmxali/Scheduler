import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const transition = function(newMode) {
    setMode(newMode);
  };
  return {
    mode,
    transition
  };
}
