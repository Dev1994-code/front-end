import pic from "../assets/pic.jpg";
import Destinations from "../components/Destinations";
import Blogs from "../components/Blogs";

const Landing = () => {
  return (
    <>
      <div className="flex items-center mt-20">
        <div className="mx-20">
          <h2>Travel with us!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            laborum libero aut voluptatum voluptatibus doloribus mollitia odit a
            eum magni veritatis reiciendis hic, maxime praesentium consectetur
            doloremque sunt iusto harum.
          </p>
        </div>
        <div>
          <img src={pic} alt="hero" />
        </div>
      </div>
      <div>
        <Destinations />
      </div>
      <div>
        <Blogs />
      </div>
    </>
  );
};
export default Landing;
