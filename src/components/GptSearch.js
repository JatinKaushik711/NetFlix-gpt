import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";


const GptSearch = () => {
     return (
        <>
        <div className="absolute -z-10">
                <img 
                    className="w-screen h-screen object-cover"
                    src="https://cdn.neowin.com/news/images/uploaded/2023/05/1683747988_background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.jpg"
                    alt="bg-img"
                />
        </div>
             
                <div className="">
                <GptSearchBar/>
                <GptMovieSuggestions/>
            </div>     
        
        </>
     );
};

export default GptSearch;
