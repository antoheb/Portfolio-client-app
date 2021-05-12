import { observer } from 'mobx-react'
import React, { Fragment, useContext, useState } from 'react'
import { Button, Header, Image } from 'semantic-ui-react'
import { RootStoreContext } from '../../../app/stores/rootStore'
import PhotoDropZone from './PhotoDropZone'

export const AddPhotoForm: React.FC = observer(() => {
  const rootStore = useContext(RootStoreContext)
  const [files, setFiles] = useState<any>([])
  const { user, uploadPhoto } = rootStore.userStore

  return (
    <Fragment>
      <Header size="medium" content="Modify my profile picture" />
      {files && files.length > 0 ? (
        <Image
          centered
          circular
          src={files[0].preview}
          width={150}
          height={150}
        />
      ) : (
        <Image
          centered
          circular
          src={`data:image/jpeg;base64,${user?.photoUrl}`}
          width={150}
          height={150}
        />
      )}
      <br />
      <PhotoDropZone setFiles={setFiles} />
      <br />
      <Button
        disabled={!files || !files.length}
        fluid
        color="blue"
        content="SAVE"
        onClick={() => uploadPhoto(user!.id, files[0])}
      />
    </Fragment>
  )
})
