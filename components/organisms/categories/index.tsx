import CategoryHeader from "@molecules/category-header";
import CategoryFeatureds from "@molecules/category-featureds";
import React from "react";
import { PostCardDataI } from "@utility/interfaces";

interface FeaturedPostsProps {
  posts: PostCardDataI[];
}
const CategoryPage = ({ posts }: FeaturedPostsProps) => {
  return (
    <section id="categorySection">
      <CategoryHeader />
      <CategoryFeatureds posts={posts} />
    </section>
  );
};

export default CategoryPage;
