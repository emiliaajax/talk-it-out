import { Grid } from '@mui/material'
import React from 'react'
import PostPreview from '../PostPreview/PostPreview.js'
import PostsService from '../../services/PostsService.js'

class Feed extends React.Component {
  constructor () {
    super()

    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    if (this.isHomePage()) {
      this.updateHomePageFeed()
    } else {
      this.updateSubjectPageFeed()
    }
  }

  isHomePage() {
    // Not a good solution, but couldn't find a way to navigate
    // without using the window object.
    return window.location.pathname === '/'
  }

  async updateHomePageFeed () {
    this.setState({ posts: await this.getAllPosts() })
  }

  async getAllPosts() {
    return await new PostsService().getAllPosts()
  }

  async updateSubjectPageFeed () {
    this.setState({ posts: await this.getPostsBySubject() })
  }

  async getPostsBySubject() {
    const subject = this.getSubject()
    return await new PostsService().getPostsBySubject(subject)
  }

  getSubject() {
    // Not a good solution, but couldn't find a way to get params
    // without using the window object.
    return window.location.pathname.replace('/', '')
  }

  /**
   * Returns all posts as HTML elements.
   *
   * @returns {HTMLElement}
   */
  renderAllPostPreviews() {
    return this.state.posts?.reverse().map((post) => {
      return (
        <Grid key={post._id} item xs={4}>
          <PostPreview post={post}></PostPreview>
        </Grid>
      )
    })
  }

  render() { 
    return (
      <>
        <Grid container spacing={5}>
          {this.renderAllPostPreviews()}
        </Grid>
      </>
    )
  }
}
 
export default Feed
