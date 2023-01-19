import React from 'react';
import { HiPhotograph } from "react-icons/hi";
import { BsCameraVideoFill, BsFillPersonFill } from "react-icons/bs";

const Actions = () => {
    return (
        <div className="embeds">
        <h3>EMBEDS</h3>
        <ul>
          <li>
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