import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Link to={""}>Home</Link>
      <Link to={"/tests"}>Tests</Link>
      <Link to={"/converter"}>Converter</Link>
    </div>
  );
};
