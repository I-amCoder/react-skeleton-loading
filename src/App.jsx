import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Skelton from "./components/Skelton";

const App = () => {
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
    }, 2000);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="logo text-center h2 mb-4">Skelton Screen Loading</div>
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
            return <Card user={user} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
