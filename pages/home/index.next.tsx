import type { NextPage } from "next";

import Main from "@/layout/main";
import Gallery from "@/widgets/gallery";

import { galleryImage } from "./constants";

const Home: NextPage = () => {
  return (
    <Main>
      <div>
        <Gallery gallery={galleryImage} />
      </div>
    </Main>
  );
};

export default Home;
