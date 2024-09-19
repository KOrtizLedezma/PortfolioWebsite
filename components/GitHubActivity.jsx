"use client";
import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubActivity = () => {

  const [customTheme, setCustomTheme] = useState({
    dark: ['#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161'],
    light: ['#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161'],
  });

  return (
    <div className="flex text-secondary flex-col items-center justify-center mb-12">
      <h2 className="title_plain_color mt-16 mb-4 md:mb-12 font-extrabold text-2xl sm:text-3xl lg:text-4xl">
        My GitHub Contributions
      </h2>
      <GitHubCalendar 
          username="KOrtizLedezma" 
          theme={{ dark: customTheme.dark, light: customTheme.light }} 
        />
    </div>
  );
};

export default GitHubActivity;
