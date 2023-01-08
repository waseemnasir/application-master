import React from "react";
// import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleUpTwoToneIcon from "@mui/icons-material/ArrowCircleUpTwoTone";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useEffect, useState } from "react";
const TopButton = () => {
  const [bottomToTopButton, setBottomToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBottomToTopButton(true);
      } else {
        setBottomToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {bottomToTopButton && (
        <ArrowCircleUpTwoToneIcon
          style={{
            position: "fixed",
            bottom: "2.3em",
            cursor: "pointer",
            color: "#228B22",
            fontSize: "3em",
            right: "0.8em",
            zIndex: "1",
          }}
          onClick={scrollUp}
        />
      )}
    </>
  );
};

export default TopButton;
