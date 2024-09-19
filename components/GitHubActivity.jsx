import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubActivity = () => {
  const customTheme = {
    dark: ['#1D2330', '#363052', '#61376A', '#943670', '#C33763'],
    light: ['#1D2330', '#363052', '#61376A', '#943670', '#8FD14F'],
  };

  return (
    <div className="flex text-secondary flex-col items-center justify-center mb-12">
      <h2 className="title_plain_color mt-16 mb-4 md:mb-12 font-extrabold text-2xl sm:text-3xl lg:text-4xl">
        My GitHub Contributions
      </h2>
      <GitHubCalendar username="KOrtizLedezma" theme={customTheme} />
    </div>
  );
};

export default GitHubActivity;
