import { combineReducers } from 'redux';
import editorSlice from './editorSlice';
import modalSlice from './modalSlice';
import uploadSlice from './uploadSlice';

const combinedSlices = combineReducers({
    editor: editorSlice,
    modal: modalSlice,
    upload: uploadSlice

});

export default combinedSlices;
