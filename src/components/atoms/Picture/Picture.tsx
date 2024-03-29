import { classnames } from '@story-squad/react-utils';
import React from 'react';
import './styles/index.scss';

export interface PictureProps {
  source: string;
  description: string;
  disablePreview?: boolean;
  containerProps?: React.HTMLProps<HTMLDivElement>;
}

export default function Picture({
  source,
  description,
  containerProps = {},
  disablePreview,
}: PictureProps): React.ReactElement {
  return (
    <div
      {...containerProps}
      className={classnames(
        'image',
        containerProps.className,
        !disablePreview && 'can-preview',
      )}
    >
      <div
        className={classnames('image-inner')}
        style={{ backgroundImage: `url(${source})` }}
        title={description}
      />
    </div>
  );
}
