import CategoryHeader from "@molecules/CategoryPageHeader";
import CategoryFeatureds from "@molecules/CategoryPageFeaturedsPosts";
import React from "react";
import { PostCardDataI } from "@utility/interfaces";

interface FeaturedPostsProps {
  posts: PostCardDataI[];
  screen: string;
  width: number;
}
const CategoryPage = ({ posts, screen, width }: FeaturedPostsProps) => {
  return (
    <section className="category-section">
      <CategoryHeader />
      <CategoryFeatureds posts={posts} screen={screen} width={width} />
    </section>
  );
};

export default CategoryPage;
