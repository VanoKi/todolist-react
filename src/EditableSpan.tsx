import {ChangeEvent, useState} from "react";
import * as React from "react";

type Props = {
  value: string
  onChange: (title: string) => void
}

export const EditableSpan = ({value}: Props) => {

  const [title, setTitle] = useState(value)
  const [isEditMode, setIsEditMode] = useState(false)
  const turnOnEditMode = () => {
    setIsEditMode(true)
  }
  const turnOffEditMode = () => {
    setIsEditMode(false)
    onChange(title)
  }
  const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  const onkeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditMode(false)
    }
  }

  return (
    <>
      {isEditMode ? (
        <input
          onBlur={turnOffEditMode}
          onKeyDown={onkeyDownHandler}
          onChange={changeTitle}
          value={title}
          autoFocus />
      ) : (
        <span
          onDoubleClick={turnOnEditMode}>
          {title}
        </span>)}
    </>
  );
};

