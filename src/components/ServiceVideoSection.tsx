'use client';

import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

interface ServiceVideoSectionProps {
  videoType: 'youtube' | 'vimeo' | 'mp4';
  youtubeVideoId?: string;
  vimeoVideoId?: string;
  mp4Url?: string;
  title?: string;
  description?: string;
}

export const ServiceVideoSection: React.FC<ServiceVideoSectionProps> = ({
  videoType,
  youtubeVideoId,
  vimeoVideoId,
  mp4Url,
  title = "See How We Transform Pinterest Presence",
  description = "Watch how our Pinterest marketing strategies have helped businesses achieve remarkable growth and success on the platform."
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getVideoUrl = () => {
    switch (videoType) {
      case 'youtube':
        return `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`;
      case 'vimeo':
        return `https://player.vimeo.com/video/${vimeoVideoId}?autoplay=1`;
      case 'mp4':
        return mp4Url;
      default:
        return '';
    }
  };

  const getThumbnailUrl = () => {
    switch (videoType) {
      case 'youtube':
        return `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`;
      case 'vimeo':
        return 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop';
      case 'mp4':
        return 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop';
      default:
        return 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/20 to-pink-500/20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {!isPlaying ? (
            <div className="relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
              <img 
                src={getThumbnailUrl()}
                alt="Video thumbnail"
                className="w-full h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors duration-300 shadow-2xl">
                  <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          ) : (
            <div className="relative">
              <button 
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              {videoType === 'mp4' ? (
                <video 
                  src={mp4Url}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              ) : (
                <iframe
                  src={getVideoUrl()}
                  className="w-full aspect-video rounded-2xl shadow-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          )}
        </div>

        {/* Stats Below Video */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">500+</div>
            <div className="text-gray-300">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">300%</div>
            <div className="text-gray-300">Average Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">$5M+</div>
            <div className="text-gray-300">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};