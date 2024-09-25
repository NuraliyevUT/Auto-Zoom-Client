import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CustomSkeleton = ({ children, loading, ...props }) => {
  if(!loading){
    return children
  }

  return (
    <Skeleton
      width={265}
      baseColor="#a5a5b3"
      highlightColor="#777983"
      {...props}
    >
      {children}
    </Skeleton>
  );
};

export default CustomSkeleton;
