import type { NextPage } from "next";

import Main from "@/layout/main";
import Progress from "@/components/progress";

const Home: NextPage = () => {
  return (
    <Main>
      <div style={{ width: "50%", gap: 20 }}>
        <Progress percent="70" title="Illustration" />
        <Progress percent="87" title="Interior Design" />
        <Progress percent="60" title="Architecture" />
      </div>
    </Main>
  );
};

export default Home;
