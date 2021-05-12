import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Modal } from "semantic-ui-react";
import { RootStoreContext } from "../../stores/rootStore";

export const ModalContainer = observer(() => {
    const modalStore = useContext(RootStoreContext).modalStore;
    const {modal: {open, body}, closeModal} = modalStore;
    return (
        <Modal open={open} onClose={closeModal} size='small' style={{position:"initial", height:'350px'}}>
            <Modal.Content>
                {body}
            </Modal.Content>
        </Modal>
    );
});