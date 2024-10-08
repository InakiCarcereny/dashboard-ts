import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function FileInput() {
  const [file, setFile] = useState<null | string>(null);

  const { register } = useForm();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event?.target?.files?.[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <div className="flex flex-col">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="file-input"
        {...(register("file"),
        {
          required: "File is required",
        })}
      />
      {!file && (
        <label
          htmlFor="file-input"
          className="cursor-pointer px-4 py-1 border border-gray-200 rounded-[4px] w-[20%] text-center"
        >
          Upload image
        </label>
      )}
      {file && (
        <div className="mt-4">
          <img
            src={file}
            alt="Vista previa"
            className="w-[200px] h-[200px] object-cover rounded-[4px]"
          />
        </div>
      )}
    </div>
  );
}
