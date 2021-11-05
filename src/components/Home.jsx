import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* product id,title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1234"
          title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p)"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51qglq04wML._SX320_BO1,204,203,200_.jpg"
        />
        <Product
          id="12314"
          title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) "
          price={11.96}
          rating={5}
          image="https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
        />
      </div>
      <div className="home__row">
        <Product
          id="121114"
          title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p)"
          price={11.96}
          rating={5}
          image="https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
        />
        <Product
          id="1"
          title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p)"
          price={11.96}
          rating={5}
          image="https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
        />
        <Product
          id="234"
          title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p)"
          price={11.96}
          rating={5}
          image="https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
        />
      </div>
      <div className="home__row">
        <Product
          id="1234"
          title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p)"
          price={11.96}
          rating={5}
          image="https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
        />
      </div>

      {/* Product */}
    </div>
  );
};

export default Home;
