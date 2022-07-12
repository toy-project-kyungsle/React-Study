import React, { useState } from "react";
import Header from "./header";
import Nav from "./nav";
import APPLY from "./apply";
import FOOTER from "./footer";

export default function Main() {
  const [footer, setFooter] = useState(false);

  return (
    <>
      <Header />
      <Nav />
      <APPLY footer={footer} setFooter={setFooter}/>
      {footer ? <FOOTER /> : null}
    </>
  );
}
