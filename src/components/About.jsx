import React from "react";
import Layout from "./Layout";

const About = () => {
  return (
    <>
      <Layout title={"GimSlice Pizzeria - About"}>
        <div
          className="row aboutus align-items-center"
          style={{ marginTop: "25px" }}
        >
          <div className="col-md-6 text-center">
            <img
              src="/images/pizza3.png"
              alt="aboutus"
              className="img-fluid rounded"
              style={{ width: "92%" }}
            />
          </div>
          <div className="col-md-5" style={{ textAlign: "justify" }}>
            <h1 className="bg-dark p-2 text-warning text-center mt-2">
              ABOUT US
            </h1>
            <p className="text-justify mt-3">
              Welcome to GimSlice Pizzeria — where every slice is a delight!  
              At GimSlice Pizzeria, we are passionate about delivering the finest pizzas right to your doorstep. What began as a simple love for great food has grown into a mission: to craft pizzas that bring people together, spark joy, and satisfy cravings with every bite.
            </p>
            <h3 style={{ color: "#808dc7", fontWeight: "bold" }}>🍕 Our Story</h3>
            <p className="text-justify mt-3">
              Founded by Maurice Githinji & Born in Nairobi’s vibrant heart, GimSlice was created to blend tradition with creativity. We believe pizza is more than just food — it’s an experience. From hand‑tossed crusts to carefully selected toppings, every detail is chosen to ensure flavor, freshness, and delight.
            </p>
            <h3 style={{ color: "#808dc7", fontWeight: "bold" }}>🌱 Our Values</h3>
            <p className="text-justify mt-3">
              Quality First: Only the freshest ingredients make it onto our pizzas. <br />
              Community Spirit: We’re proud to serve families, friends, and neighbors with warmth and care. <br />
              Innovation: Classic recipes meet bold new flavors, giving you endless topping combinations. <br />
              Convenience: Whether dining in or ordering online, we make sure your slice arrives hot and satisfying.
            </p>
            <h3 style={{ color: "#808dc7", fontWeight: "bold" }}>🚚 Our Promise</h3>
            <p className="text-justify mt-3">
              From the oven to your table, GimSlice guarantees speed, flavor, and consistency. Whether it’s a casual night in, a celebration, or a quick lunch, we deliver pizzas that live up to our tagline: Every slice, a delight
              Our commitment to quality ingredients, exceptional taste, and speedy
              delivery makes us the go-to choice for pizza lovers.
            </p>
            <h3 style={{ color: "#808dc7", fontWeight: "bold" }}>👩‍🍳 Behind Every Slice</h3>
            <p className="text-justify mt-2">
              At GimSlice, we’re more than pizza makers—we’re a dedicated professionalspassionate team devoted to creating flavors that bring joy to everyone. 
              From the oven to your table, our dedication shines through in every slice, turning meals into moments of connection and celebration.
              What started as a simple vision — to spread happiness through irresistible pizzas and the ease of doorstep delivery — has grown into a promise we live by every day. 
              Guided by tradition yet fueled by creativity, we continue to craft pizzas that delight with every bite.
            </p>
            <p className="text-justify mt-2">
              Explore our carefully curated menu, made with the freshest ingredients to deliver bold, mouth‑watering flavors. 
              Whether you’re craving a timeless Margherita or daring new toppings, there’s something at GimSlice for every taste and occasion.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
