import imagePlaceHolder from "../assets/image-placeholder.webp";

// Handles image resolution
const getCroppedImageUrl = (url: string) => {
  if (!url) return imagePlaceHolder;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
