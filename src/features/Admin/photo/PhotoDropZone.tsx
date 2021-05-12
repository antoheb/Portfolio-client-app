import { observer } from 'mobx-react-lite'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from 'semantic-ui-react'

interface IProps {
  setFiles: (files: any) => void
}

const PhotoDropZone: React.FC<IProps> = ({ setFiles }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
    },
    [setFiles],
  )
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Button fluid content="Choose file" />
    </div>
  )
}

export default observer(PhotoDropZone)
