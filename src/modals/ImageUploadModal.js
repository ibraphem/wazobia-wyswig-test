import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Modal from "../components/Modal";
import { setImageUploadModal } from "../redux/slices/modalSlice";
import { formatImage } from "../utils/format";
import { uploadImage } from "../redux/slices/uploadSlice";

const ImageUploadModal = () => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const editor = useSelector((state) => state?.editor?.editor);
  const loading = useSelector((state) => state.upload?.loading);
  const imageUploadModal = useSelector(
    (state) => state.modal?.imageUploadModal
  );

  const closeModal = () => {
    dispatch(
      setImageUploadModal({
        status: false,
      })
    );
  };


  const embed = () => {
    formatImage(image, async (uri) => {
      dispatch(
        uploadImage({
          payload: {
            image: uri,
            folderName: "customImages",
          },
        })
      ).then((res) => {
        editor.execute("insertImage", {
          source: res?.payload?.data?.data?.secure_url,
        });
        setImage("")
        closeModal();
      });
    });
  };

  return (
    <Modal isOpen={imageUploadModal?.status} closeModal={closeModal}>
      <div className="img-modal">
        <h3>Embed</h3>
        <p style={{ fontSize: "12px", fontWeight: "bold" }}>Upload Image</p>
        <p style={{ fontSize: "10px" }}>FILE UPLOAD</p>
        <div className="dashed-box">
          <label className="custom-file-upload">
            <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
            Import Image from Device
          </label>
      
          {image && <span style={{marginLeft: 10, fontSize: 12}}>{image?.name}</span>}
        </div>
        <div className="">
          <button
            onClick={embed}
            disabled={image === "" || loading}
            className="img-modal-button embed"
          >
            {loading ? "Embedding..." : "Embed"}
          </button>
          <button onClick={closeModal} className="img-modal-button cancel">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ImageUploadModal;
