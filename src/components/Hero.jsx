import {Link} from 'react-router-dom'
// import { ChevronDownIcon } from '@heroicons/react/16/solid'

import heroImage from "../assets/robot.jpeg"

export default function Hero() {
    return (
        <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Spoudazo
                        <br class="hidden lg:inline-block"/>(Greek: σπουδάζω)
                    </h1>
                    <p class="mb-8 leading-relaxed"> Simply means to act with diligence, eagerness, and purposeful effort. 
                            Spoudazo is not just an AI study tool; it is an ideal study environment. A platform that provides you with everything that makes you eager to study more diligently and channel your efforts purposefully.
                            Spoudazo helps drill students and improves their overall performance. It tracks your study hours, generates questions, offers insights, supplies resources, and enables study group sessions.
                            The best part is that spoudazo enables the student to control the pace and intensity, making it the ideal tool for students.</p>
                    <div class="flex justify-center">
                        <Link to='/register' class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</Link>
                    </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src={heroImage}/>
                    </div>
                </div>
            </section>
    )
}