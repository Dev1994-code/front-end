import { Card, List, Input } from "antd";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Destinations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      const response = await axios.get(`http://localhost:3001/package/detail`);
      const { data } = response;
      setData(data);
      console.log("response:", response.data);
    };
    fetchPackages();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h2 className="mx-20">Find your best destination</h2>
      <div className="my-10 mx-20">
        <Input
          placeholder="Search destinations"
          value={searchQuery}
          onChange={handleSearch}
          className="mb-4 border-lime-400 border-2"
        />
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 2,
            xl: 3,
            xxl: 4,
          }}
          dataSource={filteredData}
          renderItem={(item) => (
            <List.Item className="gap-10">
              <Link to={`/destination/${item._id}`}>
                <Card
                  hoverable
                  cover={
                    <img
                      src={item.image.url}
                      alt={item.name}
                      style={{ width: "600px", height: "300px" }}
                    />
                  }
                >
                  <Card.Meta title={item.name} description={item.description} />
                </Card>
              </Link>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Destinations;
