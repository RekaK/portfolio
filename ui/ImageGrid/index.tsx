import Image from "next/image";
import { Styled } from "./ImageGrid.Styles";

export interface IImageObject {
  url: string; alt: string 
  dimensions: {
    height: number;
    width: number;
  }
}

interface ImageGridProps {
  images: IImageObject[];
  // dimensions: {
  //   height: number;
  //   width: number;
  // };
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <Styled.ImageGrid>
      {images.map((image, index) => (
        <Image
          key={image.url}
          src={image.url}
          height={image.dimensions.height}
          width={image.dimensions.width}
          layout="fixed"
          alt={image.alt}
        />
      ))}
    </Styled.ImageGrid>
  );
};

export default ImageGrid;
