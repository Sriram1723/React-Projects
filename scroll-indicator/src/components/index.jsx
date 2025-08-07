import React, { useEffect, useState } from "react";
const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [percentage,setPercentage] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data.products);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setError(e.message);
      }
    }
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    const scrolled = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentage = Math.round((scrolled / height)*100) ;
    setPercentage(percentage);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
    window.removeEventListener("scroll", handleScrollPercentage);
  };
  }, []);
  return !loading ? (
    <div className="container">
        <div className="top-container">
            <h1 className="title">Custom Scroll Indicator</h1>
            <div className="scroll-container">
            <div className="scroll-percentage" style={{width:`${percentage}%`}}></div>
            </div>
        </div>
        <div className="content">
            {data.map((item) => (
                <h3 key={item.id}>{item.title}</h3>
            ))}
        </div>
    </div>
  ) : (
    <div>loading... {error}</div>
  );
};

export default ScrollIndicator;
