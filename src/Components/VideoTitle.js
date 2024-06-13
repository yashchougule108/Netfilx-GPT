


const VideoTitle = ({title,overview}) => {


  return (
    <div className="pt-36 px-12 absolute bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4 ">{overview}</p>
      <div>
        <button className=" bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-50">▶️Play</button>
        <button className="m-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
