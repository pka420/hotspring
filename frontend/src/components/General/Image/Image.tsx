import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

interface ImageProps {
    src: string;
    alt: string;
    height: string;
    width: string;
}


const Image: React.FC<ImageProps> = ({src, alt, height, width}) => {

    const [loaded, setLoaded] = React.useState(false);

    const handleImageLoad = () => {
        setLoaded(true);
    }

    if (src == null) {
        return (
            <div style={{ position: 'relative', width, height }}>
                <Typography variant="h6" style={{ color: '#fff' }}>
                    No image available
                </Typography>
            </div>
        );
    }

    return (
      <div style={{ position: 'relative', width, height }}>
      {!loaded && (
        <Skeleton
          variant="rectangular"
          width={width}
          height={height}
          animation="wave"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{
          display: loaded ? 'block' : 'none',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
    );
}

export default Image;
