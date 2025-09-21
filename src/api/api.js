import axiosInstance from './axiosInstance';


export const getPDFSummary = async (file) => {
  console.log("Sending File to the api: ", file.name)
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axiosInstance.post("/pdf/summarize", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Failed to upload PDF:", error);
    throw error;
  }
};

export const submitTest = async (test_id, student_answers) => {
  const response = await axiosInstance.post(
    `/tests/submit?test_id=${test_id}`,
    student_answers
  );
  return response.data;
};

export const getTestCourseOpts = async (userId) => {
  const response = await axiosInstance.get(`/tests/select-course/${userId}`);
  return response.data.courses;
};

export const generateTest = async (user_id, course_id, num_questions) => {
  const response = await axiosInstance.post(
    `/tests/generate?user_id=${user_id}&course_id=${course_id}&num_questions=${num_questions}`
  );
  return response.data;
};

export const getDepartments = async () => {
  const response = await axiosInstance.get(`/departments/`);
  return response.data;
};

export const getCourses = async () => {
  const response = await axiosInstance.get(`/courses/`);
  return response.data;
};

export const getUserDetail = async (userId) => {
  const response = await axiosInstance.get(`/users/users/${userId}/`);
  return response.data;
};
