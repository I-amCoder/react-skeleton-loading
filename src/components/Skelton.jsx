import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skelton = () => {
  return (
    <div className="col-4">
      <div className="card shadow mb-4">
        <Skeleton
          className="avatar m-3"
          width={"80px"}
          height={"80px"}
          borderRadius={"100%"}
        ></Skeleton>

        <div className="card-body">
          <h3>
            <Skeleton />
          </h3>
          <p>
            <Skeleton />
          </p>
          <Skeleton className="p-2" width={"100px"}></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default Skelton;
