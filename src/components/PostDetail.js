import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Post.css";
import "./main.css";

function PostDetail() {
    const { postId } = useParams();
    const post = data.find((post) => post.post_number === parseInt(postId));

    if (!post) {
        return <div>Post not found</div>;
    }
    console.log(post.downloads)
    return (
        <div className="container post-container">
            <Helmet>
                <title>{post.title} | WhatsApp Stickers</title>
                <meta property="og:title" content={post.title} />
                <meta
                    property="og:description"
                    content={`Get ${post.title} sticker pack here`}
                />
                <meta
                    property="og:image"
                    content="https://wastickers.me/og-thumb.png"
                />
                <meta
                    property="og:url"
                    content={`https://wastickers.me/stickers/pack/${post.post_number}`}
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:site_name" content="WhatsApp Stickers" />
                <meta name="twitter:image:alt" content="Sticker set preview" />
                <meta
                    name="description"
                    content="Free funny animated meme WhatsApp sticker packs for Android & iOS"
                />
                <meta
                    name="keywords"
                    content="Whatsapp, Stickers, Whatsapp stickers, Whatsapp animated stickers, Free whatsapp stickers, Whatsapp meme stickers, Whatsapp funny stickers, Funny whatsapp stickers, Meme stickers, Animated stickers, iOS animated stickers, Whatsapp iOS stickers, Sticker Maker, Sticker Maker sticker packs, wastickers, Adult WhatsApp sticker, Porn WhatsApp sticker, Sex WhatsApp sticker, Funny sex sticker, Sexy sticker, Sexual WhatsApp sticker"
                />
                <meta name="robots" content="index, follow" />
                <link
                    rel="canonical"
                    href="https://wastickers.naijazone.co///stickers/pack/{postId}"
                />
                <script
                    type="text/javascript"
                    src="//crumbrationally.com/ab/15/87/ab15876ff5f9817176f94786b2b16c85.js"
                ></script>
            </Helmet>

            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h2>{post.title}</h2>
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-8 mx-auto">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <img src={post.image} alt={post.title} width="200px" />
                        </div>
                        <div className="col-md-4 col-12 pt-3">
                            <p>Author: Yelnats</p>
                            <p>Date: {new Date().toLocaleDateString()}</p>
                            <p>Animated: Yes</p>
                            <p>Downloads: {Math.floor(Math.random() * 9000) + 1000}</p>
                            <a href={post.download_link} download className="btn btn-danger">
                                <i className="fas fa-download"></i> Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-10 mx-auto">
                    <h4 className="pt-3">INCLUDED STICKERS</h4>
                    <hr></hr>

                    <div
                        dangerouslySetInnerHTML={{ __html: post.included_stickers }}
                    ></div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8 col-10 mx-auto">
                    <h4 className="pt-3">MORE STICKER PACKS</h4>
                    <hr></hr>
                    <div className="row">
                        {data.slice(0, 6).map((post) => (
                            <div className="col-md-4 col-12" key={post.post_number}>
                                <div className="card post-card">
                                    <div className="row align-items-center">
                                        <div className="col-4">
                                            <div className="post-image-container">
                                                <img
                                                    src={post.featured_image}
                                                    alt={post.title}
                                                    className="card-img-top post-image"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="card-body post-body mb-3">
                                                <Link
                                                    to={`/stickers/pack/${post.post_number}`}
                                                    className="card-title post-title tt"
                                                >
                                                    {post.title}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row spt">
                <div className="col-md-8">
                    <h6>
                        <b>HOW TO ADD</b>
                    </h6>
                    <ol>
                        <li>Install the Sticker Maker App (links given below)</li>
                        <li>
                            Make sure both WhatsApp &amp; Sticker Maker Apps are up-to-date
                        </li>
                        <li>Download the sticker pack</li>
                        <li>Open sticker pack with Sticker Maker App</li>
                        <li>Press 'Add to my library'</li>
                        <li>Press 'Add to WhatsApp'</li>
                    </ol>
                    <p>
                        Animated stickers are supported for both iOS &amp; Android now!
                        Animated Sticker support available only on the latest version of
                        Sticker Maker &amp; WhatsApp.
                    </p>
                </div>
                <div className="col-md-4">
                    <h6>
                        <b>STICKER MAKER APPS</b>
                    </h6>
                    <ul className="collection">
                        <li className="collection-item avatar">
                            <i className="fab fa-android fa-lg"></i>
                            <span className="title">Android</span>
                            <p>
                                Sticker Maker
                                <br />
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.marsvard.stickermakerforwhatsapp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open in Playstore
                                </a>
                            </p>
                        </li>
                        <li className="collection-item avatar">
                            <i className="fas fa-mobile-alt fa-lg"></i>
                            <span className="title">iOS</span>
                            <p>
                                Sticker Maker Studio
                                <br />
                                <a
                                    href="https://itunes.apple.com/mx/app/sticker-maker-studio/id1443326857?mt=8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open in Appstore
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row spt">
                <div className="col-md-8 .mz-auto">
                    <h2>Why WhatsApp Stickers Are the Next Big Thing</h2>
                    <p>
                        Discover a whole new level of expression with WhatsApp stickers.
                        From funny and meme-inspired stickers to animated and personalized
                        creations, spice up your chats with a fresh and creative way to
                        convey emotions, reactions, and ideas.
                    </p>

                    <h2>Creating Your Own WhatsApp Stickers</h2>
                    <p>
                        Stand out from the crowd by designing your own WhatsApp stickers.
                        Personalize your chats with images, drawings, or photos of your
                        friends and family, adding a personal touch to your conversations.
                    </p>

                    <h2>Animated Stickers: Bring Your Chats to Life</h2>
                    <p>
                        Elevate your chats with animated stickers. Capture attention and add
                        an extra layer of fun with lively animations, cute characters, and
                        mesmerizing effects. iOS users can find the perfect animated sticker
                        packs to enhance their messaging experience.
                    </p>

                    <h2>Free WhatsApp Stickers: Where to Find Them</h2>
                    <p>
                        Explore countless sources for free WhatsApp stickers. From dedicated
                        sticker apps to sticker libraries and communities, find sticker
                        packs that resonate with your style and interests.
                    </p>

                    <h2>Embrace the Fun: Add Some Spice to Your Chats!</h2>
                    <p>
                        Inject humor and excitement into your WhatsApp conversations. Get
                        your hands on funny, meme-inspired, animated, and personalized
                        stickers, transforming your chats into lively exchanges that leave a
                        lasting impression.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PostDetail;
