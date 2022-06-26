import { Component } from 'react';
import { TailSpin } from 'react-loader-spinner';

import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

import { fetchImages } from 'services/images-api';

import { Container, LoadButton, SpinnerContainer } from './App.styled';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const prevSearch = prevState.search;
    const nextSearch = this.state.search;

    if (prevSearch !== nextSearch) {
      this.setState({ images: [], page: 1 }, this.updateImages);
    }
  }

  onSubmit = search => {
    this.setState({ search: search.trim() });
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      this.updateImages
    );
  };

  updateImages = async () => {
    const { search, page } = this.state;
    this.setState({ isLoading: true });

    try {
      const images = await fetchImages(search, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    } catch (error) {
      console.log(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} />

        {isLoading && (
          <SpinnerContainer>
            <TailSpin color="#3f51b5" />
          </SpinnerContainer>
        )}

        {images.length > 0 && (
          <LoadButton type="button" onClick={this.loadMore}>
            Load more
          </LoadButton>
        )}
        {/* <Modal /> */}
      </Container>
    );
  }
}
