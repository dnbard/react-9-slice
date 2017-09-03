import React from 'react';

export default function React9Slice({ image, border=8, width=128, height=128, children, imageSize, style }){
    const styleBase = {
        width: border,
        height: border,
        display: 'inline-flex',
        backgroundImage: image ? `url(${image})`: undefined
    };

    let scaleX = width / (imageSize - border * 2);
    // if (scaleX < 1) { scaleX = 1; }

    let scaleY = height / (imageSize - border * 2);
    // if (scaleY < 1) { scaleY = 1; }

    return <div className="r9s" style={{ lineHeight: 0, width: width + border * 2, height: height + border * 2, position: 'relative' }}>
        <div style={{ position: 'relative' }}>
            <div className="r9s-nw" style={ Object.assign({}, styleBase) }></div>
            <div className="r9s-n" style={ Object.assign({}, styleBase, {
                width: imageSize - border * 2,
                transformOrigin: 'left',
                transform: `scaleX(${scaleX})`,
                backgroundPositionX: -border
            }) }></div>
            <div className="r9s-ne" style={ Object.assign({}, styleBase, {
                backgroundPositionX: imageSize + border,
                position: 'absolute',
                top: 0,
                left: border + width
            }) }></div>
        </div>
        <div style={{ position: 'relative', height, width }}>
            <div className="r9s-w" style={ Object.assign({}, styleBase, {
                height: imageSize - border * 2,
                backgroundPositionY: -border,
                transformOrigin: 'left top',
                transform: `scaleY(${scaleY})`
            }) }></div>
            <div className="r9s-c" style={ Object.assign({}, styleBase, {
                width: imageSize - border * 2,
                height: imageSize - border * 2,
                lineHeight: 1,
                verticalAlign: 'top',
                transform: `scaleX(${scaleX}) scaleY(${scaleY})`,
                transformOrigin: 'left top',
                backgroundPositionX: -border,
                backgroundPositionY: -border
            }) }></div>
            <div className="r9s-e" style={ Object.assign({}, styleBase, {
                height: imageSize - border * 2,
                backgroundPositionX: imageSize + border,
                backgroundPositionY: -border,
                position: 'absolute',
                top: 0,
                left: border + width,
                transformOrigin: 'left top',
                transform: `scaleY(${scaleY})`
            }) }></div>
            <div className="r9-content" style={ Object.assign({}, {
                position: 'absolute',
                top: 0,
                left: border,
                width,
                height,
                overflow: 'auto',
                zIndex: 10,
                padding: '10px 4px',
                boxSizing: 'border-box'
            }, style)}>{ children }</div>
        </div>
        <div style={{ position: 'absolute', top: height + border }}>
            <div className="r9s-sw" style={ Object.assign({}, styleBase, {
                backgroundPositionY: imageSize + border
            }) }></div>
            <div className="r9s-s" style={ Object.assign({}, styleBase, {
                width: imageSize - border * 2,
                transformOrigin: 'left',
                transform: `scaleX(${scaleX})`,
                backgroundPositionX: -border,
                backgroundPositionY: imageSize + border
            }) }></div>
            <div className="r9s-se" style={ Object.assign({}, styleBase, {
                backgroundPositionX: imageSize + border,
                backgroundPositionY: imageSize + border,
                position: 'absolute',
                top: 0,
                left: border + width
            }) }></div>
        </div>
    </div>;
}
