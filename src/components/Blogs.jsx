import { Carousel } from "antd";
import { Button } from "antd";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

//
const Blogs = ({ blogs }) => {
  console.log("blogs:", blogs);
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     const response = await axios.get(`
  //       http://localhost:3001/blog/detail/${packageId}`);
  //     setBlogs(response.data);
  //   };

  //   fetchBlogs();
  // }, [packageId]);
  return (
    <div
      id="hero"
      className="heroBlock  p-4 bg-gray-100 border-2 border-lime-300 rounded-2xl mx-20 mb-10"
    >
      <Carousel>
        {blogs.map((item) => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="flex gap-4">
                {/* <img
                  src={item.image}
                  alt=""
                  className="w-40 h-40 rounded-full mt-20"
                /> */}
                <div className="mt-20">
                  <h3 className="pl-10">{item.user.name}</h3>
                  <p className=" text-gray-800 text-xl pr-60 pl-10">
                    {item.comment}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Blogs;

//const items = [
//   {
//     key: "1",
//     title: "about my tour",
//     image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//     content:
//       "Our innovative web and mobile payment solutions make transactions fast, secure, and effortless for both you and your customers. Say goodbye to the hassle of traditional payment methods and embrace the future of seamless payments.",
//   },
//   {
//     key: "2",
//     title: "about my tour",
//     image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//     content:
//       "Collaborate and achieve your goals as a team. Join forces, share ideas and leverage each others strengths to reach new heights together. Let's work together and create a brighter future for us all.",
//   },
//   {
//     key: "3",
//     title: "about my tour",
//     image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//     content:
//       "Boost your productivity and streamline your workday with our cutting-edge app. Stay organized, prioritize tasks, and never miss a deadline. Get more done in less time and achieve your goals faster than ever before.Boost your productivity and streamline your workday with our cutting-edge app. Stay organized, prioritize tasks, and never miss a deadline. Get more done in less time and achieve your goals faster than ever before",
//   },
// ];
