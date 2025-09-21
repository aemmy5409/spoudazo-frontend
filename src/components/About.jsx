import pl from "../assets/pl.png"
import tc from "../assets/tc.png"
import ttet from "../assets/ttet.png"

export default function About() {
    return (
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <h1 class="text-2xl font-medium title-font mb-5 text-gray-900 text-center">WHAT WE OFFER</h1>
            <div class="flex justify-center mb-10">
                <span class="inline-block h-1 w-20 rounded bg-gray-500"></span>
            </div>
            <div class="flex flex-wrap -m-4">
                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                    <div class="h-full text-center">
                    <img alt="testimonial" class="w-20 h-20 mb-3 object-cover object-center rounded-full inline-block" src={pl}/>
                    <h2 class="leading-relaxed text-gray-900 font-medium title-font tracking-wider text-sm">PERSONALIZED LEARNING</h2>
                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <p class="leading-relaxed">Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                    </div>
                </div>
                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                    <div class="h-full text-center">
                    <img alt="testimonial" class="w-20 h-20 mb-3 object-cover object-center rounded-full inline-block" src={tc}/>
                    <h2 class="leading-relaxed text-gray-900 font-medium title-font tracking-wider text-sm">TRUSTED CONTENT</h2>
                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <p class="leading-relaxed">Created by experts, Spoudazo's library of trusted practice and lessons covers math, science, and more. Always free for learners and teachers.</p>
                    </div>
                </div>
                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                    <div class="h-full text-center">
                    <img alt="testimonial" class="w-20 h-20 mb-3 object-cover object-center rounded-full inline-block" src={ttet}/>
                    <h2 class="leading-relaxed text-gray-900 font-medium title-font tracking-wider text-sm">LECTURER EMPOWERMENT</h2>
                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <p class="leading-relaxed">With Spoudazo, lecturers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}