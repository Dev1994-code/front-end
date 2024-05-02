import { Carousel } from "antd";

const items = [
  {
    key: "1",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    content:
      "Our innovative web and mobile payment solutions make transactions fast, secure, and effortless for both you and your customers. Say goodbye to the hassle of traditional payment methods and embrace the future of seamless payments.",
  },
  {
    key: "2",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    content:
      "Collaborate and achieve your goals as a team. Join forces, share ideas and leverage each others strengths to reach new heights together. Let's work together and create a brighter future for us all.",
  },
  {
    key: "3",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    content:
      "Boost your productivity and streamline your workday with our cutting-edge app. Stay organized, prioritize tasks, and never miss a deadline. Get more done in less time and achieve your goals faster than ever before.Boost your productivity and streamline your workday with our cutting-edge app. Stay organized, prioritize tasks, and never miss a deadline. Get more done in less time and achieve your goals faster than ever before",
  },
];
const Blogs = () => {
  return (
    <div id="hero" className="heroBlock bg-green-300 mb-5">
      <Carousel>
        {items.map((item) => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="flex gap-4 mt-20">
                <img
                  src={item.image}
                  alt=""
                  className="w-40 h-40 rounded-full"
                />
                <p className="pr-16">{item.content}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Blogs;
