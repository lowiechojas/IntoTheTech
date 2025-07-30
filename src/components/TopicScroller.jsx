import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // or use your own icons
import topics from '../data/topics.json';
import { Link } from 'react-router-dom';

const TopicScroller = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 7;

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + visibleCount < topics.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const visibleTopics = topics.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="w-full max-w-[100vw] mx-auto py-10 px-4">

      <div className="flex items-center justify-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="p-2 text-white bg-gray-700 rounded-full disabled:opacity-30"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Cards */}
        <div className="flex gap-6 h-[20vh] sm:h-auto overflow-hidden w-full justify-center">
          {visibleTopics.map((topic, index) => (
            <Link
          key={topic.id}
          to={`/electronics/${topic.slug}`}
          >
            <div
              key={topic.id}
              className="w-50 shrink-0 p-2 h-[35vh] rounded-xl overflow-hidden bg-white text-black shadow-md hover:shadow-xl transition-transform duration-300 cursor-pointer"
            >
              <img
                src={topic.image}
                alt={topic.title}
                className="w-auto  sm:h-[20vh] object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{topic.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-4">{topic.description}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= topics.length}
          className="p-2 text-white bg-gray-700 rounded-full disabled:opacity-30"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TopicScroller;
