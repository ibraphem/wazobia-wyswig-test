import React from 'react';
import { HiPhotograph } from "react-icons/hi";
import { BsCameraVideoFill, BsFillPersonFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { setImageUploadModal, setShowDropdown } from '../redux/slices/modalSlice';

const Actions = () => {
    const dispatch = useDispatch()
    return (
        <div className="embeds">
        <h3>EMBEDS</h3>
        <ul>
          <li onClick={() => {dispatch(setShowDropdown({status: false})); dispatch(setImageUploadModal({status: true}))}}>
            <HiPhotograph size="17px" style={{ marginTop: "2px" }} />
            <div>
              <p>Picture</p>
              <span>Jpeg, png</span>
            </div>
          </li>
          <li>
            <BsCameraVideoFill size="17px" style={{ marginTop: "2px" }} />
            <div>
              <p>Video</p>
              <span>JW player, Youtube, Vimeo</span>
            </div>
          </li>
          <li>
            <BsFillPersonFill size="17px" style={{ marginTop: "2px" }} />
            <div>
              <p>Social</p>
              <span>Instagram, Twitter, tikTok, Snapchat, Facebook</span>
            </div>
          </li>
        </ul>
      </div>
    );
};

export default Actions;