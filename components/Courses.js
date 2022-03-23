import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";

function Courses() {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("tech");

    const categories = ["tech", "finance", "underexplored"];

    useEffect(() => {
        const colRef = query(
            collection(db, "courses"),
            where("tag", "==", category),
            orderBy("title", "asc")
        );
        getDocs(colRef).then((q) => setData(q));
    }, [category]);

    return (
        <div className="flex flex-col w-[75vw] mx-auto overflow-y-scroll scrollbar-hide">
            <h1 className="text-center text-4xl font-comicsans mt-4">
                Courses
            </h1>

            <div></div>
            <div className="grid grid-cols-3 w-full">
                {data?.docs?.map((doc) => (
                    <CourseCard
                        title={doc.data().title}
                        link={doc.data().link}
                        key={doc.data().link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Courses;

const CourseCard = (props) => {
    const router = useRouter();
    return (
        <div className="font-comicsans flex flex-col justify-between items-center h-40 bg-blue-300 pt-10 pb-5 m-5 rounded-2xl">
            <p className="text-xl">{props.title}</p>
            <button
                onClick={() => router.push(`/programs/${props.link}`)}
                className="bg-blue-500 px-10 py-2 rounded-lg"
            >
                View Course
            </button>
        </div>
    );
};
