import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { saveEditor } from "../redux/slices/editorSlice";
import { useDispatch } from "react-redux";
import { BiPlus } from "react-icons/bi";
import Actions from "../components/Actions";


const Wyswig = () => {
    const dispatch = useDispatch()
    const [showActions, setShowActions] = useState(false)
    return (
        <div className="App">
        <div className="main">
          <h1 className="title">Add post title</h1>
          {/* <h1 className="title">This is the title</h1> */}
          <CKEditor
            editor={ClassicEditor}
            onReady={(editor) => dispatch(saveEditor(editor))}
          />
          <div style={{ position: "relative" }}>
            <button className="append">
              <BiPlus size="15px" onClick={() => setShowActions(!showActions)} />
            </button>

            {/* Actions */}
            {showActions && (
               <Actions/>
            )}
          </div>
        </div>
        <div className="count-container">
          <p>
            <span>0</span>/<span>1000</span> words
          </p>
        </div>
        <button className="post">Post</button>
      </div>
    )
}

export default Wyswig;