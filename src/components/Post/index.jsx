import React from "react";
import useFetch from "fetch-suspense";
import { Link } from "react-router-dom";

// utilities
import { createMarkup } from "../../utilities/CreateMarkup";

const POST_PATH = "/blog";

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
        <Link to={`${POST_PATH}/${slug}`}>
          <h2 itemProp="headline">{postTitle}</h2>
        </Link>

        {/* <!-- publication date --> */}
        <div className="date">
          <strong>Publish Date</strong>:
          <span itemProp="datePublished">
            <time dateTime={date}>{date}</time>
          </span>
        </div>

        <div className="author">
          <strong>Author</strong>:
          <a href={authorLink}>
            <span itemProp="author">{authorName}</span>
          </a>
        </div>
      </header>

      <div
        itemProp="articleBody"
        className="content"
        dangerouslySetInnerHTML={createMarkup(postExcerpt)}
      />
    </article>
  );
};

export default Post;
