import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => (
  <GalleryList>
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem key={id} src={webformatURL} alt={tags} />
    ))}
  </GalleryList>
);
