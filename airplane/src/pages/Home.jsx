import { Navbar } from "../components/Navbar";
// import "../assets/css/fontawesome.css";
// import "../assets/css/templatemo-villa-agency.css";
// import "../assets/css/owl.css";
// import "../assets/css/animate.css";
// import "https://unpkg.com/swiper@7/swiper-bundle.min.css";

export const Home = () => {
  return (
    <>
      <Navbar activeTab="Home" />

      {/* Preloader */}
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Sub-header */}
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <ul className="info">
                <li><i className="fa fa-envelope"></i> CitUniversity@citedu.com</li>
                <li><i className="fa fa-map"></i> 7VVJ+QFR, Natalio B. Bacalso Ave, Cebu City, 6000 Cebu</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <ul className="social-links">
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://x.com/minthu" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="home.html" className="logo"><h1>FlightMatch</h1></a>
                <ul className="nav">
                  <li><a href="home.html" className="active">Home</a></li>
                  <li><a href="flights.html">View Flights</a></li>
                  <li><a href="booking.html">Booking</a></li>
                  <li><a href="checkin.html">Check In</a></li>
                  <li><a href="information.html">Information</a></li>
                  <li><a href="contact.html">Customer Support</a></li>
                  <li><a href="signup.html">Sign Up</a></li>
                  <li><a href="login.html"><i className="fa fa-calendar"></i> Login</a></li>
                </ul>
                <a className="menu-trigger"><span>Menu</span></a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Banner */}
      <div className="main-banner">
        <div className="owl-carousel owl-banner">
          <div className="item item-1">
            <div className="header-text">
              <span className="category">Sm Seaside, <em>Cebu</em></span>
              <h2>Hurry!<br />Get the Best Deals for you</h2>
            </div>
          </div>
          <div className="item item-2">
            <div className="header-text">
              <span className="category">Tokyo, <em>Japan</em></span>
              <h2>Be Quick!<br />travel to your next destination</h2>
            </div>
          </div>
          <div className="item item-3">
            <div className="header-text">
              <span className="category">Taoist Temple, <em>Cebu</em></span>
              <h2>Act Now!<br />Book a flight</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="featured section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-image">
                <img src="assets/images/featured.jpg" alt="Featured" />
                <a href="property-details.html"><img src="assets/images/featured-icon.png" alt="Featured Icon" style={{ maxWidth: '60px', padding: '0px' }} /></a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-heading">
                <h6>| Featured</h6>
                <h2>Best Seats &amp; In The Sky</h2>
              </div>
              {/* Accordion */}
              <div className="accordion" id="accordionExample">
                {/* Accordion items go here */}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="info-table">
                <ul>
                  <li>
                    <img src="assets/images/info-icon-01.png" alt="Seat Space" style={{ maxWidth: '52px' }} />
                    <h4>Seat Space<br /><span>More Leg Room</span></h4>
                  </li>
                  <li>
                    <img src="assets/images/info-icon-02.png" alt="Customer Support" style={{ maxWidth: '52px' }} />
                    <h4>Customer Support<br /><span>24/7 Customer Support</span></h4>
                  </li>
                  {/* Other items */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="col-lg-8">
            <p>Copyright © FlightMatch Corporations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
