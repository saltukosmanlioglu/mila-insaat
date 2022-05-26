import type { NextPage } from "next";

import Main from "@/layout/main";
import MultiSlider from "@/widgets/multi-slider";

import { cardImage } from "./constants";

const Home: NextPage = () => {
  return (
    <Main>
      <div style={{ padding: 100 }}>
        <MultiSlider column={3} data={cardImage} />
        <MultiSlider column={3} data={cardImage} />
        <MultiSlider column={3} data={cardImage} />
      </div>
    </Main>
  );
};

export default Home;
