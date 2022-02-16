import Icons from "@/components/icons";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 select-none">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="absolute">
                    <svg width="762" height="800" version="1.1" viewBox="0 0 762 1640" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(0 517.48)">
                            <path d="m760-44.98v100" fill="none" stroke="#000" stroke-width="20" />
                            <path d="m760 135.02v200" fill="none" stroke="#000" stroke-width="20" />
                            <g>
                                <rect y="-516.48" width="759" height="1639" rx="52.5" ry="52.5" />
                                <rect x="9" y="-497.48" width="741" height="1600" rx="35" ry="35" fill="#333" />
                                <rect x="21.25" y="-477.48" width="716.5" height="1550" rx="30" ry="30" fill="#ddd" />
                                <circle className="z-[9999]" cx="379.5" cy="-442.48" r="20" fill="#222" />
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="w-[351px] z-20 h-[765px] rounded-2xl bg-cover bg-center bg-[url('https://img.phonandroid.com/2021/02/Android-12-Wallpaper-1.png')]">
                    <div className="flex justify-between items-center py-2 px-2">
                        <div className="flex justify-between items-center ml-2">
                            <span className="text-[#524E43] font-medium ">9:30</span>
                        </div>
                        <div>
                            <div className="bg-neutral-900 w-5 h-5 rounded-full"></div>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex justfiy-end items-center space-x-1">
                                <Icons icon="LTE" className="w-4 h-4" />
                                <Icons icon="WIFI" className="w-4 h-4" />
                                <Icons icon="Battery" className="w-2 h-4" />
                                <Icons icon="dot" className="w-2 h-2" />
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 px-5">
                        <div className="flex justify-start">
                            <div className="inline-flex justify-center items-center">
                                <div className="inline-flex ">
                                    <div className="flex flex-col justify-center">
                                        <div className="space-x-2 space-y-2">
                                            <Icons icon="sun" className="w-6 h-6 absolute" />
                                            <span className="font-medium text-center font-poppins">74°F</span>
                                        </div>

                                        <span className="font-medium font-poppins">Mon, Sep 21</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-7 ml-2">
                        <div className="grid grid-cols-2">
                            <div className="space-y-3">
                                <div className="bg-[#D0CDBC] rounded-full w-[165px] h-[90px]">
                                    <div className="inline-flex items-center justify-center py-2 space-x-2 my-1.5">
                                        <div className="flex justify-end items-end">
                                            <div className="absolute">
                                                <Icons icon="messenger" className="w-4 h-4" />
                                            </div>
                                            <img src="/static/images/profile.png" className="w-14 h-14" />
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <span className="text-black text-sm font-medium font-poppins">Rachel</span>
                                            <span className="text-black/30 text-sm font-medium font-poppins">2 weeks ago</span>
                                            <span className="text-black/60 text-sm font-medium font-poppins">Chatted</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#B8947C] rounded-3xl w-[165px] h-[90px]">
                                    <div className="px-5 py-3">
                                        <div className="relative">
                                            <div className="flex flex-col items-end space-y-2">
                                                <span className="text-white font-poppins font-medium text-sm text-right">Rachel: Missed call</span>
                                                <div className="flex justify-between items-center space-x-10">
                                                    <div className="inline-flex items-center justify-center space-x-2 mt-3">
                                                        <img src="/static/images/profile3.png" className="w-7 h-7" />
                                                        <span className="font-poppins text-sm font-medium">Friends</span>
                                                    </div>
                                                    <div>
                                                        <Icons icon="missingCall" className="w-5 h-5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#B2A197] rounded-full w-[175px] h-[90px]">
                                    <div className="px-3 py-3">
                                        <div className="inline-flex justify-center items-center space-x-2">
                                            <div className="flex justify-center items-center">
                                                <Icons icon="box" className="w-16 h-16" />
                                                <span className="text-[#B2A197] font-medium text-md absolute">MG</span>
                                            </div>
                                            <div className="flex flex-col w-20">
                                                <span className="text-black font-poppins font-medium text-sm">Monica</span>
                                                <span className="text-white/60 font-poppins font-medium text-sm">It’s Monica’s</span>
                                                <span className="text-black/60 font-poppins font-medium text-sm">Birthday!</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#D0CDBC] rounded-3xl w-[165px] h-[90px]">
                                    <div className="px-4 py-1 text-left">
                                        <div className="w-40 space-y-1">
                                            <span className="text-black/70  text-sm font-medium font-poppins">
                                                “I’m making a lasagna for dinner!” <span className="text-black/30 font-poppins font-medium text-sm">1 hour ago</span>
                                            </span>
                                            <div className="flex justify-start items-center space-x-2">
                                                <img src="/static/images/profile2.png" className="w-7 h-7" />
                                                <div className="flex flex-col items-start justify-center">
                                                    <Icons icon="dot" className="w-2" />
                                                    <span className="font-medium font-poppins text-sm">Monica Geller</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-36 px-4 ml-1">
                                <div className="inline-flex items-center justify-center space-x-8">
                                    <Icons icon="call" className="w-12 h-12" />
                                    <Icons icon="clock" className="w-12 h-12" />
                                    <Icons icon="chrome" className="w-12 h-12" />
                                    <Icons icon="camera" className="w-12 h-12" />
                                </div>
                                <div className="mt-8">
                                    <div className="bg-[#E2E2DA] w-72 h-10 rounded-full">
                                        <div className="flex justify-between px-2.5 py-2.5">
                                            <Icons icon="googleSearch" className="w-5 h-5" />
                                            <Icons icon="microphone" className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
