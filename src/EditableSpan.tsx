import {useState} from "react";

type Props = {
  value: string
}

export const EditableSpan = ({value}: Props) => {

  const [isEditMode, setIsEditMode] = useState(false)
  const turnOnEditMode = () => {
    setIsEditMode(true)
  }
  const turnOffEditMode = () => {
    setIsEditMode(false)
  }

  return (
    <>
      {isEditMode ? (
        <input
          onBlur={turnOffEditMode}
          value={value}
          autoFocus />
      ) : (
        <span onDoubleClick={turnOnEditMode}>{value}</span>)}
    </>
  );
};

