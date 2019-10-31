import React from "react";
import { Carousel } from "react-bootstrap";

class MainCarousel extends React.Component {
  render() {
    return (
      <div className="home-maincarousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/1.jpg"
              alt="First slide"
              style={{ objectFit: "cover", height: "100vh" }}
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/2.jpg"
              alt="Second slide"
              style={{ objectFit: "cover", height: "100vh" }}
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/3.jpg"
              alt="Third slide"
              style={{ objectFit: "cover", height: "100vh" }}
            />

          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/4.jpg"
              alt="Fourth slide"
              style={{ objectFit: "cover", height: "100vh" }}
            />

          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/5.jpg"
              alt="Fifth slide"
              style={{ objectFit: "cover", height: "100vh" }}
            />

          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/6.jpg"
              alt="Fifth slide"
              style={{ objectFit: "cover", height: "100vh" }}
            />

          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default MainCarousel;
