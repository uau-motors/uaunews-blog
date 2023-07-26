import React from "react";

interface ReviewMetaProps {
  score: number;
  place: string;
}

const ReviewMeta: React.FC<ReviewMetaProps> = ({ score, place }) => {
  return (
    <div className="review-meta-inner">
      <span className="rline-wrap">
        <span className="rline"></span>
        <span className="rline"></span>
        <span className="rline"></span>
        <span className="rline"></span>
        <span className="rline"></span>
      </span>
      <div className="review-extra">
        <span className="review-description">
          <strong className="meta-bold">{score.toFixed(1)}</strong> de 10
        </span>
        <span className="extra-meta meta-bold">{place}</span>
      </div>
    </div>
  );
};

export default ReviewMeta;
