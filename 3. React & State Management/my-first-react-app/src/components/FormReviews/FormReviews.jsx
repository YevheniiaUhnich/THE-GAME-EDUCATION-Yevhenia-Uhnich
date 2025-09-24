import { useState } from "react";

function FormReviews() {
  const [review, setReview] = useState("");
  const [error, setError] = useState({});

  const findErrors = (val) => {
    const errs = {};
    if (val.trim().length < 3) {
      errs.review = "Повідомлення має бути більше 3 символів";
    }
    return errs;
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setReview(val);
    if (error.review) setError(findErrors(val));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = findErrors(review);
    if (Object.keys(errs).length > 0) {
      setError(errs);
      return;
    }
    setError({});
    alert("Відгук надіслано");
    setReview("");
  };

  return (
    <>
      <h1>FormReviews</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Ваші відгуки:
          <textarea
            value={review}
            onChange={handleChange}
            rows={5}
            style={{ width: "100%", resize: "vertical" }}
          />
        </label>

        {error.review && <p style={{ color: "red" }}>{error.review}</p>}

        <p>Символів: {review.length}</p>

        <button type="submit" disabled={review.trim().length < 3}>
          Надіслати
        </button>
      </form>
    </>
  );
}

export default FormReviews;
