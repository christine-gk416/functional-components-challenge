import React, { Component } from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from '../posts.json'
import Posts from './Posts';
import Loader from './Loader';

export class Content extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false
      }
    }

    componentDidMount () {
      setTimeout (() => {
        this.setState ({
          isLoaded: true
        })
      }, 2000

      )
    }

  render() {
     return (
      <div>
          {/* <Loader/> */}
          <div>
            <h1 className={css.TitleBar}>My Photos</h1>
          </div>
          <div className={css.SearchResults}>
            
          {this.state.isLoaded ? (<Posts savedPosts={savedPosts}/>) :
            (<Loader/>)}

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

            {/* <Posts savedPosts={savedPosts}/> */}
          </div>
      </div>
    )
  }
}

export default Content