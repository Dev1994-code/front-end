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

import { Card, List } from "antd";
const data = [
  {
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Europe Street beat",
    description: "some description about the travel",
  },
  {
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Europe Street beat",
    description: "some description about the travel",
  },
  {
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Europe Street beat",
    description: "some description about the travel",
  },
  {
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Europe Street beat",
    description: "some description about the travel",
  },
];
const Destinations = () => {
  return (
    <div>
      <h2 className="mx-20">Find your best destination</h2>
      <div className="my-10 mx-20">
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4,
            xxl: 5,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card hoverable cover={<img src={item.img} />}>
                <Card.Meta title={item.title} description={item.description} />
              </Card>
              {/* <MyCard
                img={item.img}
                title={item.title}
                description={item.description}
              /> */}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
export default Destinations;
