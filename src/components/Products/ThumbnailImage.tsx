// components/ThumbnailImage.tsx
import Image from 'next/image';

interface Props {
    src: string;
    alt: string;
}

const ThumbnailImage: React.FC<Props> = ({src, alt}) => (
    <Image src={src} alt={alt} width={50} height={50}/>
);

export default ThumbnailImage;
