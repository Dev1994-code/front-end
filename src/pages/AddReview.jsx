import { useState } from "react";

const AddReview = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleReviewChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can perform any action with the form data, such as submitting to a server or updating state.

    // Reset the form
    setName("");
    setRating("");
    setComment("");
  };

  return (
    <div
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-4"
      style={{ height: "fit-content" }}
    >
      <h2 className="text-lg font-semibold mb-4">Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="rating"
            className="block text-gray-700 font-medium mb-2"
          >
            Rating
          </label>
          <input
            type="number"
            id="rating"
            step="0.1"
            value={rating}
            onChange={handleRatingChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
            min="1"
            max="5"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="comment"
            className="block text-gray-700 font-medium mb-2"
          >
            Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleReviewChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-lime-400 hover:bg-lime-600 text-white font-semibold py-2 px-4 rounded"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
