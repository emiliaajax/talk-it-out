import { Button, Stack, TextField } from '@mui/material';
import React from 'react'

// https://stackoverflow.com/questions/65161428/how-to-remove-border-in-textfield-fieldset-in-material-ui
class CommentForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      comment: ''
    }
  }
  
  onChange = (event) => {
    this.setState((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value
    }))
  }

  onSubmit = (event) => {
    event.preventDefault()
    // To be implemented
  }

  render() { 
    return (
      <>
      <form onSubmit={this.onSubmit}>
          <Stack spacing={2} sx={{ maxWidth: '600px' }}>
            <TextField
              name='name'
              value={this.state.name}
              onChange={this.onChange}
              placeholder='Name'
              size='small' 
              sx={{ 
                backgroundColor: 'rgb(242, 242, 242)',
                '.MuiOutlinedInput-notchedOutline': { 
                  border: 'none' 
                },
                maxWidth: '400px'
              }}>
            </TextField>
            <TextField
              name='comment'
              value={this.state.comment}
              onChange={this.onChange}
              placeholder='Comment'
              multiline
              rows={10} 
              sx={{ 
                backgroundColor: 'rgb(242, 242, 242)',
                '.MuiOutlinedInput-notchedOutline': { 
                  border: 'none' 
                }
              }}>
            </TextField>
            <Button
              type='submit'
              variant='contained'
              sx={{ maxWidth: '180px', backgroundColor: '#222' }}>
                Submit comment
            </Button>
          </Stack>
        </form>
      </>
    )
  }
}
 
export default CommentForm