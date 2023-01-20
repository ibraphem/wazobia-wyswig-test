import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { setVideoLinkModal } from "../redux/slices/modalSlice";

const VideoLinkModal = () => {
  const dispatch = useDispatch();
  const [link, setLink] = useState("");
  const editor = useSelector((state) => state?.editor?.editor);
  const videoLinkModal = useSelector((state) => state.modal?.videoLinkModal);

  const closeModal = () => {
    dispatch(
      setVideoLinkModal({
        status: false,
      })
    );
  };

  const embed = () => {
    editor.execute("mediaEmbed", link);
    setLink("");
    closeModal();
  };

  return (
    <Modal isOpen={videoLinkModal?.status} closeModal={closeModal}>
      <div className="vid-modal">
        <h3>Embed</h3>
        <div className="" style={{ marginBottom: "8px" }}>
          <label style={{ fontSize: "10px" }}>VIDEO PROVIDER</label>
          <select name="" id="">
            <option value="youtube">Youtube</option>
            <option value="jwplayer">JW Player</option>
            <option value="vimeo">Vimeo</option>
          </select>
        </div>
        <div style={{ marginBottom: "8px" }}>
          <label htmlFor="">URL</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder=""
          />
        </div>
        <div className="">
          <button
            onClick={embed}
            disabled={link === ""}
            className="img-modal-button embed"
          >
            Embed
          </button>
          <button onClick={closeModal} className="img-modal-button cancel">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default VideoLinkModal;
