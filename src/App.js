import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import "./App.css";
import Instagram from "./components/instagram";
import Manual from "./components/manual";
import Twitter from "./components/twitter";

function App() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [tagName, setTagName] = useState("All");

  const fetchData = () => {
    fetch("https://private-cc77e-aff.apiary-mock.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const sorted = data.items.sort(function (a, b) {
          var firstDate = new Date(a.item_created);
          var secondDate = new Date(b.item_created);
          return secondDate - firstDate;
        });
        setResult(sorted);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
    showFilteredData();
  }, []);

  const handleLoad = (tab) => {
    setLoadMoreLoading(true);

    try {
      fetch("https://private-cc77e-aff.apiary-mock.com/posts")
        .then((response) => response.json())
        .then((data) => {
          const sorted = data.items.sort(function (a, b) {
            var firstDate = new Date(a.item_created);
            var secondDate = new Date(b.item_created);
            return secondDate - firstDate;
          });
          const result = sorted;
          const allData = result.filter((data) => data.service_name === tab);
          if (tab === "All") {
            setResult((prevState) => [...prevState.concat(...result)]);
          } else {
            setFilteredData((prevState) => [...prevState.concat(...allData)]);
          }

          setLoadMoreLoading(false);
        });
    } catch (error) {
      setLoadMoreLoading(false);
    }
  };

  const buttons = ["All", "Manual", "Instagram", "Twitter"];

  const handleFilter = (e) => {
    setTagName(e.target.value);
    if (e.target.value === "All") {
      setFilteredData(result);
    } else {
      const serviceNameArray = result.filter(
        (data) => data.service_name === e.target.value
      );
      setFilteredData(serviceNameArray);
    }
  };

  const breakpoint = {
    default: 5,
    1100: 4,
    768: 2,
    300: 1,
  };

  const showFilteredData = () => {
    if (filteredData.length > 0) {
      return filteredData;
    } else {
      return result;
    }
  };

  return (
    <div className="app">
      <div className="filter-btns">
        {buttons.map((button, index) => (
          <button
            className="filter-btn"
            key={index}
            value={button}
            onClick={handleFilter}
          >
            {button}
          </button>
        ))}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="result">
          <Masonry
            breakpointCols={breakpoint}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {showFilteredData().map((data, index) => (
              <div className="item_data" key={index}>
                {data.service_name === "Manual" && <Manual data={data} />}

                {data.service_name === "Twitter" && <Twitter data={data} />}

                {data.service_name === "Instagram" && <Instagram data={data} />}
              </div>
            ))}
          </Masonry>
        </div>
      )}
      {loadMoreLoading && <p>Loading...</p>}
      <button className="load-btn" onClick={() => handleLoad(tagName)}>
        Load more
      </button>
    </div>
  );
}

export default App;
