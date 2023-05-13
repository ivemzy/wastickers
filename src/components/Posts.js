import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import "./Post.css";
import "./main.css";
import { Helmet } from "react-helmet";

function Post() {
  const numPosts = 16;
  const [visiblePosts, setVisiblePosts] = useState(numPosts);

  const renderPosts = () => {
    const posts = [];

    for (let i = 0; i < data.length && posts.length < visiblePosts; i++) {
      const post = data[i];

      if (post.featured_image) {
        posts.push(
          <div
            key={post.title}
            className="col-lg-5 col-md-5 col-12 mx-auto pt-3"
          >
            <div className="card post-card">
              <div className="row align-items-center">
                <div className="col-4">
                  <div className="post-image-container">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="card-img-top post-image"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body post-body">
                    <Link
                      to={`/stickers/pack/${post.post_number}`}
                      className="card-title post-title"
                    >
                      {post.title}
                    </Link>
                    <br />
                    <span className="badge badge-success">Animated</span>
                    <p>
                      <i className="fas fa-download"></i>{" "}
                      {Math.floor(Math.random() * 9000) + 1000}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    return posts;
  };

  const loadMore = () => {
    setVisiblePosts(visiblePosts + numPosts);
  };

  return (
    <div className="container-fluid post-container">
      <Helmet>
        <title>WhatsApp Stickers</title>
        <meta property="og:title" content="WhatsApp Stickers" />
        <meta
          property="og:description"
          content="Free funny animated meme whatsapp sticker packs for Android & iOS"
        />
        <meta
          property="og:image"
          content="https://wastickers.me/og-thumb.png"
        />
        <meta property="og:url" content="https://wastickers.naijazone.co//" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="WhatsApp Stickers" />
        <meta name="twitter:image:alt" content="Sticker set preview" />
        <meta
          name="description"
          content="Free funny animated meme whatsapp sticker packs for Android & iOS"
        />
        <meta
          name="keywords"
          content="Whatsapp, Stickers, Whatsapp stickers, Whatsapp animated stickers, Free whatsapp stickers, Whatsapp meme stickers, Whatsapp funny stickers, Funny whatsapp stickers, Meme stickers, Animated stickers, iOS animated stickers, Whatsapp iOS stickers, Sticker Maker, Sticker Maker sticker packs, wastickers, Adult whatsapp sticker, Porn whatsapp sticker, Sex whatsapp sticker, Funny sex sticker, Sexy sticker,Sexual whatsapp sticker"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wastickers.naijazone.co//" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="row"><h1 className="heading">Adult - Whatsapp Stickers</h1></div>
      <div className="row">{renderPosts()}</div>
      {visiblePosts < data.filter((post) => post.featured_image).length && (
        <div className="text-center mt-4">
          <button className="btn btn-success" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Post;
