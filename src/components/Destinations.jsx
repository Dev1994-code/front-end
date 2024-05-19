import { Card, List, Input } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
const data = [
  {
    id: 1,
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Hawassa",
    description: "some description about the travel",
  },
  {
    id: 2,
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Yirgalem",
    description: "some description about the travel",
  },
  {
    id: 3,
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Bensa Daye",
    description: "some description about the travel",
  },
  {
    id: 4,
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Europe Street beat",
    description: "some description about the travel",
  },
];
const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
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
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 5,
          }}
          dataSource={filteredData}
          renderItem={(item) => (
            <List.Item>
              <Link to={`/destination/${item.id}`}>
                <Card hoverable cover={<img src={item.img} alt={item.title} />}>
                  <Card.Meta
                    title={item.title}
                    description={item.description}
                  />
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

// import MyCard from "./myCard";

// const Cards = [
//   {
//     img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//     title: "Europe Street beat",
//     description: "some description about the travel",
//   },
//   {
//     img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//     title: "Europe Street beat",
//     description: "some description about the travel",
//   },
//   {
//     img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//     title: "Europe Street beat",
//     description: "some description about the travel",
//   },
//   {
//     img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//     title: "Europe Street beat",
//     description: "some description about the travel",
//   },
// ];

// const Destinations = () => {
//   return (
//     <>
//       <div className="mx-20">
//         <div>
//           <h2>Find your best Destination</h2>
//         </div>
//         <div className="flex items-center gap-10 mb-10 mt-3">
//           {Cards.map((card, index) => (
//             <MyCard
//               key={index}
//               title={card.title}
//               description={card.description}
//               img={card.img}
//               style={{
//                 width: 400,
//                 height: 400,
//                 borderRadius: 10,
//                 border: "2px solid #ff0000",
//                 padding: 20,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Destinations;

{
  /* <MyCard
                img={item.img}
                title={item.title}
                description={item.description}
              /> */
}
