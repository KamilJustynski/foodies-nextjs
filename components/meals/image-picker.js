"use client";
import Image from "next/image";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";

const ImagePicker = ({ label, name }) => {
  const [selectedImage, setSelectedImage] = useState();
  const imageInput = useRef();

  const handlePickClick = () => {
    imageInput.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setSelectedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setSelectedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!selectedImage && <p>No image selected.</p>}
          {selectedImage && (
            <Image fill src={selectedImage} alt="Selected Image" />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          type="button"
          onClick={handlePickClick}
          className={classes.button}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};
export default ImagePicker;
