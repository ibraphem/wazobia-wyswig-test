import React from 'react';
import Modal from '../components/Modal';

const VideoLinkModal = () => {
    return (
        <Modal>
        <div className="vid-modal">
          <h3>Embed</h3>
          <div className="" style={{marginBottom:"8px"}}>
            <label style={{ fontSize: "10px" }}>VIDEO PROVIDER</label>
            <select name="" id="">
              <option value="youtube">Youtube</option>
              <option value="jwplayer">JW Player</option>
              <option value="vimeo">Vimeo</option>
            </select>
          </div>
          <div  style={{marginBottom:"8px"}}>
            <label htmlFor="">URL</label>
            <input type="text" placeholder="" />
          </div>
          <div className="">
            <button className="img-modal-button embed">Embed</button>
            <button className="img-modal-button cancel">Cancel</button>
          </div>
        </div>
      </Modal>
    );
};

export default VideoLinkModal;