// components/LazyProjectCard.js
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

// Dynamically import ProjectCard with skeleton fallback
const ProjectCard = dynamic(
  () => import('./ProjectsSection'),
  { 
    loading: () => <ProjectCardSkeleton />,
    ssr: false
  }
);

// Skeleton loader component
const ProjectCardSkeleton = () => (
  <div className="project-card-skeleton animate-pulse">
    <div className="skeleton-image h-48 bg-gray-200 rounded-lg mb-4" />
    <div className="skeleton-title h-6 bg-gray-200 rounded w-3/4 mb-3" />
    <div className="skeleton-line h-4 bg-gray-200 rounded w-full mb-2" />
    <div className="skeleton-line h-4 bg-gray-200 rounded w-5/6" />
  </div>
);

const LazyProjectCard = ({ title, description, image }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div ref={ref} className="project-card-wrapper">
      {inView ? (
        <ProjectCard
          title={title}
          description={description}
          image={image}
        />
      ) : (
        <ProjectCardSkeleton />
      )}
    </div>
  );
};

export default LazyProjectCard;