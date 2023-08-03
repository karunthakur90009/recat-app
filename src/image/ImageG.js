import { useState } from "react";
import "./img.css";

const data = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    text: "This is an Image",
    header: "India"
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    text: "This is an Image",
    header: "India"
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    text: "This is an Image",
    header: "India"
  }
];

const ImageG = () => {
  const [isActive, setIsActive] = useState(0);
  return (
    <section>
      {data.map((card, index) => {
        return (
          <article
            className={isActive === index ? "active" : ""}
            key={card.thumbnail}
            onClick={() => setIsActive(index)}
          >
            <img src={card.thumbnail} alt="" />
            <div className="content">
              <span>photos_Cam</span>
              <div>
                <h2>{card.header}</h2>
                <p>{card.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ImageG;
