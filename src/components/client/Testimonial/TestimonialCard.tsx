import React from 'react';

const TestimonialCard = () => {
  return (
    <div className="max-w-[400px] bg-white border border-black/5 rounded-[20px] p-7 shadow-sm">
      {/* Phần xếp hạng sao */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className="w-5 h-5 fill-[#FFC107]" 
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      {/* Tên và Tick xác minh */}
      <div className="flex items-center gap-1.5 mb-3">
        <span className="text-xl font-bold text-black">Alex K.</span>
        <div className="bg-[#01AB31] rounded-full p-0.5">
          <svg 
            className="w-3 h-3 text-white" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      {/* Nội dung đánh giá */}
      <p className="text-black/60 text-[15px] leading-relaxed">
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
      </p>
    </div>
  );
};

export default TestimonialCard;