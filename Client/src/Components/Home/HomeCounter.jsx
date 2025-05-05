import React, { useEffect, useState } from "react";

const CounterItem = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const duration = 1000; // 1 second total
    const incrementTime = 20; // ms between increments
    const steps = duration / incrementTime;
    const increment = Math.ceil(end / steps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="relative text-center">
      <h1 className="text-3xl font-semibold">{count}+</h1>
      <p className="text-sm">{label}</p>
    </div>
  );
};

const HomeCounter = () => {
  return (
    <div className="flex justify-center items-center bg-white py-10 overflow-hidden">
      <div
        className="relative w-full max-w-screen-xl text-white py-10 px-4 sm:px-10 flex flex-wrap justify-center gap-8 sm:gap-10 items-center"
        style={{
          backgroundImage: `url("/assets/Counter.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CounterItem target="500" label="Satisfied Customers" />
        <CounterItem target="11" label="Years of Experience" />
        <CounterItem target="10" label="Products" />
        <CounterItem target="50" label="Expert Engineers" />
      </div>
    </div>
  );
};

export default HomeCounter;
