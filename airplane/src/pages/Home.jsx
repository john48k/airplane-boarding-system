import { Navbar } from "../components/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

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
            alt="slide 1"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>SM SEASIDE, CEBU</h3>
            <p>
              Modern shopping and lifestyle destination located along Cebu's
              South Road Properties
            </p>
          </Carousel.Caption>
        </Carousel.Item>

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
            src="/images/banner-03.jpg"
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
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/images/banner-04.jpg"
            className="carousel-banner-size"
            alt=""
          />
          <Carousel.Caption className="carousel-caption">
            <h3>YORK, ENGLAND</h3>
            <p>
              York, England is a historic city known for its medieval
              architecture, including the iconic York Minster.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Best Seats
          </AccordionSummary>
          <AccordionDetails>
            Get <strong>the best seats</strong> and elevate your travel
            experience! Enjoy extra legroom, stunning window views, and premium
            comfort throughout your journey. Reserve now and make your next
            flight unforgettable!"
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            How Does This Work?
          </AccordionSummary>
          <AccordionDetails>
            It's simple and easy, All you have to do is book a flight and we'll
            give you the best option for you!
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Why <strong> FLIGHTMATCH ?</strong>
          </AccordionSummary>
          <AccordionDetails>
            It's <strong>simple and easy</strong>, All you have to do is book a
            fligt and we'll give you the best option for you!
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
      </div>
    </>
  );
};
