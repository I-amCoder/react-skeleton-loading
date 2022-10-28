import React from "react";

const Card = ({ user }) => {
  const { name, email } = user;
  return (
    <div className="col-4">
      <div className="card shadow mb-4">
        <div className="card-body">
          <img
            className="avatar"
            loading="lazy"
            src={`https://joeschmoe.io/api/v1/${name}`}
            alt="Image"
          />
          <h3>{name}</h3>
          <p>{email}</p>
          <button className="btn btn-success">Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
