import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt }) => (
  <GalleryItem>
    <GalleryImage src={src} alt={alt}></GalleryImage>
  </GalleryItem>
);
