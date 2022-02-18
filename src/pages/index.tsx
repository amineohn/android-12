import Icons from "@/components/icons";
import { useRouter } from "next/router";
import { getHours, getMinutes } from "date-fns";
import { useEffect, useState } from "react";

export default function Home() {
    const router = useRouter();
    const hours = getHours(new Date());
    const minutes = getMinutes(new Date());
    const [loadingScreen, setLoadingScreen] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoadingScreen(false);
        }, 1500);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 select-none">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="absolute">
                    <svg width="762" height="800" version="1.1" viewBox="0 0 762 1640" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(0 517.48)">
                            <path d="m760-44.98v100" fill="none" stroke="#000" strokeWidth="20" />
                            <path d="m760 135.02v200" fill="none" stroke="#000" strokeWidth="20" />
                            <g>
                                <rect y="-516.48" width="759" height="1639" rx="52.5" ry="52.5" />
                                <rect x="9" y="-497.48" width="741" height="1600" rx="35" ry="35" fill="#333" />
                                <rect x="21.25" y="-477.48" width="716.5" height="1550" rx="30" ry="30" fill="#ddd" />
                                <circle className="z-[9999]" cx="379.5" cy="-442.48" r="20" fill="#222" />
                            </g>
                        </g>
                    </svg>
                </div>
                {loadingScreen ? (
                    <div className="w-[352px] z-20 h-[765px] rounded-2xl bg-cover bg-center bg-black">
                        <div className="flex flex-col space-y-5 justify-between items-center my-60">
                            <svg className="w-44 h-44" viewBox="0 0 196 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M98 196C152.124 196 196 152.124 196 98C196 43.8761 152.124 0 98 0C43.8761 0 0 43.8761 0 98C0 152.124 43.8761 196 98 196Z" fill="#3DDC84" />
                                <path
                                    d="M49.7656 52.2922C53.8108 52.3165 57.682 53.9405 60.5339 56.8095C63.3857 59.6785 64.9863 63.5594 64.9862 67.6047V143.708"
                                    stroke="white"
                                    stroke-width="6.13"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M146.234 143.708H85.3059V128.472C85.3059 120.39 88.5163 112.64 94.2309 106.925C99.9455 101.21 107.696 98 115.778 98H131.09C133.097 98 135.084 97.6033 136.936 96.8327C138.789 96.062 140.471 94.9327 141.886 93.5096C143.3 92.0864 144.419 90.3977 145.179 88.5404C145.938 86.6831 146.323 84.694 146.311 82.6875C146.313 75.4873 143.766 68.5188 139.121 63.0176C134.475 57.5163 128.032 53.8378 120.933 52.6342C113.834 51.4305 106.538 52.7796 100.339 56.4421C94.1399 60.1046 89.438 65.8439 87.0668 72.6425C86.4909 74.283 86.0505 75.9679 85.75 77.6803"
                                    stroke="white"
                                    stroke-width="6.13"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </div>
                        <span className="text-white">Android</span>
                    </div>
                ) : (
                    <>
                        <div className="w-[352px] z-20 h-[765px] rounded-2xl bg-cover bg-center bg-[url('/static/images/wallpaper.png')]">
                            <div className="h-12 scale-up-center">
                                <div className="flex justify-between items-center py-2 px-2">
                                    <div className="flex justify-between items-center ml-2">&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</div>
                                    <div className="ml-[24.3px] mb-0.5">
                                        <div className="bg-black border-2 border-neutral-700 w-5 h-5 rounded-full"></div>
                                    </div>
                                    <div className="flex justify-center px-2">
                                        <div className="flex justfiy-end items-center space-x-1.5">
                                            <Icons icon="WIFI" className="w-[13.3px] h-[13.3px]" style={null} />
                                            <Icons icon="LTE" className="w-[14.67px] h-[11.33px]" style={null} />
                                            <Icons icon="Battery" className="w-2 h-[13.33px]" style={null} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start px-5 py-9">
                                <span className="text-white font-medium scale-up-center">Sun, Oct 31</span>
                            </div>
                            <div className="flex flex-col justify-center items-center py-9">
                                <div className="w-[336px] h-[352px] flex flex-col items-center justify-center scale-up-center">
                                    <div className="text-[#9CF6B1] flex flex-col items-center justify-center text-[11rem]">
                                        <span className="">{hours}</span>
                                        <span className="-mt-24 ml-4">{minutes}</span>
                                    </div>
                                </div>
                                <div className="py-16 scale-up-center">
                                    <div onClick={() => router.push("/home")}>
                                        <Icons icon="fingerprint" className="w-[68px] h-[68px]" style={null} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}
