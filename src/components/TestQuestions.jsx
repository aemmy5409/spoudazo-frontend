import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { generateTest,  submitTest } from '../api/api';


export default function TestQuestions({ courseObj, numQuestions }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [testId, setTestId] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);


  const { userInfo } = useSelector((state) => state.authReducer);

  useEffect(() => {

    if (!userInfo || !userInfo.user_id) {
      return;
    }
    
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const result = await generateTest(userInfo.user_id, courseObj.id, numQuestions);
        console.log(result)
        setTestId(result.test_id);
        setQuestions(result.questions || []);
      } catch (err) {
        console.error("Failed to fetch test questions", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchQuestions();
  }, [userInfo.user_id, courseObj.id, numQuestions]);
  

  const handleChange = (questionIndex, selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmitTest = async () => {
    try {
      const totalQuestions = questions.length;
  
      const orderedAnswers = Array.from({ length: totalQuestions }, (_, i) =>
        answers[i] ? answers[i][0] : ""
      );
  
      const result = await submitTest(testId, orderedAnswers);
      setScore(result.score);
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to submit test", err);
    }
  };
  

  const optionLabels = ['A', 'B', 'C', 'D'];

    const formatOption = (optionText, index) => {
    const labelPattern = /^[A-D]\.\s/;
    return labelPattern.test(optionText)
        ? optionText
        : `${optionLabels[index]}. ${optionText}`;
    };


  return (
    <>   
    {
      loading ? (
        <div className="flex flex-col items-center justify-center text-center py-20 text-gray-600 text-lg font-medium">
            <svg
                    className="animate-spin h-8 w-8 text-blue-600 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    />
                    <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
              </svg>
              <p>Generating your test... Please wait.</p>
            </div>
      ) : (
        <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        Course Code: {`${courseObj.code} - ${courseObj.title}`}
      </h1>

      <div className="space-y-8 max-w-3xl mx-auto">
      {questions.map((question, index) => (
  <div key={index}>
    <h2 className="text-lg font-medium mb-2">
      {index + 1}. {question.question}
    </h2>
    <div className="space-y-2">
      {question.options.map((optionText, i) => {
        const isSelected = answers[index] === optionText;
        const formattedOption = formatOption(optionText, i); // e.g., "A. CPU"
        const optionLabel = formattedOption.charAt(0); // "A", "B", etc.
        const correctLabel = question.answer; // "D", for example

        let optionStyle = "text-gray-800";

        if (submitted) {
          if (optionLabel === correctLabel) {
            optionStyle = "text-green-600 font-semibold"; // ✅ correct option
          } else if (isSelected && optionLabel !== correctLabel) {
            optionStyle = "text-red-600 font-semibold"; // ❌ wrong selected
          } else {
            optionStyle = "text-gray-500"; // neutral
          }
        }

        return (
          <label key={i} className="flex items-center space-x-2">
            <input
              type="radio"
              name={`question-${index}`}
              value={optionText}
              checked={isSelected}
              onChange={() => handleChange(index, optionText)}
              className="form-radio text-blue-600"
              disabled={submitted}
            />
            <span className={optionStyle}>{formattedOption}</span>
          </label>
        );
      })}
    </div>

    {/* ✅ Move correct answer display here */}
    {submitted && (
      <p className="mt-1 text-sm text-green-700">
        Correct Answer: {question.answer}
      </p>
    )}
  </div>
))}


      

      </div>
      {!submitted && (
        <div className="flex justify-center mt-10">
            <button
            onClick={handleSubmitTest}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
            Submit Test
            </button>
        </div>
        )}

        {submitted && (
        <div className="text-center mt-10">
            <h2 className="text-2xl font-semibold text-green-600">
            You scored {score} out of {100}
            </h2>
            <p className="text-gray-600 mt-2">🎉 Test submitted successfully!</p>
        </div>
        )}

    </div>
      )
    }
    </>
    
    
  );
}
