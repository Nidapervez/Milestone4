import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

// Import images
import image1 from '../1.jpg';
import image2 from '../2.jpg';
import image3 from '../3.jpg';
import image4 from '../4.jpg';
import image5 from '../5.webp';
import image6 from '../6.jpeg';

const Card = () => {
  const cards = [
    {
      id: 1,
      title: 'Island',
      excerpt: 'Discover the beauty and serenity of island life, offering unique experiences and adventures.',
      Img: image1,
    },
    {
      id: 2,
      title: 'SEO Tips',
      excerpt: 'Learn actionable tips to improve your website’s SEO and attract more traffic.',
      Img: image2,
    },
    {
      id: 3,
      title: 'Web Development Future',
      excerpt: 'Explore technologies that are shaping the future of web development.',
      Img: image3,
    },
    {
      id: 4,
      title: 'Effective Marketing Strategies',
      excerpt: 'Discover strategies that can elevate your marketing efforts in the digital space.',
      Img: image4,
    },
    {
      id: 5,
      title: 'Content Creation',
      excerpt: 'Learn how to create compelling content that resonates with your audience.',
      Img: image5,
    },

    {
      id: 6,
      title: 'Content Creation',
      excerpt: 'Learn how to create compelling content that resonates with your audience.',
      Img: image6,
    }
    // More cards can be added here...
  ];

  return (
    <div className="text-gray-600 body-font">
      <div className="flex flex-wrap -m-4">
        {cards.map((post) => (
          <div key={post.id} className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden animate-pulse hover:border-blue-800 hover:border-4">
              <Image src={post.Img} alt="Blog Image" height={200} width={400} />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {post.title}
                </h1>
                <p className="leading-relaxed mb-3 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center flex-wrap">
                  <Link href={`/blogs/${post.id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
