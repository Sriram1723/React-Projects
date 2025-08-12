import React, { useEffect } from "react";
import User from "./user";
import { useState } from "react";
const GithubProfileFinder = () => {
  const [username, setUserName] = useState("sriram1723");
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  async function fetchData(name){
    try{
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${name}`)
        const data = await response.json();
        setUserData(data);
        setLoading(false)
    }
    catch(e){
        console.log(e.message);
    }
  }
  useEffect(() => {
    fetchData(username);
    // eslint-disable-next-line
  },[]);
  return (
    <div className="container">
      <div className="title">Github Profile Finder</div>
      <div className="input-fields">
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => fetchData(username)}>submit</button>
      </div>
      <div className="user-details">
        {loading ? (
          <div>Loading please wait ...</div>
        ) : userData && userData.login ? (
          <User user={userData} />
        ) : (
          <div>No user found</div>
        )}
      </div>
    </div>
  );
};

export default GithubProfileFinder;
