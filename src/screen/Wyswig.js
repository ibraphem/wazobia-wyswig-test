import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Wyswig = () => {
    return (
        <CKEditor
        editor={ClassicEditor}
        onReady={(editor) => console.log(editor)}
      />
    )
}

export default Wyswig;