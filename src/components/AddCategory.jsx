import { useState } from 'react'

export const AddCategory = ({onAddCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChanged = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const trimValue = inputValue.trim()
    
    if (trimValue.length <= 1) {
        return
    }

    onAddCategory(trimValue)
    setInputValue('')
  }
    
  return (
    <form 
      onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={onInputChanged}
      />
    </form>
  )
}

export default AddCategory
