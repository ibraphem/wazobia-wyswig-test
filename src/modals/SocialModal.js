import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { setSocialModal } from "../redux/slices/modalSlice";

const SocialModal = () => {
    const dispatch = useDispatch();
    const [link, setLink] = useState("")
    const editor = useSelector((state) => state?.editor?.editor);
    const socialModal = useSelector((state) => state.modal?.socialModal);

    const closeModal = () => {
        dispatch(
          setSocialModal({
            status: false,
          })
        );
      };

      const embed = () => {
            editor.execute( 'mediaEmbed', link );
            setLink("")
            closeModal()
      }

  return (
    <Modal isOpen={socialModal?.status} closeModal={closeModal}>
      <div className="social-modal">
        <h3>Embed</h3>
        <div className="" style={{ marginBottom: "8px" }}>
          <label style={{ fontSize: "10px" }}>SOCIAL MEDIA PLATFORM</label>
          <select name="" id="">
            <option value="facebook">facebook</option>
          </select>
        </div>
        <div style={{ marginBottom: "8px" }}>
          <label htmlFor="">URL</label>
          <input type="text" placeholder="" onChange={(e) =>  setLink(e.target.value)} />
        </div>
        <div style={{ marginBottom: "8px" }}>
          <label htmlFor="">CODE</label>
          <input type="text" placeholder="" />
        </div>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "95%",
            alignItems: "center",
          }}
        >
          <p>Disable caption</p>
          <label class="switch">
            <input type="checkbox" checked />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="">
          <button disabled={link === ""} onClick={embed} className="img-modal-button embed">Embed</button>
          <button onClick={closeModal} className="img-modal-button cancel">Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default SocialModal;
