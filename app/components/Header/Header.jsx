export const Header = () => {
    return (
        <header className={"w-10/12 m-auto mt-5 mb-5 flex justify-between items-center"}>
            <a href="/" className={"font-black text-2xl"} id={"logo"}>qwerty</a>
            <nav className={"flex gap-5 text-sm"}>
                <a href="/" className={"font-[montserrat] duration-300 text-[#777] hover:text-white"}>Курсы</a>
                <a href="/" className={"font-[montserrat] duration-300 text-[#777] hover:text-white"}>О нас</a>
                <a href="/" className={"font-[montserrat] duration-300 text-[#777] hover:text-white"}>Контакты</a>
                <a href="/" className={"font-[montserrat] duration-300 text-[#777] hover:text-white"}>Поддержка</a>
                <a href="/" className={"font-[montserrat] duration-300 text-[#777] hover:text-white"}>Блог</a>
            </nav>
            <div className={"flex font-[montserrat]"}>
                <input type="text" placeholder={"Что-нибудь"} className={"bg-[#333] pl-2 pr-2 duration-300 rounded-l-lg focus:bg-[#fff] focus:text-black focus:outline-0 placeholder:text-[#999]"}/>
                <button className={"bg-[#333] pr-2 pl-2 text-white  rounded-r-lg focus:outline-['0'] duration-300 hover:bg-white hover:text-black"}>Поиск</button>
            </div>
            <button className={"font-[montserrat] font-medium bg-white duration-300 text-black pr-3 pl-3 rounded-md border-white border-2 hover:bg-black hover:text-white"}>Войти</button>
        </header>
    )
}