import React, { useState } from "react";
import { useEffect } from "react";
import './styles.css'
const SearchAutocomplete = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users.map((item) => item.firstName));
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  function handleOnChange(e) {
    const query = e.target.value.toLowerCase();
    setUsername(query);
    if (query.length > 0) {
      setFilteredUsers(
        users.filter(
          (item) => item.toLowerCase().substring(0, query.length) === query
        )
      );
    }
    else{
        setFilteredUsers([])
    }
  }

  useEffect(() => {
    console.log(filteredUsers);
  }, [filteredUsers]);

  useEffect(() => {
    fetchData();
  }, []);

  function handleFilteredUserClick(item){
    setUsername(item);
    setFilteredUsers([]);
  }
  console.log(users);
  return (
    <div>
      {!loading ? (
        <div className="wrapper">
            <h2>Search Autocomplete</h2>
          <input
            placeholder="search the user ..."
            value={username}
            onChange={(e) => handleOnChange(e)}
          ></input>
          <div className="suggestions">
            {
                filteredUsers.map((item) => <li onClick={() => handleFilteredUserClick(item)}>{item}</li>)
            }
          </div>
        </div>
      ) : (
        <div>Loading please wait ...</div>
      )}
    </div>
  );
};

export default SearchAutocomplete;
