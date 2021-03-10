// write your CatList component here
import React from 'react' 

const CatList = (props) => {
    
    return (
        <div>
            {props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} />)}
        </div>
    )
}

export default CatList