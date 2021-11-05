import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Attachment = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M20 10.97l-8.037 7.58A5.415 5.415 0 018.25 20a5.415 5.415 0 01-3.712-1.45C3.553 17.62 3 16.362 3 15.048c0-1.313.553-2.572 1.538-3.501m9.891-4.66L7.004 13.88c-.328.31-.513.73-.513 1.167 0 .438.185.858.513 1.167.328.31.773.484 1.238.484.464 0 .909-.174 1.237-.484l4.023-3.79M8.556 7.757l4.019-3.79A3.61 3.61 0 0115.05 3a3.61 3.61 0 012.475.967A3.209 3.209 0 0118.55 6.3c0 .876-.369 1.715-1.025 2.334l-1.025.966"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M20 10.97l-8.037 7.58A5.415 5.415 0 018.25 20a5.415 5.415 0 01-3.712-1.45C3.553 17.62 3 16.362 3 15.048c0-1.313.553-2.572 1.538-3.501l8.037-7.58A3.61 3.61 0 0115.05 3a3.61 3.61 0 012.475.967A3.209 3.209 0 0118.55 6.3c0 .876-.369 1.715-1.025 2.334l-8.046 7.58c-.328.31-.773.484-1.237.484-.465 0-.91-.174-1.238-.484a1.604 1.604 0 01-.513-1.167c0-.437.185-.857.513-1.167l7.425-6.994"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        d="M20 10.97l-8.037 7.58A5.415 5.415 0 018.25 20a5.415 5.415 0 01-3.712-1.45C3.553 17.62 3 16.362 3 15.048c0-1.313.553-2.572 1.538-3.501l8.037-7.58A3.61 3.61 0 0115.05 3a3.61 3.61 0 012.475.967A3.209 3.209 0 0118.55 6.3c0 .876-.369 1.715-1.025 2.334l-8.046 7.58c-.328.31-.773.484-1.237.484-.465 0-.91-.174-1.238-.484a1.604 1.604 0 01-.513-1.167c0-.437.185-.857.513-1.167l7.425-6.994"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M20 10.97l-8.037 7.58A5.415 5.415 0 018.25 20a5.415 5.415 0 01-3.712-1.45C3.553 17.62 3 16.362 3 15.048c0-1.313.553-2.572 1.538-3.501l8.037-7.58A3.61 3.61 0 0115.05 3a3.61 3.61 0 012.475.967A3.209 3.209 0 0118.55 6.3c0 .876-.369 1.715-1.025 2.334l-8.046 7.58c-.328.31-.773.484-1.237.484-.465 0-.91-.174-1.238-.484a1.604 1.604 0 01-.513-1.167c0-.437.185-.857.513-1.167l7.425-6.994"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path
        d="M17.525 8.635l-8.046 7.58c-.328.31-.774.484-1.238.484-.464 0-.909-.174-1.237-.484a1.604 1.604 0 01-.513-1.167c0-.437.185-.857.513-1.167l7.425-6.994"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 10.97l-8.037 7.58A5.415 5.415 0 018.25 20a5.415 5.415 0 01-3.712-1.45C3.553 17.62 3 16.362 3 15.048c0-1.313.553-2.572 1.538-3.501l8.037-7.58A3.61 3.61 0 0115.05 3a3.61 3.61 0 012.475.967A3.209 3.209 0 0118.55 6.3c0 .876-.369 1.715-1.025 2.334"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );

  switch (set) {
    case 'broken':
      return <Broken />;
    case 'curved':
      return <Curved />;
    case 'duotone':
      return <Duotone />;
    case 'outline':
      return <Outline />;
    case 'twocolor':
      return <TwoColor />;
    default:
      return <Outline />;
  }
};

Attachment.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Attachment.displayName = 'Attachment';
export default createIcon(Attachment);
