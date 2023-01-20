import React from 'react';
import { HiPhotograph } from "react-icons/hi";
import { BsCameraVideoFill, BsFillPersonFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { setImageUploadModal, setShowDropdown, setSocialModal, setVideoLinkModal } from '../redux/slices/modalSlice';
import { useOutsideClick } from '../hooks/useOutsideClick';

const Actions = () => {
    const dispatch = useDispatch()
    const onOutsideClick = () => {
      dispatch(setShowDropdown({status: false}))
    }
    const ref = useOutsideClick(onOutsideClick);
    return (
        <div className="embeds" ref={ref}>
        <h3>EMBEDS</h3>
        <ul>
          <li onClick={() => {dispatch(setImageUploadModal({status: true}))}}>
            <HiPhotograph size="17px" style={{ marginTop: "2px" }} />
            <div>
              <p>Picture</p>
              <span>Jpeg, png</span>
            </div>
          </li>
          <li onClick={() => {dispatch(setShowDropdown({status: false})); dispatch(setVideoLinkModal({status: true}))}}>
            <BsCameraVideoFill size="17px" style={{ marginTop: "2px" }} />
            <div>
              <p>Video</p>
              <span>JW player, Youtube, Vimeo</span>
            </div>
          </li>
          <li onClick={() => {dispatch(setShowDropdown({status: false})); dispatch(setSocialModal({status: true}))}}>
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