import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { saveEditor } from "../redux/slices/editorSlice";

const Wyswig = () => {
    return (
        <CKEditor
        editor={ClassicEditor}
        onReady={(editor) => dispatch(saveEditor(editor))}
      />
    )
}

export default Wyswig;