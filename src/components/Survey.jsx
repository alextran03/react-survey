import { useState } from "react";
import OptionGroup from "./OptionGroup";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); 
  const [formData, setFormData] = useState({
    colour: "",
    timeSpent: [],
    review: "",
    username: "",
    email: "",
  })

  const [answers, setAnswer] = useState([]);

  function handleChange(event) {
    const {name, value} = event.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }

  function handleCheckBoxChange(event) {
    const { value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      timeSpent: checked
      ? [...prev.timeSpent, value]
      : prev.timeSpent.filter((item) => item !== value),
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setAnswer((prev) => [...prev, formData]);
    setFormData({
    colour: "",
    timeSpent: [],
    review: "",
    username: "",
    email: "",
  });
  }

  const checkBoxOptions = [
    {value: "swimming", label: "Swimming"},
    {value: "bathing", label: "Bathing"},
    {value: "chatting", label: "Chatting"},
    {value: "noTime", label: "No Time"}
  ];

  const colorOptions = [
    {value: "1", label: "1"},
    {value: "2", label: "2"},
    {value: "3", label: "3"},
    {value: "4", label: "4"},
  ]



  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList = {answers} />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <OptionGroup
              options={colorOptions}
              type="radio"
              name="colour"
              isChecked={(value) => formData.colour === value}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <OptionGroup
              options={checkBoxOptions}
              type="checkbox"
              name="spend-time"
              isChecked={(value) => formData.timeSpent.includes(value)}
              onChange={handleCheckBoxChange}
            />
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10" value={formData.review} onChange={handleChange}></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
