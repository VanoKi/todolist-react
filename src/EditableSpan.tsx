import {ChangeEvent, useState} from "react";

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

  return (
    <>
      {isEditMode ? (
        <input
          onBlur={turnOffEditMode}
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

