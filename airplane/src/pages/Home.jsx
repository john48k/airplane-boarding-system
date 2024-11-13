import { Navbar } from "../components/Navbar";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
export const Home = () => {
  return (
    <>
      <Navbar activeTab="Home" />

      <Carousel>
        <Carousel.Item className="carousel-item carousel-image-size">
          <img
            src="/images/banner-01.jpg"
            className="carousel-banner-size"
            alt=""
          />
          <Carousel.Caption className="carousel-caption">
            <h3>SM SEASIDE, CEBU</h3>
            <p>
              Modern shopping and lifestyle destination located along Cebu's
              South Road Properties
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* 
        <Carousel.Item>
          <img
            src="/images/banner-02.jpg"
            className="carousel-banner-size"
            alt=""
          />
          <Carousel.Caption className="carousel-caption">
            <h3>TOKYO, JAPAN</h3>
            <p>Explore The Fascinating Wonders of Japans Natural Beauty</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/images/banner-02.jpg"
            className="carousel-banner-size"
            alt=""
          />
          <Carousel.Caption className="carousel-caption">
            <h3>TAOIST, CEBU</h3>
            <p>
              The Taoist Temple in Cebu is a peaceful and picturesque place of
              worship, offering stunning views of the city and a glimpse into
              Taoist traditions and architecture.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
};
