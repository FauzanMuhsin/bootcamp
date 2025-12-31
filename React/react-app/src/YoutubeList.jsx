import { useState } from "react"
import YT from "./youtubeApp.js"
import SearchVideo from "./SearchYoutube.jsx"

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY


const YoutubeList = () => {
    const [video, setVideo] = useState([])
    const onSearchSubmit = async (keyword) => {
        const response = await YT.get("https://www.googleapis.com/youtube/v3/search", {
        params: {
            part: 'snippet',
            key: API_KEY,
            q: keyword,
            maxResult: 12,
            type: 'video',
            order: 'viewCount',
            regionCode: 'ID',
            videoEmbeddable: 'true'
        }
        })
    
        // untuk mengetahui apakah data itu masuk
        setVideo(response.data.results)
        console.log(video)
    }

    const yutup = video.map(({ id, description, urls}) => {
        return <iframe ref={(el) => {
          if (el) {
            video.current.set(id, el);
          } else {
            video.current.delete(id);
          }
        }}  key={id} alt={description} src={urls.small} />
    })


    return <div>
        <SearchVideo onSubmit={onSearchSubmit}/>
        {yutup}
    </div>
}

export default YoutubeList
