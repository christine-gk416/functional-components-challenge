import React, { Component } from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from '../posts.json'
import Posts from './Posts';

export class Content extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
     return (
      <div>
          <div>
            <h1 className={css.TitleBar}>My Photos</h1>
          </div>
          <div className={css.SearchResults}>
            {/* {savedPosts.map((post)=>
            {
                return (
                    <div key={post.title}>
                        <p>{post.title}</p>
                        <p>{post.name}</p>
                        <img src={post.image} alt="Post alt text" />
                        <p>{post.description}</p>
                    </div>
                )
            }

            )
            
            } */}
            <Posts savedPosts={savedPosts}/>
          </div>
      </div>
    )
  }
}

export default Content