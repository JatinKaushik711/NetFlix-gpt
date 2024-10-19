

const VideoTitle = ({title, overview}) => {
    return(
        <div className="w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">
          <h1 className="text-3xl">{title}</h1>
          <p className="py-6 text-lg w-1/4">{overview}</p>
          <div>
            <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-55">Play</button>
            <button className="bg-gray-400 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg ml-2  hover:bg-slate-900">More Info</button>
          </div>
        </div>
    );
};

export default VideoTitle;