import React from "react";
import Banner from "./components/Banner";
import image from "./assets/images/img-2.jpg";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Banner Image={image} />
      <GlobalStyle />
    </>
  );
}

export default App;
