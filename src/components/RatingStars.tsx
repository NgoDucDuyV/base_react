import { Star, StarHalf, StarOff } from "lucide-react";

const RatingStars = ({ rating = 0 }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-1 text-yellow-400">
            {/* Full stars */}
            {Array.from({ length: fullStars }).map((_, i) => (
                <Star key={`full-${i}`} size={18} fill="currentColor" />
            ))}

            {/* Half star */}
            {hasHalfStar && (
                <StarHalf size={18} fill="currentColor" />
            )}

            {/* Empty stars */}
            {/* {Array.from({ length: emptyStars }).map((_, i) => (
                <Star key={`empty-${i}`} size={18} />
            ))} */}
        </div>
    );
};

export default RatingStars;