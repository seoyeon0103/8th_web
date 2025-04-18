import { NavLink, Outlet } from "react-router-dom";

const HomeLayout = () =>{
    return(
        <div className="h-dvh flex flex-col bg-black">
            <nav className="bg-[#121210] text-pink-500 font-bold p-5 text-lg
            flex justify-between items-right"> 
                <div> 돌려돌려LP판 </div>
                <div className="flex space-x-3">
                    <NavLink
                        to="login"
                        className="bg-black text-white py-1 px-3 rounded-md
                        hover:bg-pink-600 transition-colors text-sm">
                        로그인
                    </NavLink>
                    <NavLink
                        to="signup"
                        className="bg-black text-white py-1 px-3 rounded-md
                        hover:bg-pink-600 transition-colors text-sm">
                            회원가입
                    </NavLink>
                </div>
            </nav>
            <main className="flex-1"> 
                <Outlet/> 
            </main>
        </div>
    );
};

export default HomeLayout;