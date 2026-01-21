import React from "react";
import Layout from "./Layout";
import { BiLogoGithub, BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Layout title={"GimSlice Pizzeria - Contact"}>
        <div
          className="row contactus align-items-center"
          style={{ marginTop: "50px" }}
        >
          <div className="col-md-6 text-center">
            <img
              src="/images/pizza2.png"
              alt="contactus"
              className="img-fluid rounded"
              style={{ width: "60%" }}
            />
          </div>
          <div className="col-md-4" style={{ textAlign: "justify" }}>
            <h1 className="bg-dark p-2 text-warning text-center mt-2">
              CONTACT US
            </h1>
            <p className="text-justify mt-2">
              Any query and info about the product, feel free to call anytime;
              we are available 24X7.
            </p>
            <p className="mt-3">
              <BiMailSend />:<a href="https://mail.google.com/mail/?view=cm&fs=1&to=mauricegitech@gmail.com&su=Pizza%20Order&body=Hi%20GimSlize%20Pizzeria">🍕 Slice Into Our Inbox</a>
            </p>
            <p className="mt-3">
              <BiPhoneCall /> : 254768865588 
            </p>
            <p className="mt-3">
              <BiSupport /> : 0768865588 (toll free)
            </p>
            <p className="mt-3">
              <BiLogoGithub /> :<a href="https://github.com/Mauricegitech">https://github.com/Mauricegitech</a>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
