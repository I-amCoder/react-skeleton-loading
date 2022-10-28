import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  const { id, name, email } = user;
  return (
    <div className="col-4">
      <div className="card shadow mb-4">
        <div className="card-body">
          <img
            className="avatar"
            loading="lazy"
            src={`https://joeschmoe.io/api/v1/${name}`}
            alt={name}
          />
          <h3>{name}</h3>
          <p>{email}</p>
          <button className="btn btn-success">
            <Link className="nav-link" to={`user/${id}`}>
              See
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
