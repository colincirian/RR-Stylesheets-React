import { useContext } from "react";
import StyleContext from "../contexts/StyleContext";

export default function Aside() {
  const { aside, innerAside } = useContext(StyleContext);
  return (
    <div style={aside}>
      <h4>This is the aside like a sidebar type thing</h4>
      <div style={innerAside}>
        <h5>This is inside the inner aside.</h5>
      </div>
    </div>
  );
}
