import React from 'react';
import ImageUploadModal from './ImageUploadModal';
import SocialModal from './SocialModal';
import VideoLinkModal from './VideoLinkModal';

const IndexModal = () => {
    return (
        <>
           <ImageUploadModal/> 
           <VideoLinkModal/>
           <SocialModal/>
        </>
    );
};

export default IndexModal;