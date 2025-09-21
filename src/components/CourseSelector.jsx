import { useEffect, useState } from 'react';
import { getTestCourseOpts, getUserDetail } from '../api/api';
import { useSelector } from 'react-redux';

export default function CourseSelector({ onSubmit }) {
  const [course, setCourse] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  const [courseOpts, setCourseOpts] = useState([]);

  const { loading, error, userInfo } = useSelector(
    (state) => state.authReducer
);

  useEffect(() => {
    if (!userInfo) return;
    const fetchCourses = async () => {
      try {
        const result = await getTestCourseOpts(userInfo.user_id);
        const user = await getUserDetail(userInfo.user_id)
        const filteredCourses = result.filter(item => item.level === user.level)
        setCourseOpts(filteredCourses)
      } catch (err) {
        console.error("Failed to fetch courses", err);
      }
    };

    fetchCourses();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (course && numQuestions) {
      const selectedCourse = courseOpts.find(c => c.title === course);
      onSubmit({ courseObj: selectedCourse, numQuestions: Number(numQuestions) });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4"
      >

        <div>
                <label htmlFor="course" className="block text-lg font-medium text-gray-900 text-center">
                  Generate Test:
                </label>
                <div className="mt-2">
                  <select
                    id="course"
                    name="course"
                    required
                    className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-base"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  >
                    <option value="" disabled selected>Select a course</option>
                    {courseOpts.map(courseOpt => (<option value={courseOpt.title} key={courseOpt.id}>{`${courseOpt.code} - ${courseOpt.title}`}</option>)
                    )}
                    
                  </select>
                </div>
            </div>

            <div>
              <label htmlFor="numQuestions" className="block text-lg font-medium text-gray-900 text-center">
                Number of Questions:
              </label>
              <input
                type="number"
                id="numQuestions"
                name="numQuestions"
                min={1}
                max={30} // or any max limit you want
                required
                value={numQuestions}
                onChange={(e) => setNumQuestions(e.target.value)}
                className="mt-2 block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-base"
                placeholder="Enter number of questions"
              />
            </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Start Test
        </button>
      </form>
    </div>

  );
}

