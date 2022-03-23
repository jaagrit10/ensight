import React from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Navbar() {
    const signIn = () => {
        signInWithPopup(auth, provider);
    };

    const signout = () => {
        signOut(auth);
    };

    const [user] = useAuthState(auth);

    return (
        <div className="h-20 shadow-xl px-10 py-2 bg-blue-500 flex items-center">
            <div className="h-full flex px-20 w-1/3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/logofinal.png"
                    alt="ensight"
                    className="h-full object-contain cursor-pointer"
                />
            </div>
            <div className="w-1/3 flex items-center justify-between">
                <p className="cursor-pointer text-white font-comicsans">
                    Explore Programs
                </p>
                <p className="cursor-pointer text-white font-comicsans">
                    FAQ&apos;s
                </p>
            </div>
            <div className="w-1/3 flex items-center justify-end h-full py-3 space-x-2 cursor-pointer">
                {!user ? (
                    <>
                        <p
                            className="cursor-pointer text-white font-comicsans"
                            onClick={signIn}
                        >
                            Sign In
                        </p>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/google.png"
                            alt=""
                            className="h-full object-contain"
                            onClick={signIn}
                        />
                    </>
                ) : (
                    <p
                        className="cursor-pointer text-white font-comicsans"
                        onClick={signout}
                    >
                        Hi, {user.displayName}
                    </p>
                )}
            </div>
        </div>
    );
}
