import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [storedData, setStoredData] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState("");

  const navigate = useNavigate();

  const storeData = () => {
    document.cookie = `data=${storedData}; path=/;`;
    alert("Data stored in cookie!");
  };

  const searchCookie = () => {
    const cookies = document.cookie.split("; ");
    const dataCookie = cookies.find((row) => row.startsWith("data="));
    const value = dataCookie ? dataCookie.split("=")[1] : "";

    setResult(
      value.includes(searchValue) ? `Found: ${searchValue}` : "No match found."
    );
  };

  const clearCookies = () => {
    document.cookie = "data=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    alert("Cookies cleared!");
  };

  const logout = () => {
    navigate("/");
    localStorage.setItem("isLoggedIn", false);
  };

  //   console.log(result);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/"); // Redirect to login page
    }
  }, [navigate]);
  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1>Home Page</h1>
          <input
            type="text"
            placeholder="Enter data"
            onChange={(e) => setStoredData(e.target.value)}
          />
          <button onClick={storeData}>Submit Data</button>
          <input
            type="text"
            placeholder="Search data"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={searchCookie}>Search</button>
          <div>
            <h3>Searched Data</h3>
            <p>{result}</p>
          </div>
          <button onClick={clearCookies}>Clear Cookies</button>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div> Unable to access</div>
      )}
    </>
  );
};

export default Home;
