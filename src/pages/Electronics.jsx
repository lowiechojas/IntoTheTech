import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/topics.json'; // adjust path as needed

const Electronics = () => {
  const { topicId } = useParams(); // undefined if just "/electronics"

  const selectedTopic = topicId
    ? data.find(t => t.slug === topicId)  // assumes `slug` is in your data
    : null;

  return (
    <div className="flex h-screen overflow-hidden ml-30 mr-30">
      {/* Sidebar with scroll */}
      <div className="w-1/8 bg-gray-100 p-4 space-y-2 overflow-y-auto">
        {data.map(topic => (
          <Link
            key={topic.id}
            to={`/electronics/${topic.slug}`}
            className="block text-blue-700 hover:underline"
          >
            {topic.title}
          </Link>
        ))}
      </div>

      {/* Main content */}
      <div className="w-full p-4 overflow-y-auto bg-zinc-50">
        {selectedTopic ? (
          <div>
            <h1 className="text-3xl font-bold">{selectedTopic.title}</h1>
            <p className="mt-4 text-lg">{selectedTopic.description}</p>
            <p className='text-lg'>{selectedTopic.content}</p>
            <img
              src={selectedTopic.image}
              alt={selectedTopic.title}
              className="w-auto h-[50vh] mt-6"
            />
          </div>
        ) : (
          <div>
            <h2 className="text-xl text-gray-600">
              We're excited for you to learn something in Electronics!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Electronics;
