/* eslint-disable @next/next/no-img-element */
export default function Banner() {
    return (
        <div className="h-[calc(100vh-5rem) flex flex-col w-[75vw] mx-auto overflow-y-scroll scrollbar-hide">
            <div className="bg-white mt-16 flex items-center justify-center rounded-lg shadow-2xl">
                <p className="py-[1.5rem] font-comicsans text-2xl">
                    Initiative for the students, by the students
                </p>
            </div>

            <div className="flex items-center justify-between w-full my-[3rem]">
                <div className="w-[22rem] font-[600] space-y-1">
                    <p className="text-lg">The only programme with</p>
                    <p className="text-4xl font-comicsans font-black">
                        Instant doubt Support and Mentorship
                    </p>
                    <p className="text-lg">from the best</p>
                </div>

                <img
                    src="/images/study.jpg"
                    alt="study krlo"
                    className="w-1/2 object-contain shadow-lg rounded-xl"
                />
            </div>

            <div className="mx-auto py-2">
                <button className="border-[3px] font-[500] border-blue-700 px-4 py-1 text-lg cursor-pointer rounded-lg">
                    How does it work?
                </button>
            </div>

            <div className="w-full bg-blue-400 rounded-xl flex justify-between space-x-4 my-6">
                <div className="w-1/3 pl-16 my-auto">
                    <h2 className="text-xl font-black">Brighten up Yourself with some Latest Skills</h2>
                    <p className="text-md font-[500]">
                        Learn any skill at your own pace with personal
                        mentorship and immediate doubt clearing by your own
                        dude.
                    </p>

                    <button className="bg-white px-12 mt-4 py-1 rounded-lg font-[500]">Explore Programs</button>
                </div>

                <div className="w-1/2 p-6">
                    <img src="/images/logofinal.png" alt="" className="w-full object-contain" />
                </div>
            </div>
        </div>
    );
}
