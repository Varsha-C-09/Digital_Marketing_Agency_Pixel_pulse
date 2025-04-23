import React from 'react';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { Link } from './ui/Link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  timeToRead: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10 SEO Strategies That Will Boost Your Rankings in 2025',
    excerpt: 'Discover the latest SEO techniques that are driving results for leading brands in the current digital landscape.',
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'May 15, 2025',
    author: 'Samantha Lee',
    category: 'SEO',
    timeToRead: 8
  },
  {
    id: 2,
    title: 'How AI is Revolutionizing Digital Marketing',
    excerpt: 'Explore how artificial intelligence is transforming marketing strategies and what it means for your business.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'May 8, 2025',
    author: 'Alex Morgan',
    category: 'Technology',
    timeToRead: 10
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Content Marketing in 2025',
    excerpt: 'Learn how to create a content strategy that engages your audience and drives conversions in today\'s digital landscape.',
    image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'May 2, 2025',
    author: 'Marcus Johnson',
    category: 'Content',
    timeToRead: 12
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Latest Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay up-to-date with the latest trends and strategies in digital marketing through our blog.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs ml-4">
                    <Calendar size={12} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="ml-auto text-xs text-gray-500">
                    {post.timeToRead} min read
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User size={14} className="mr-1 text-gray-500" />
                    <span className="text-sm text-gray-500">{post.author}</span>
                  </div>
                  <Link
                    href="#"
                    className="text-purple-700 text-sm font-medium hover:text-purple-800 transition-colors duration-300 flex items-center"
                  >
                    Read More <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="px-6 py-3 border border-purple-700 text-purple-700 rounded-full hover:bg-purple-700 hover:text-white transition-colors duration-300 inline-block"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;