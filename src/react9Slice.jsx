import React from 'react';
import PropTypes from 'prop-types';

export default function React9Slice({ image, border=8, width=128, height=128, children, imageSize, style }){
    const BASE_STYLE = {
        width: border,
        height: border,
        display: 'inline-flex',
        backgroundImage: image ? `url(${image})`: undefined
    };

    const IMAGE_SIZE_MINUS_BORDER = imageSize - border * 2;
    const IMAGE_SIZE_AND_BORDER = imageSize + border;
    const BORDER_AND_WIDTH = border + width;
    const MINUS_BORDER = -border;
    const SCALE_X = width / (IMAGE_SIZE_MINUS_BORDER);
    const SCALE_Y = height / (IMAGE_SIZE_MINUS_BORDER);
    const ABSOLUTE = 'absolute';
    const RELATIVE = 'relative';

    return <div className="r9s" style={{ lineHeight: 0, width: width + border * 2, height: height + border * 2, position: RELATIVE }}>
        <div style={{ position: RELATIVE }}>
            <div className="r9s-nw" style={ Object.assign({}, BASE_STYLE) }></div>
            <div className="r9s-n" style={ Object.assign({}, BASE_STYLE, {
                width: IMAGE_SIZE_MINUS_BORDER,
                transformOrigin: 'left',
                transform: `scaleX(${SCALE_X})`,
                backgroundPositionX: MINUS_BORDER,
                position: ABSOLUTE,
                left: border,
                top: 0
            }) }></div>
            <div className="r9s-ne" style={ Object.assign({}, BASE_STYLE, {
                backgroundPositionX: IMAGE_SIZE_AND_BORDER,
                position: ABSOLUTE,
                top: 0,
                left: BORDER_AND_WIDTH
            }) }></div>
        </div>
        <div style={{ position: RELATIVE, height, width: width + border * 2 }}>
            <div className="r9s-w" style={ Object.assign({}, BASE_STYLE, {
                height: IMAGE_SIZE_MINUS_BORDER,
                backgroundPositionY: MINUS_BORDER,
                transformOrigin: 'left top',
                transform: `scaleY(${SCALE_Y})`
            }) }></div>
            <div className="r9s-c" style={ Object.assign({}, BASE_STYLE, {
                width: IMAGE_SIZE_MINUS_BORDER,
                height: IMAGE_SIZE_MINUS_BORDER,
                lineHeight: 1,
                verticalAlign: 'top',
                transform: `scaleX(${SCALE_X}) scaleY(${SCALE_Y})`,
                transformOrigin: 'left top',
                backgroundPositionX: MINUS_BORDER,
                backgroundPositionY: MINUS_BORDER,
                position: ABSOLUTE,
                left: border,
                top: 0
            }) }></div>
            <div className="r9s-e" style={ Object.assign({}, BASE_STYLE, {
                height: IMAGE_SIZE_MINUS_BORDER,
                backgroundPositionX: IMAGE_SIZE_AND_BORDER,
                backgroundPositionY: MINUS_BORDER,
                position: ABSOLUTE,
                top: 0,
                left: BORDER_AND_WIDTH,
                transformOrigin: 'left top',
                transform: `scaleY(${SCALE_Y})`
            }) }></div>
            <div className="r9-content" style={ Object.assign({}, {
                position: ABSOLUTE,
                top: 0,
                left: border,
                width,
                height,
                overflow: 'auto',
                zIndex: 10,
                padding: '10px 4px',
                boxSizing: 'border-box'
            }, style)}>
                { children }
            </div>
        </div>
        <div style={{ position: ABSOLUTE, top: height + border }}>
            <div className="r9s-sw" style={ Object.assign({}, BASE_STYLE, {
                backgroundPositionY: IMAGE_SIZE_AND_BORDER
            }) }></div>
            <div className="r9s-s" style={ Object.assign({}, BASE_STYLE, {
                width: IMAGE_SIZE_MINUS_BORDER,
                transformOrigin: 'left',
                transform: `scaleX(${SCALE_X})`,
                backgroundPositionX: MINUS_BORDER,
                backgroundPositionY: IMAGE_SIZE_AND_BORDER,
                position: ABSOLUTE,
                left: border,
                top: 0
            }) }></div>
            <div className="r9s-se" style={ Object.assign({}, BASE_STYLE, {
                backgroundPositionX: IMAGE_SIZE_AND_BORDER,
                backgroundPositionY: IMAGE_SIZE_AND_BORDER,
                position: ABSOLUTE,
                top: 0,
                left: BORDER_AND_WIDTH
            }) }></div>
        </div>
    </div>;
}

React9Slice.propTypes = {
    image: PropTypes.string.isRequired,
    border: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([ PropTypes.string, PropTypes.node, PropTypes.element ]),
    imageSize: PropTypes.number.isRequired,
    style: PropTypes.object
};
