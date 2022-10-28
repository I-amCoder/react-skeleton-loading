import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Skelton from "../components/Skelton";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return () => {
      fetchData();
    };
  }, []);

  const fetchData = () => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setUsers(json);
          setLoading(false);
        });
    }, 1000);
  };

  return (
    <div className="row  ">
      {loading && <Skelton />}
      {loading && <Skelton />}
      {loading && <Skelton />}
      {loading && <Skelton />}
      {loading && <Skelton />}
      {loading && <Skelton />}
      {loading && <Skelton />}
      {loading && <Skelton />}
      {loading && <Skelton />}
      {loading && <Skelton />}
      {users.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Home;
