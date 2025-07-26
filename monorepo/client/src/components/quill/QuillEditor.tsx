import { useRef, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function imageHandler(this: { quill: any }) {
  const range = this.quill.getSelection();
  const value = prompt("URL de l'image");
  if (value && range) {
    this.quill.insertEmbed(range.index, "image", value, "user");
  }
}

const modules = {
  toolbar: {
    container: [
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      ["image"],
    ],
    handlers: {
      image: imageHandler,
    },
  },
};

export function QuillEditor({
  onChange,
  value,
}: {
  onChange: (val: string) => void;
  value: string;
}) {
  const quillRef = useRef<ReactQuill>(null);

  const handleChange = useCallback(
    (content: string) => {
      onChange(content);
    },
    [onChange]
  );

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      modules={modules}
      onChange={handleChange}
      value={value}
      className="w-[90%] h-fit"
    />
  );
}
