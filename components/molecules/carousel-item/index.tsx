import React from "react";
import Link from "next/link";
import Date from "@atoms/date-component";
import Image from "next/image";
import { CarouselDataI } from "@utility/interfaces";

interface CarouselItemProps {
  data: CarouselDataI;
}

const CarouselItem = ({ data }: CarouselItemProps) => {
  return (
    <div className={`slide animated slideInLeft`}>
      <Image width="843" height="470" src={data.feature_image} alt={data.title ?? "imagem"} />
      <span className="post-cat-wrap">
        <Link href={`/${data.tags[0].slug}`}>
          <span className="post-cat">{data.tags[0].name}</span>
        </Link>
      </span>
      <div className="content" onClick={() => (window.location.href = `/${data.tags[0].slug}`)}>
        <div className="thumb-content">
          <div className="thumb-meta">
            <span className="date meta-item fa-before">
              <i className="fa fa-calendar-o" /> <Date dateString={"2023-03-03"} />
            </span>
          </div>
          <h2 className="thumb-title">{data.title}</h2>
        </div>
      </div>
      <div className="thumb-overlay" />
    </div>
  );
};

export default CarouselItem;
