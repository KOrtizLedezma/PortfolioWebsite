"use client"

import React, { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';

const ResumeSection = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDownload = () => {
    const fileUrl = '/KenetOrtizCV.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Kenet-Ortiz-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isMobile = windowWidth <= 768;

  return (
    <section className="resume-section my-8 flex flex-col items-center px-4">
      <h2 className="title_plain_color text-4xl font-bold mb-8 text-center">My Resume</h2>
      <div className="resume-preview-container mb-4 flex justify-center items-center w-full max-w-3xl">
        {isMobile ? (
          <div className="w-full text-center">
            <p className="mb-4">Resume preview is not available on mobile devices.</p>
            <a
              href="/KenetOrtizCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C33764] underline"
            >
              Open resume in new tab
            </a>
          </div>
        ) : (
          <iframe
            src="/KenetOrtizCV.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
            width="100%"
            height="100%"
            style={{ 
              border: 'none',
              maxWidth: '100%',
              aspectRatio: '8.5 / 11',
            }}
            title="Resume Preview"
          ></iframe>
        )}
      </div>
      <div className="mt-4">
        <button
          onClick={handleDownload}
          className="border-2 py-2 px-4 rounded text-[#C33764] hover:bg-[#C33764] hover:text-white transition-colors duration-300 flex items-center justify-center"
          style={{ borderColor: '#C33764', backgroundColor: 'transparent' }}
        >
          <FaDownload size={20} className="mr-2" /> 
          {isMobile ? "Download Resume" : "Download"}
        </button>
      </div>
    </section>
  );
};

export default ResumeSection;