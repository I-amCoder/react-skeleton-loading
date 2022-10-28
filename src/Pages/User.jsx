import React, { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate, useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return () => {
      fetchUser(id);
    };
  }, []);
  const fetchUser = (id) => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setUser(json);
          setLoading(false);
        });
    }, 1000);
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card shadow">
            <div className="card-body">
              <div className="">
                {loading ? (
                  <Skeleton
                    className="m-3"
                    width={"80px"}
                    height={"80px"}
                    borderRadius={"100%"}
                  />
                ) : (
                  <img
                    className="avatar m-4"
                    src={`https://joeschmoe.io/api/v1/${user.name}`}
                    alt=""
                  />
                )}
                <h3>{user.name || <Skeleton />}</h3>
                <p>{user.email || <Skeleton count={1} />}</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            {!loading ? (
              <button className="btn btn-lg shadow mt-4 btn-success">
                <Link className="nav-link" to={"/"}>
                  Back
                </Link>
              </button>
            ) : (
              <Skeleton className="btn btn-lg mt-4" width={"80px"} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
