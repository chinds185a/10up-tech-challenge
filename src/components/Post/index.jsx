import React from "react";
import useFetch from "fetch-suspense";

// utilities
import { createMarkup } from "../../utilities/CreateMarkup";

// components
import PostDate from "../PostDate";
import PostHeadline from "../PostHeadline";
import PostAuthor from "../PostAuthor";
import PostExcerpt from "../PostExcerpt";

const Post = ({ post }) => {
  const {
    slug,
    title: { rendered: postTitle },
    date,
    excerpt: { rendered: postExcerpt },
    author
  } = post;

  const { name: authorName, link: authorLink } = useFetch(
    `https://exercise.10uplabs.com/wp-json/wp/v2/users/${author}`,
    {
      method: "GET"
    }
  );
  return (
    <article
      itemScope
      itemProp="http://schema.org/BlogPosting"
      className="post"
    >
      <header>
        <PostHeadline headline={postTitle} slug={slug} />
        <PostDate date={date} />
        <PostAuthor authorName={authorName} authorLink={authorLink} />
      </header>

      <PostExcerpt excerpt={createMarkup(postExcerpt)} />
    </article>
  );
};

export default Post;
