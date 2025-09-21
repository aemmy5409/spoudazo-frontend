import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getCourses, getUserDetail } from "../api/api"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function getDepartmentNames(departments) {
    return departments ? departments.map(dep => dep.name) : [];
}


export default function MyCourses ()  {

    const [courses, setCourses] = useState([])

    const { loading, error, userInfo } = useSelector(
		(state) => state.authReducer
	);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCourses = async ()  => {
            const result = await getCourses();
            const user = await getUserDetail(userInfo.user_id);

            if(!userInfo) {
                navigate("/login")
            } else {
                const filteredResult = result.filter((item) => user.level === item.level && getDepartmentNames(item.departments).includes(user.department));
                setCourses(filteredResult);  
            }
            
        }
        fetchCourses()
    }, [userInfo, navigate])

    return (
        <>
             <Navbar/>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">My Courses</h1>
                </div>
                <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                <table class="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                    <tr>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Course Code</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Course Title</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Level</th>
                        <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course.id}>
                                <td class="px-4 py-3">{course.code}</td>
                                <td class="px-4 py-3">{course.title}</td>
                                <td class="px-4 py-3">{course.level}</td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
                </div>
            </div>
        </section>
        <Footer/>
        </>
       
    )
}