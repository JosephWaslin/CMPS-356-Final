import React, { useState } from "react";
import "./gallery.css";
import Img1 from "./assets/image1.jpg";
import Img2 from "./assets/image2.jpg";
import Img3 from "./assets/image3.jpg";
import Img4 from "./assets/image4.jpg";
import Img5 from "./assets/image5.jpg";
import Img6 from "./assets/image6.jpg";
import Img7 from "./assets/image7.jpg";
import Img8 from "./assets/image8.jpg";
import Img9 from "./assets/image9.jpg";
import Img10 from "./assets/image10.jpg";
import Img11 from "./assets/image11.jpg";
import Img12 from "./assets/image12.jpg";
import Img13 from "./assets/image13.jpg";
import Img14 from "./assets/image14.jpg";
import Img15 from "./assets/image15.jpg";
import Img16 from "./assets/image16.jpg";
import Img17 from "./assets/image17.jpg";
import Img18 from "./assets/image18.jpg";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
    {
      id: 13,
      imgSrc: Img13,
    },
    {
      id: 14,
      imgSrc: Img14,
    },
    {
      id: 15,
      imgSrc: Img15,
    },
    {
      id: 16,
      imgSrc: Img16,
    },
    {
      id: 17,
      imgSrc: Img17,
    },
    {
      id: 18,
      imgSrc: Img18,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <h1 className="workdone">Our Previous Work!</h1>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
