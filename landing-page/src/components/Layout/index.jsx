import React from "react";
import Header from "../Header";
import Hero from "/assets/andrew-neel-cckf4TsHAuw-unsplash.jpg";
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <div className="min-h-full bg-gray-100 font-body">
      <div className="h-screen flex flex-col">
        <Header />
        <div
          className="
          relative flex items-center justify-center h-full
          bg-cover bg-center bg-fixed bg-no-repeat
          "
          style={{
            backgroundImage: `url(${Hero})`,
          }}
        >
          {props.heading && (
            <h1
              className={`relative px-2.5 text-white uppercase z-10 text-xl text-center md:text-6xl`}
            >
              {props.heading}
            </h1>
          )}

          <div className="z-0 absolute top-0 left-0 h-full      w-full bg-black opacity-40"></div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto">{props.children}</div>

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  heading: "",
};

export default Layout;
