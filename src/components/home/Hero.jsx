import React from "react";
import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect";
export const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val, i) => (
          <div key={i} className="heroContent">
            <h3 data-aos="fade-up">{val.text}</h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos="fade-left">{val.desc}</p>
            <button data-aos="fade-right" className="primaryBtn">
              Download CV
            </button>
          </div>
        ))}
      </section>
    </>
  );
};
