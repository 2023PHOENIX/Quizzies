import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./quizForm2.module.css";
import { useEffect } from "react";
const QuestionData = ({ data, setData }) => {
  const [totalOptions, setTotalOptions] = useState([
    {
      id: uuidv4(),
    },
    { id: uuidv4() },
  ]);

  const addOption = () => {
    setData((prevData) => ({
      ...prevData,
      options: [...prevData.options, { id: uuidv4(), text: "" }],
    }));
  };
  const removeOption = (id) => {
    console.log(id);
    const updatedOptionData = data?.options?.filter(
      (option) => option.id !== id,
    );

    setData((prev) => ({ ...prev, options: updatedOptionData }));
  };
  const handleOptionChange = (e) => {
    setData((prev) => ({ ...prev, correctAnswer: e.target.value }));
  };

  const handleQuestionTypeChange = (e) => {
    setData((prev) => ({ ...prev, choiceType: e.target.name }));
  };

  const handleInputChanges = (id, type, data) => {
    if (type === "text") {
      setData((prevData) => ({
        ...prevData,
        options: prevData.options.map((option) =>
          option.id === id ? { ...option, text: data } : option,
        ),
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        options: prevData.options.map((option) =>
          option.id === id ? { ...option, url: data } : option,
        ),
      }));
    }
  };

  console.log(data?.choiceType);
  return (
    <>
      <input
        type="text"
        className={styles.questionTitle}
        placeholder="Poll Question"
        defaultValue={data?.title}
        onChange={(e) =>
          setData((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <div className={styles.choiceType}>
        <div className="choiceText">Option Type </div>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            id="option1"
            name="Text"
            checked={data?.choiceType === "Text"}
            className={styles.radioInput}
            onChange={handleQuestionTypeChange}
          />
          <label htmlFor="option1" className={styles.radioLabel}>
            Text
          </label>
        </div>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            id="option2"
            name="url"
            checked={data?.choiceType == "url"}
            className={styles.radioInput}
            onChange={handleQuestionTypeChange}
          />
          <label htmlFor="option2" className={styles.radioLabel}>
            Image URL
          </label>
        </div>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            id="option3"
            name="text&image"
            className={styles.radioInput}
            checked={data?.choiceType === "text&image"}
            onChange={handleQuestionTypeChange}
          />
          <label htmlFor="option3" className={styles.radioLabel}>
            Text & Image URL
          </label>
        </div>
      </div>
      <div className={styles.optionsToChoose}>
        {data?.options?.map((opData, index) => (
          <div className={styles.option} key={index}>
            <input
              type="radio"
              value={`option${index + 1}`}
              checked={data?.correctAnswer === `option${index + 1}`}
              onChange={handleOptionChange}
              className={styles.optionRadio}
            />
            {(data?.choiceType === "text&image" ||
              data?.choiceType === "Text") && (
              <input
                type="text"
                placeholder={
                  data?.choiceType === "text&image"
                    ? "Text"
                    : `${data?.choiceType}`
                }
                className={styles.optionInput}
                style={
                  data?.choiceType === "text&image" ? { width: "11rem" } : {}
                }
                value={data?.options[index].text}
                defaultValue={opData.text}
                onChange={(e) =>
                  handleInputChanges(opData.id, "text", e.target.value)
                }
              />
            )}
            {(data?.choiceType === "text&image" ||
              data?.choiceType === "url") && (
              <input
                type="text"
                placeholder="Image URL"
                value={data?.options[index].url}
                defaultValue={opData?.url}
                className={styles.optionInput}
                style={data?.choiceType == "url" ? {} : { width: "16rem" }}
                onChange={(e) =>
                  handleInputChanges(opData.id, "url", e.target.value)
                }
              />
            )}
            {index > 1 && (
              <div
                className={styles.deleteBucket}
                onClick={() => removeOption(opData.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                    fill="#D60000"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
        {data?.options?.length < 4 && (
          <div className={styles.addOption} onClick={addOption}>
            Add Option
          </div>
        )}{" "}
      </div>
    </>
  );
};

export default QuestionData;
