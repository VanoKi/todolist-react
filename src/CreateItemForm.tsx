import {Button} from "./Button.tsx";
import {ChangeEvent, KeyboardEvent, useState} from "react";

type Props = {
  ocCreateItem: (title: string) => void
}

export const CreateItemForm = ({onCreateItem}: Props) => {

  const [title, setTitle] = useState('')
  const [error, setError] = useState<string | null>(null)

  const createItemHandler = () => {
    const trimmedTitle = title.trim()
    if (trimmedTitle !== '') {
      onCreateItem(trimmedTitle)
      setTitle('')
    } else {
      setError('Title is required')
    }
  }

  const changeItemTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
    setError(null)
  }

  const createItemOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      createItemHandler()
    }
  }

  return (
    <div>
      <input className={error ? 'error' : ''}
             value={title}
             onChange={changeItemTitleHandler}
             onKeyDown={createItemOnEnterHandler}/>
      <Button title={'+'} onClick={createItemOnEnterHandler}/>
      {error && <div className={'error-message'}>{error}</div>}
    </div>
  );
};

// export default CreateItemForm;