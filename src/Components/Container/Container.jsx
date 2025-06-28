import React from "react";

const Container = ({ children }) => {
  return (
    <div className='h-screen mx-auto lg:w-8/12 w-11/12'>{children}</div>
  );
};

export default Container;
