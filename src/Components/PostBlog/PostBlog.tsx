import { Editor } from "@tinymce/tinymce-react";
import React, { useState } from "react";
import "tinymce/icons/default";
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/paste";
import "tinymce/plugins/table";
import "tinymce/skins/content/default/content.min.css";
import "tinymce/skins/ui/oxide/content.min.css";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/themes/silver";
import "tinymce/tinymce";

PostBlog.propTypes = {};

function PostBlog() {
  const [contentEditor, setContentEditor] = useState<any>();
  const handleEditorChange = (content: any, editor: any) => {
    setContentEditor(content);
  };
  return (
    <div>
      <Editor
        init={{
          skin: "../../CUSTOM/skins/ui/CUSTOM/skin.css",
          content_css: "../../CUSTOM/skins/content/CUSTOM/content.min.css",
          height: 500,
          menubar: true,
          plugins: [
            "a11ychecker advcode casechange formatpainter",
            "linkchecker autolink lists checklist",
            "media mediaembed pageembed permanentpen",
            "powerpaste table advtable tinymcespellchecker",
          ],
          toolbar:
            // eslint-disable-next-line no-multi-str
            "formatselect | fontselect | bold italic strikethrough forecolor backcolor formatpainter | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | link insertfile image | removeformat | code | addcomment | checklist | casechange",
        }}
        value={contentEditor}
        onEditorChange={handleEditorChange}
      />
      <div dangerouslySetInnerHTML={{ __html: contentEditor }}></div>
    </div>
  );
}

export default PostBlog;
