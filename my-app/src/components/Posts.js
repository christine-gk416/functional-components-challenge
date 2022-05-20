import React from "react";


function Posts(props) {
    
  return (
      props.savedPosts.map
     ( post =>
    {const {title, name, image, description} = post
        
        return <div key={title}>
                    <p>{title}</p>
                    <p>{name}</p>
                    <img src={image} alt="Post alt text" />
                    <p>{description}</p>
                </div>
        
    }
    )
  );
}

export default Posts;
