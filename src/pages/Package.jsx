import { Button } from "antd";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const Package = () => {
  const { id } = useParams();

  // const packages = [
  //   {
  //     id: 1,
  //     aboutThisTour: "About this tour",
  //     description1: "some description about the travel",
  //     highlight: "Highlight",
  //     priceInfo: "Price Info",
  //     priceDescription: "lorem ipsum   fpoewfnd  fjeifiodsa noewds nejwiofcx ",
  //     description2:
  //       "Upon arrival at Bole International Airport, you will be met by a Welcome Ethiopia Tours representative and be taken to your reserved hotel. Depending on your arrival time, we have various sightseeing options:\n\n- Mount Entoto with the best views over the capital.\n\n- Institute of Ethiopian Studies, where you can see a variety of artifacts from all the different regions reflecting the history and culture of the country.\n\n- National Museum which among other exhibits the 3.5-million-year-old bones of Lucy.\n\n- Trinity Cathedral: This is the burial place of members of the imperial family and noted patriots; the cathedral is the most magnificent of its kind in the country, ornamented with carvings, mosaics, and other artistic works.\n\n- The Mercato, the largest open-air market in Africa.",
  //     day1: "Day 1: Arrival in Hawassa and City Tour",
  //     description3: "some description about the travel",
  //     img: "https://cdn.pixabay.com/photo/2023/12/01/21/50/sunset-8424565_1280.jpg",
  //     day2: "Day 1: Arrival in Hawassa and City Tour",
  //     description4: "some description about the travel",
  //     img2: "https://cdn.pixabay.com/photo/2023/12/01/21/50/sunset-8424565_1280.jpg",
  //   },
  //   {
  //     id: 2,
  //     aboutThisTour: "About this tour",
  //     description1: "smiowehcdos adoaiosd endhuis djkaldika jiwe",
  //     highlight: "Highlight",
  //     description2:
  //       "Upon arrival at Bole International Airport, you will be met by a Welcome Ethiopia Tours representative and be taken to your reserved hotel. Depending on your arrival time, we have various sightseeing options:\n\n- Mount Entoto with the best views over the capital.\n\n- Institute of Ethiopian Studies, where you can see a variety of artifacts from all the different regions reflecting the history and culture of the country.\n\n- National Museum which among other exhibits the 3.5-million-year-old bones of Lucy.\n\n- Trinity Cathedral: This is the burial place of members of the imperial family and noted patriots; the cathedral is the most magnificent of its kind in the country, ornamented with carvings, mosaics, and other artistic works.\n\n- The Mercato, the largest open-air market in Africa.",
  //     priceInfo: "Price Info",
  //     priceDescription: "lorem ipsum   fpoewfnd  fjeifiodsa noewds nejwiofcx ",
  //     day1: "Day 2: Arrival in daye and City Tour",
  //     description3: "some description about the travel",
  //     img: "https://cdn.pixabay.com/photo/2023/12/01/21/50/sunset-8424565_1280.jpg",
  //     day2: "Day 2: Arrival in Hawassa and City Tour",
  //     description4: "some description about the travel",
  //     img2: "https://cdn.pixabay.com/photo/2023/12/01/21/50/sunset-8424565_1280.jpg",
  //   },
  // ]
  const [specificPackage, setSpecificPackage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cookies, setCookies] = useCookies(["access_token"]);
  const token = cookies["access_token"];
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/package/detail/${id}`
        );
        console.log("SpecificPackage:", response.data);
        setSpecificPackage(response.data);
      } catch (error) {
        console.error("Error fetching the package:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, [id]);

  // const specificPackage = packages.find(
  //   (selected) => selected.id === parseInt(params.id)
  // );

  return (
    <div>
      {specificPackage && (
        <>
          <div>
            <h2 className="mt-16 text-3xl font-bold mb-4 mx-8">
              {/* {specificPackage.aboutThisTour}: */}
              About this Tour
            </h2>
            <p className="text-gray-700 mb-8 text-xl mx-8">
              {specificPackage.description}
            </p>
          </div>
          <div className="mx-12  py-8  md:px-0">
            <div className="flex flex-col md:flex-row md:justify-between mx-2 gap-20 md:mx-0">
              <div className="card bg-white border-t-4 border-green-500 rounded-lg overflow-hidden shadow-lg flex-1 md:mr-4">
                <div className="p-4">
                  <h1 className="text-3xl font-bold mb-4">Activities</h1>
                  <ul className="list-disc list-inside">
                    {specificPackage.activities?.map((activity, index) => (
                      <li key={index} className="text-gray-700">
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-12  py-8  md:px-0">
            <div className="flex flex-col md:flex-row md:justify-between mx-2 gap-20 md:mx-0">
              <div className="card bg-white border-t-4 border-green-500 rounded-lg overflow-hidden shadow-lg flex-1 md:mr-4">
                <div className="p-4">
                  <h1 className="text-3xl font-bold mb-4">
                    {specificPackage.priceInfo}
                  </h1>
                  <p className="text-gray-700 mb-8 text-xl">
                    {specificPackage.priceDescription}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 mb-4 md:mb-0"></div>
            </div>
          </div>

          {specificPackage.itinerary?.map((item, index) => (
            <div key={index} className="mb">
              <div className="mx-12  py-8  md:px-0">
                <div className="flex flex-col md:flex-row md:justify-between mx-2 gap-20 md:mx-0">
                  <div className="card bg-white border-t-4 border-green-500 rounded-lg overflow-hidden shadow-lg flex-1 md:mr-4">
                    <div className="p-4">
                      <div>
                        <p className="text-gray-700">
                          <h3 className="font-semibold">{item.day}: </h3>
                          {item.info}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <div className="w-full h-96 object-cover w-full h-full rounded-lg">
                      <img
                        src={specificPackage.image.url}
                        alt="specificPackage.image.url"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 
          <div className="mx-12  py-8  md:px-0">
            <div className="flex flex-col md:flex-row md:justify-between mx-2 gap-20 md:mx-0">
              <div className="card bg-white border-t-4 border-green-500 rounded-lg overflow-hidden shadow-lg flex-1 md:mr-4">
                <div className="p-4">
                  <h1 className="text-3xl font-bold mb-4">
                    {specificPackage.day2}
                  </h1>
                  <p className="text-gray-700 mb-8 text-xl">
                    {specificPackage.description4}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <div className="w-full h-96 object-cover w-full h-full rounded-lg">
                  <img
                    src="https://cdn.pixabay.com/photo/2023/12/01/21/50/sunset-8424565_1280.jpg"
                    alt="City Image"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </>
      )}
      <div className="flex justify-center items-center my-10">
        <Button
          className={
            token
              ? "bg-lime-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center"
              : "opacity-50 cursor-not-allowed"
          }
          onClick={() => navigate(`/book/${specificPackage._id}`)}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};
export default Package;

{
  /* <div>
      <img className="h-[200px] w-[200px] bg-black" />
      <h1 className="mt-12 mb-96">Package{params.id}</h1>;
    </div> */
}
