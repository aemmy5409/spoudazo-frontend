import { useState } from "react";

import CourseSelector from "../components/CourseSelector";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TestQuestions from "../components/TestQuestions";

export default function Test() {
    const [testSettings, setTestSettings] = useState(null);

    const handleCourseSubmit = ({ courseObj, numQuestions }) => {
        setTestSettings({ courseObj, numQuestions });
      };
      return (
        <>
          <Navbar />
          {!testSettings ? (
            <CourseSelector onSubmit={handleCourseSubmit} />
          ) : (
            <TestQuestions
              courseObj={testSettings.courseObj}
              numQuestions={testSettings.numQuestions}
            />
          )}
          <Footer />
        </>
      );
    }