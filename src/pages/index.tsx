import Icons from "@/components/icons";
import { kill } from "process";

export default function Home() {
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
                    <div className="h-12">
                        <div className="flex justify-between items-center py-2 px-2">
                            <div className="flex justify-between items-center ml-2">
                                <span className="text-white font-medium ">9:30</span>
                            </div>
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

                    <div className="flex flex-col between items-center">
                        <div className="mt-5">
                            <div className="w-[358px] h-[203px] px-5">
                                <div className="h-20 rounded-[28px]" style={{ background: "linear-gradient(0deg, rgba(6, 109, 55, 0.05), rgba(6, 109, 55, 0.05)), #FBFDF7" }}>
                                    <div className="inline-flex items-center justify-center my-4 space-x-3">
                                        <div className="flex justify-start items-center">
                                            <div className="absolute px-4">
                                                <Icons icon="searchs" className="w-[20px] h-[20px] mix-blend-color-burn" style={null} />
                                            </div>
                                            <input
                                                className="w-[226px] placeholder-[#1A1C19] mix-blend font-medium text-[#1A1C19] h-[48px] px-14 py-1 rounded-xl focus:outline-none"
                                                style={{ background: "linear-gradient(0deg, rgba(6, 109, 55, 0.14), rgba(6, 109, 55, 0.14)), #FBFDF7" }}
                                                type="text"
                                                placeholder="Search files..."
                                            />
                                        </div>
                                        <button
                                            className="w-[48px] h-[48px] rounded-xl flex items-center justify-center"
                                            style={{ background: "linear-gradient(0deg, rgba(129, 217, 151, 0.14), rgba(129, 217, 151, 0.14)), #1A1C19" }}>
                                            <Icons icon="paint" className="w-[24px] h-[24px] text-[#F7F7F7]" style={null} />
                                        </button>
                                    </div>
                                </div>
                                <div className="h-28 rounded-3xl" style={{ background: "linear-gradient(0deg, rgba(6, 109, 55, 0.08), rgba(6, 109, 55, 0.08)), #FBFDF7" }}>
                                    <div className="inline-flex items-center justify-center my-4 space-x-1">
                                        <div
                                            className="w-[71px] h-[81px] flex-col rounded-xl flex justify-center items-center space-y-2"
                                            style={{ background: "linear-gradient(0deg, rgba(6, 109, 55, 0.05), rgba(6, 109, 55, 0.05)), #FBFDF7" }}>
                                            <Icons icon="paint2" className="!text-black w-[24px] h-[24px]" style={{ fill: "" }} />
                                            <span className="text-xs font-medium text-black">Note</span>
                                        </div>
                                        <div className="w-[71px] h-[81px] rounded-xl" style={{ background: "linear-gradient(0deg, rgba(6, 109, 55, 0.05), rgba(6, 109, 55, 0.05)), #FBFDF7" }}>
                                            <div
                                                className="w-[71px] h-[81px] flex-col rounded-xl flex justify-center items-center space-y-2"
                                                style={{ background: "linear-gradient(0deg, rgba(6, 109, 55, 0.05), rgba(6, 109, 55, 0.05)), #FBFDF7" }}>
                                                <Icons icon="drawing" className="!text-black w-[24px] h-[24px]" style={{ fill: "" }} />
                                                <span className="text-xs font-medium text-black">Drawing</span>
                                            </div>
                                        </div>

                                        <div className="w-[71px] h-[81px] rounded-xl" style={{ background: "linear-gradient(0deg, rgba(6, 109, 55, 0.05), rgba(6, 109, 55, 0.05)), #FBFDF7" }}>
                                            <div
                                                className="w-[71px] h-[81px] flex-col rounded-xl flex justify-center items-center space-y-2"
                                                style={{ background: "linear-gradient(0deg, rgba(6, 109, 55, 0.05), rgba(6, 109, 55, 0.05)), #FBFDF7" }}>
                                                <Icons icon="image" className="!text-black w-[24px] h-[24px]" style={{ fill: "" }} />
                                                <span className="text-xs font-medium text-black">Image</span>
                                            </div>
                                        </div>
                                        <div className="w-[71px] h-[81px] rounded-xl" style={{ background: "linear-gradient(0deg, rgba(6, 109, 55, 0.05), rgba(6, 109, 55, 0.05)), #FBFDF7" }}>
                                            <div
                                                className="w-[71px] h-[81px] flex-col rounded-xl flex justify-center items-center space-y-2"
                                                style={{ background: "linear-gradient(0deg, rgba(6, 109, 55, 0.05), rgba(6, 109, 55, 0.05)), #FBFDF7" }}>
                                                <Icons icon="video" className="!text-black w-[24px] h-[24px]" style={{ fill: "" }} />
                                                <span className="text-xs font-medium text-black">Video</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-16 mx-8">
                            <div className="grid grid-cols-2">
                                <div
                                    className="w-[160px] h-[110px] -rotate-45 rounded-full"
                                    style={{ background: "linear-gradient(0deg, rgba(6, 109, 55, 0.08), rgba(6, 109, 55, 0.08)), #FBFDF7", backdropFilter: "blur(1000px)" }}>
                                    <div className="flex justify-center items-center my-3">
                                        <div className="flex justify-center items-center flex-col rotate-90">
                                            <span
                                                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#30583a] via-[#314726] to-[#30583a]"
                                                style={{ transform: "rotate(-45deg)" }}>
                                                71°
                                            </span>
                                            <Icons icon="sun" className="w-9 h-9 z-50" style={null} />
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className="flex justify-end flex-col items-center absolute h-[184px] w-[354px] bottom-24">
                            <div className="inline-flex items-center justify-center space-x-4">
                                <Icons icon="call" className="w-12 h-12" style={null} />
                                <Icons icon="message" className="w-12 h-12" style={null} />
                                <Icons icon="youtube" className="w-12 h-12 rounded-full" style={null} />
                                <Icons icon="photo" className="w-12 h-12" style={null} />
                                <Icons icon="camera" className="w-12 h-12" style={null} />
                            </div>
                            <div className="mt-8">
                                <div className="bg-[#F8FAF4] w-[300px] h-10 rounded-full">
                                    <div className="flex justify-between px-2.5 py-2.5">
                                        <Icons icon="googleSearch" className="w-5 h-5" style={null} />
                                        <Icons icon="microphone" className="w-5 h-5" style={null} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="">
                                    <div className="w-16 h-0.5 bg-white rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
