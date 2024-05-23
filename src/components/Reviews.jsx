import ReactPaginate from "react-paginate";
import { useState } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
const Reviews = () => {
  const reviewsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "antneh Smith",
      rating: 4.8,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Sara Johnson",
      rating: 4.2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      name: "Elsa Johnson",
      rating: 4.2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      name: "estif Johnson",
      rating: 4.2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      name: "Yonas Johnson",
      rating: 4.2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 7,
      name: "eyoel Johnson",
      rating: 4.2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const [cookies, setCookies] = useCookies(["access_token"]);
  const token = cookies["access_token"];
  const pageCount = Math.ceil(reviews.length / reviewsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const offset = currentPage * reviewsPerPage;
  const currentReviews = reviews.slice(offset, offset + reviewsPerPage);

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-lime-300 rounded-full flex items-center justify-center text-gray-700 font-semibold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 capitalize">
                    {review.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2.928l2.928 6.672 6.672.672-4.82 4.85 1.14 6.987L10 15.657l-6.92 3.42 1.14-6.987L.4 10.272l6.672-.672L10 2.928zm0 2.399L7.59 9.3H2.93l5.66 3.971L6.47 17.7 10 13.56l3.53 4.14-1.12-4.43L17.07 9.3h-4.66L10 5.327z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{review.rating}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 mt-4">{review.comment}</p>
            </div>
          ))}
          <div className="mt-8 flex justify-center">
            <ReactPaginate
              previousLabel={
                <span className="text-gray-500 text-xl">&lt;</span>
              }
              nextLabel={<span className="text-gray-500 text-xl">&gt;</span>}
              pageCount={pageCount}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
              className="flex items-center justify-center gap-5 text-xl"
            />
          </div>
        </div>
      </div>
      {token && (
        <div className="flex justify-end mb-8">
          <div className="ml-auto">
            <Link to="/addReview">
              <Button className="flex items-center bg-lime-500 hover:bg-lime-600  text-white font-semibold py-2 px-4 rounded mr-9">
                <PlusOutlined className="mr-2" />
                Add Review
              </Button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};
export default Reviews;
