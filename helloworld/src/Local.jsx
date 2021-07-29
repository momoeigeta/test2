import { FormControl, Grid, TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'


const Local = () => {

  const { register, handleSubmit, errors, reset, setValue } = useForm({
    mode: 'all',
  })

  const submit = (formData) => {
    console.log(formData)
    localStorage.setItem('form', JSON.stringify(formData))
    reset()
  }

  useEffect(() => {
    const defaultValue = JSON.parse(localStorage.getItem('form'))
    setValue('test', defaultValue?.test)
  }, []
  )

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Grid container direction="column">
        <Grid item sm={12} >
          <FormControl fullWidth>
            <TextField
              name="test"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid item sm={12} >
          <FormControl fullWidth>
            <TextField
              name="test2"
              inputRef={register({ required: true })}
              variant="outlined"
            />
          </FormControl>
        </Grid>
      </Grid>
    </form>
  )
}

export default Local;