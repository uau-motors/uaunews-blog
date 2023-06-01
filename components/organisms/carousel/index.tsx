import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { getCarouselPosts } from "../../../pages/api";
import CarouselItem from "../../molecules/carousel-tem";
import data from "../../../utility/data/carousel.json";

const responsive = {
  lg: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1
  },
  md: {
    breakpoint: { max: 1023, min: 464 },
    items: 3,
    slidesToSlide: 1
  },
  sm: {
    breakpoint: { max: 600, min: 464 },
    items: 2
  },
  xs: {
    breakpoint: { max: 463, min: 0 },
    items: 1
  }
};

const CarouselBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      try {
        setPosts(data);
      } catch (error) {
        console.log("Erro ao buscar posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="carousel-blog">
      <div className="carousel-items">
        <Carousel
          swipeable
          draggable
          responsive={responsive}
          ssr
          infinite
          autoPlay
          autoPlaySpeed={5000}
          keyBoardControl
          customTransition="ease-in-out .5s"
          transitionDuration={500}
          containerClass="carousel-container"
        >
          {posts.length > 1 &&
            posts.map((post, key) => {
              return <CarouselItem data={post} key={key} />;
            })}
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselBlog;
