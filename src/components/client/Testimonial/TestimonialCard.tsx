import React from 'react';
import { Star, Check } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  review: string;
  rating: number;
}

const TestimonialCard = ({ name, review, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 group">
      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18}
            className={i < rating ? "fill-amber-400 text-amber-400" : "text-zinc-200 dark:text-zinc-700"} 
          />
        ))}
      </div>

      {/* User Info */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl font-black text-zinc-900 dark:text-white tracking-tight group-hover:text-indigo-600 transition-colors">
          {name}
        </span>
        <div className="bg-emerald-500 rounded-full p-0.5 shadow-sm">
          <Check size={10} className="text-white" strokeWidth={4} />
        </div>
      </div>

      {/* Content */}
      <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed font-medium line-clamp-4">
        "{review}"
      </p>
    </div>
  );
};

export default TestimonialCard;