import React from "react";
import Link from "next/link";
import Date from "../atoms/date";
import styles from "../organisms/carousel/Carousel.module.css";

const CarouselItem = ({ data }) => {
  return (
    <div className={`slide animated slideInLeft`}>
      <img
        width="843"
        height="470"
        src={data.feature_image}
        alt={data.title ?? "imagem"}
      />
      <span className="post-cat-wrap">
        <a href={`/{data.tags.slug}`}>
          <span className="post-cat">{data.tags.name}</span>
        </a>
      </span>
      <div
        className="content"
        onClick={() => (window.location.href = `/${data.tags.slug}`)}
      >
        <div className="thumb-content">
          <div className="thumb-meta">
            <span className="date meta-item fa-before">
              <i className="fa fa-calendar-o" />{" "}
              <Date dateString={"2023-03-03"} locale={"ptBR"} />
            </span>
          </div>
          <h2 className="thumb-title">{data.title}</h2>
          <div
            className="thumb-desc"
            dangerouslySetInnerHTML={{ __html: data.excerpt }}
          />
        </div>
      </div>
      <div className="thumb-overlay" />
    </div>
  );
};

export default CarouselItem;
