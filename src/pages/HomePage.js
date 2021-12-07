import { useState } from "react";
import SideNav from "../components/SideNav";
import Name from "../components/Name";
import Place from "../components/Place";
import Standard from "../components/Standard";
const HomePage = () => {
  //  States
  const [value, setValue] = useState("name");

  return (
    <div className="homePage">
      <div className="homepage_child child-1">
        <SideNav value={value} setValue={setValue} />
      </div>
      <div className="homepage_child child-2">
        {value === "name" && <Name />}
        {value === "place" && <Place />}
        {value === "standard" && <Standard />}
      </div>
    </div>
  );
};
export default HomePage;
