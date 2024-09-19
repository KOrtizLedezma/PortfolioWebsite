"use client";
import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubActivity = () => {

  const [customTheme, setCustomTheme] = useState({
    dark: ['#E0E0E0', '#898989', '#7C7C7C', '#6E6E6E', '#616161'],
    light: ['#E0E0E0', '#898989', '#7C7C7C', '#6E6E6E', '#616161'],
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
