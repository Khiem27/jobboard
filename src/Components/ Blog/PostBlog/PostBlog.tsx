import Button from "@mui/material/Button";
import { Editor } from "@tinymce/tinymce-react";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
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
import { UserApi } from "../../../Api/UserApi/UserApi";
import { LoginType } from "../../../Shared/types";

type Inputs = {
  title: string;
  picture: string;
  headline: string;
  content: string;
};

interface NewArr {
  title: string;
  picture: string;
  headline: string;
  content: string;
}
function PostBlog() {
  const { enqueueSnackbar } = useSnackbar();
  const [title, setTitle] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [headline, setHeadline] = useState<string>("");
  const [contentEditor, setContentEditor] = useState<any>();
  const handleEditorChange = (content: any, editor: any) => {
    setContentEditor(content);
  };

  const { handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async () => {
    try {
      const newArr: NewArr = {
        title,
        picture,
        headline,
        content: contentEditor,
      };

      const type: LoginType = LoginType.COMPANY;
      const response = await UserApi.postBlog(type, newArr);
      enqueueSnackbar(response.data.message, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });

      window.location.reload();
    } catch (error: any) {
      enqueueSnackbar(error.message, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  };
  return (
    <Container fluid className="p-0">
      <Container className="mt-5 mb-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input
              required
              type="text"
              id="title"
              placeholder="Enter a title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <FormGroup>
              <Label htmlFor="picture">Picture URL</Label>
              <Input
                required
                type="text"
                id="picture"
                placeholder="Picture URL"
                onChange={(event) => {
                  setPicture(event.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="headline">Headline</Label>
              <Input
                required
                type="text"
                id="headline"
                placeholder="Enter a headline"
                onChange={(event) => {
                  setHeadline(event.target.value);
                }}
              />
            </FormGroup>
            <Label>Content</Label>
            <Editor
              init={{
                skin: "../../CUSTOM/skins/ui/CUSTOM/skin.css",
                content_css:
                  "../../CUSTOM/skins/content/CUSTOM/content.min.css",
                height: 500,
                menubar: true,
                plugins: [
                  "a11ychecker advcode casechange formatpainter",
                  "linkchecker autolink lists checklist",
                  "media mediaembed pageembed permanentpen",
                  "powerpaste table advtable tinymcespellchecker",
                ],
                toolbar:
                  "formatselect | fontselect | bold italic strikethrough forecolor backcolor formatpainter | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | link insertfile image | removeformat | code | addcomment | checklist | casechange",
              }}
              onEditorChange={handleEditorChange}
            />
            {/* <div dangerouslySetInnerHTML={{ __html: contentEditor }}></div> */}
            <FormGroup style={{ textAlign: "center" }}>
              <Button
                sx={{ marginTop: "20px" }}
                type="submit"
                variant="contained"
              >
                Upload
              </Button>
            </FormGroup>
          </FormGroup>
        </Form>
      </Container>
    </Container>
  );
}

export default PostBlog;
