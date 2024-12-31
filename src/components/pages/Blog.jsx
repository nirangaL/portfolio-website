import React from "react";
import { Heading } from "../common/Heading";
import { blog } from "../data/dummydata";

export const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading title="Blog" />
          <div className="content grid3">
            {blog.map((item, i) => (
              <div className="box">
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="text">
                  <h3>{item.title}</h3>
                  <label htmlFor="">
                    by {item.author} {item.date}
                  </label>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
