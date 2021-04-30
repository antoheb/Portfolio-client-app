import { observer } from 'mobx-react-lite'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from 'semantic-ui-react'

interface IProps {
  setFiles: (files: object[]) => void
}

const PhotoDropZone: React.FC<IProps> = ({ setFiles }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file: object) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
    },
    [setFiles],
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Button content="Choose file" style={{ marginTop: '10px' }} />
    </div>
  )
}

export default observer(PhotoDropZone)
