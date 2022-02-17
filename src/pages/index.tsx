import Icons from "@/components/icons";
import { useRouter } from "next/router";
import { getHours, getMinutes } from "date-fns";

export default function Home() {
    const router = useRouter();
    const hours = getHours(new Date());
    const minutes = getMinutes(new Date());
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
            </main>
        </div>
    );
}
