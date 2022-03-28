import Button from "@mui/material/Button";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import React, { useEffect, useState } from "react";
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import { UserApi } from "../../../Api/UserApi/UserApi";
Blog.propTypes = {};

function Blog() {
  const [title, setTitle] = useState<string>("");
  const [post, setPost] = useState<any>([]);
  const [editorState, setEditorState] = useState<EditorState>();
  const [content, setContent] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [headline, setHeadline] = useState<string>("");
  const handleSendBlog = async (data: any) => {
    const newArr = {
      title: title,
      picture_url: picture,
      headline: headline,
      content: data,
    };
    // const response = await UserApi.sendBlog(newArr);
    console.log(newArr);
    // window.location.reload();
  };

  useEffect(() => {
    const getAlltPost = async () => {
      const getPost = await UserApi.getAllBlog();
      const PostData = getPost.data;
      setPost(PostData);
    };
    getAlltPost();
  }, []);
  return (
    <>
      <Container fluid className="p-0">
        <Container className="mt-5 mb-5">
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                value={title}
                id="title"
                placeholder="Enter a title"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
              <FormGroup>
                <Label for="picture">Picture URL</Label>
                <Input
                  type="text"
                  name="picture"
                  value={picture}
                  id="picture"
                  placeholder="Picture URL"
                  onChange={(event) => {
                    setPicture(event.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="headline">Headline</Label>
                <Input
                  type="text"
                  name="headline"
                  value={headline}
                  id="headline"
                  placeholder="Enter a headline"
                  onChange={(event) => {
                    setHeadline(event.target.value);
                  }}
                />
              </FormGroup>

              <Label>Content</Label>
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="card"
                editorClassName="editorClassName"
                onEditorStateChange={(newState) => {
                  setEditorState(newState);
                  setContent(
                    draftToHtml(convertToRaw(newState.getCurrentContent()))
                  );
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Preview</Label>
              <div className="border ql-container p-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                />
              </div>
            </FormGroup>
            <Button onClick={() => handleSendBlog(content)} variant="outlined">
              Update post
            </Button>
          </Form>
        </Container>
      </Container>
      <div>
        {post
          ? post.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: item.content,
                  }}
                />
              );
            })
          : null}
      </div>
    </>
  );
}

export default Blog;
