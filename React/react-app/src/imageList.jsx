import { useEffect, useRef, useState} from "react"
import "./Style.css"
import SearchBar from "./searchBar"
import unsplash from './unsplash.js'

const ImageList = () => {
    const imageRef = useRef(new Map())
    const [images, setImages] = useState([])
    const onSearchSubmit = async (term) => {
        const response = await unsplash.get("/search/photos", {
          params: { query: term }
        })
    
        setImages(response.data.results)
        console.log(images)
    }

    useEffect(() => {

        imageRef.current.forEach((el) => {
        if (el) {
        el.classList.add('image-list');
        }
    });
    }, [images]);

    const image = images.map(({ id, description, urls}) => {
        return <img ref={(el) => {
          if (el) {
            imageRef.current.set(id, el);
          } else {
            imageRef.current.delete(id);
          }
        }}  key={id} alt={description} src={urls.small} />
    })

    return <div>
        <SearchBar onSubmit={onSearchSubmit}/>
        {image}
        </div>
}

export default ImageList