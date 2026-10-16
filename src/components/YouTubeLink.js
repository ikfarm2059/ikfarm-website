import React from 'react';
import './InstagramLink.css';
import { siteContent } from '../data/siteContent';

const YouTubeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
    <rect y="5" width="32" height="22" rx="6" fill="#FF0000" />
    <path d="M13 11 L22 16 L13 21 Z" fill="white" />
  </svg>
);

const YouTubeLink = () => {
  return (
    <a href={siteContent.company.youtubeUrl} target="_blank" rel="noopener noreferrer" className="instagram-icon-link">
      <YouTubeIcon />
      <span>YouTube</span>
    </a>
  );
};

export default YouTubeLink;
