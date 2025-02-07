import { FC, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GallerySlider from '@/components/Slider/GallerySlider';
import {
  selectProducts,
  toggleGalleryModal,
} from '@/store/slices/products/productsSlice';
import { baseUrl } from '@/config/config';

const Modal = lazy(() => import('@/components/Modal'));

export const images = [
  '/products/product-preview/1.jpg',
  '/products/product-preview/2.jpg',
  '/products/product-preview/3.jpg',
  '/products/product-preview/2.jpg',
]

const GalleryModal: FC = () => {
  const { isGalleryFullView, quickViewProduct } = useSelector(selectProducts);
  const {images, image} = quickViewProduct || {}
  const dispatch = useDispatch();
  const imagesLinks = images?.map((el) => baseUrl+el.image_path) || []
  return (
    <Modal
      isOpen={isGalleryFullView}
      onClose={() => dispatch(toggleGalleryModal(false))}
      fullWidth
      id="gallery-full-view"
    >
      <div className="max-w-[654px] mx-auto px-5 mb-10">
        <GallerySlider direction="horizontal" showTotalSlides images={imagesLinks?.length ? imagesLinks : [image || ""]} />
      </div>
    </Modal>
  );
};

export default GalleryModal;
