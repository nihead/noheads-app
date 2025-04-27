import {useState} from 'react';

function RandomPhoto() {
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState("https://picsum.photos/200/300");
    
    async function refresh(){
        const pic_url = await fetch("https://picsum.photos/200/300").then((res) => res.url);
        setUrl(pic_url);
    }

    return(
        <div className='photo-fram'>
            <img
                src={url}
                alt='From picsum'
            />
            <br />
            <div className='btn-div'>
                <button className='btn-refresh' onClick={refresh} disabled={isLoading}>
                    REFRESH
                </button>
            </div>
        </div>
    )

}

export default RandomPhoto;