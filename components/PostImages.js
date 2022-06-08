import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

const PostImages = ({ images }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);
    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);
    if (images.length === 1) {
        return (
            <>
                <img
                    role="presentation"
                    src={images[0].src}
                    alt={images[0].src}
                    onClick={onZoom}
                />
            </>
        );
    }

    if (images.length === 2) {
        return (
            <>
                <img
                    role="presentation"
                    src={images[0].src}
                    alt={images[0].src}
                    style={{ width: '50%', display: 'inline-block' }}
                    onClick={onZoom}
                />
                <img
                    role="presentation"
                    src={images[1].src}
                    alt={images[1].src}
                    style={{ width: '50%', display: 'inline-block' }}
                    onClick={onZoom}
                />
            </>
        );
    }
    return (
        <div>
            <img
                role="presentation"
                width="50%"
                src={images[1].src}
                alt={images[1].src}
                onClick={onZoom}
            />
            <div
                role="presentation"
                style={{
                    display: 'inline-block',
                    width: '50%',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                }}
            >
                <PlusOutlined />
                <br />
                {images.length - 1}
                개의 사진 더보기
            </div>
        </div>
    );
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
