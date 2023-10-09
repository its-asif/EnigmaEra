import React, { useState } from 'react';

const Blogs = () => {
    const allPosts = [
        {
          title: "The Future of AI in Gaming",
          author: "Tech Guru",
          description: "Explore the impact of artificial intelligence on the gaming industry and what the future holds for AI-powered games."
        },
        {
          title: "Building Virtual Worlds: A Guide for Developers",
          author: "GameDev Pro",
          description: "Learn the principles and best practices for creating immersive virtual worlds in game development. Tips, tricks, and case studies included."
        },
        {
          title: "Cybersecurity in the Digital Age",
          author: "Security Expert",
          description: "A comprehensive overview of the current state of cybersecurity, addressing common threats, preventive measures, and the importance of digital security."
        },
        {
          title: "Tech Innovations Shaping Our Future",
          author: "Futurist",
          description: "Discover the latest technological innovations that have the potential to shape our future. From robotics to biotech, explore the cutting-edge developments."
        },
        {
          title: "The Art of Coding: A Visual Journey",
          author: "CodeArtist",
          description: "Dive into the world of coding as an art form. Explore how coding can be a creative and expressive process, and the visual aesthetics of well-crafted code."
        },
        {
          title: "Exploring Augmented Reality: Beyond Pokemon Go",
          author: "AR Enthusiast",
          description: "Delve into the world of augmented reality and its applications beyond gaming. From education to healthcare, discover how AR is transforming industries."
        },
        {
          title: "The Rise of NFTs in the Art and Gaming World",
          author: "CryptoArt Maven",
          description: "Explore the intersection of blockchain technology, non-fungible tokens (NFTs), and the art and gaming industries. Learn about digital ownership and the NFT revolution."
        },
        {
          title: "Game Design Principles: Balancing Fun and Challenge",
          author: "Game Design Maestro",
          description: "Gain insights into the key principles of game design. Learn how to strike the right balance between fun gameplay and challenging experiences for players."
        },
        {
          title: "The Quantum Computing Revolution",
          author: "Quantum Explorer",
          description: "An in-depth exploration of quantum computing and its potential to revolutionize computation. Understand the principles behind quantum bits and quantum algorithms."
        },
        {
          title: "Evolving Trends in Mobile App Development",
          author: "AppDev Trendsetter",
          description: "Stay updated on the latest trends in mobile app development. From cross-platform frameworks to emerging technologies, discover what's shaping the future of mobile apps."
        },
        {
            title: "Ethical Considerations in AI: Building Responsible Systems",
            author: "Ethics Advocate",
            description: "Examine the ethical challenges and considerations in the development and deployment of artificial intelligence. Learn how to build responsible and fair AI systems."
          },
          {
            title: "The Impact of 5G on Emerging Technologies",
            author: "Connectivity Enthusiast",
            description: "Explore the transformative impact of 5G technology on various emerging technologies, from IoT and AR to smart cities. Understand the potential of ultra-fast, low-latency connectivity."
          },
          {
            title: "Data Privacy in the Digital Age",
            author: "Privacy Advocate",
            description: "An in-depth look at the importance of data privacy in our interconnected world. Learn about best practices, regulations, and the role of individuals in protecting their data."
          },
          {
            title: "Beyond Silicon: Exploring Alternative Computing Materials",
            author: "Materials Scientist",
            description: "Dive into the world of alternative materials for computing beyond traditional silicon. Discover materials like graphene and quantum dots and their potential impact on future technologies."
          },
          {
            title: "The Evolution of E-Sports: From Niche to Mainstream",
            author: "E-Sports Analyst",
            description: "Chart the evolution of electronic sports (e-sports) and its journey from a niche subculture to mainstream entertainment. Explore the key players, tournaments, and future trends."
          },
          {
            title: "The Power of Community: Open Source in Tech",
            author: "Open Source Advocate",
            description: "Celebrate the power of open source communities in the tech world. Learn about the collaborative spirit, innovation, and impact of open source projects on technology development."
          },
      ];


      const [visiblePosts, setVisiblePosts] = useState(allPosts.slice(0, 6));
      const [showAll, setShowAll] = useState(false);
    
      const handleShowAll = () => {
        setVisiblePosts(allPosts);
        setShowAll(true);
      };

  return (
    <div>
      <h2 className="text-4xl w-fit mx-auto my-8 font-semibold bg-neutral text-white p-5 rounded-md">Recent Blog Posts</h2>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-5 cursor-pointer'>
        {visiblePosts.map((post, index) => (
            <div className=''>
                <div className="card bg-neutral-content h-full">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">{post.title}</h2>
                    <p className='ml-auto'>by {post.author}</p>
                    <p>{post.description}</p>
                </div>
                </div>
            </div>
            
        ))}
      </ul>
      {!showAll && (
        <div className='w-full text-center'>
            <button onClick={handleShowAll} className="btn btn-secondary mt-5">
            Show All
            </button>
        </div>
      )}
    </div>
  );
};
export default Blogs;
