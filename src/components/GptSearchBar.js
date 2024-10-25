

const GptSearchBar = () => {
    return(
        <div className="pt-[40%] md:p-[20%] ">
          <form className=" bg-black grid grid-cols-12 rounded-lg">
            <input type="text" className="p-4 m-4 col-span-9" placeholder="What would you like to watch today?"/>
            <button className="py-2 px-4 bg-gradient-to-l from-slate-500 rounded-md text-white col-span-3">
              Search</button>
          </form>
        </div>
    )
};

export default GptSearchBar;
