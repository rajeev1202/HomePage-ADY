import React from 'react';
import './popularArticlePage.css';

const PopularArticle = () => (

    <div className='popular-article-container'>
        <div className='popular-article'>
            <h3>WHAT IS PERFORMANCE<br /> MARKETING?</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don't look even slightly believable.
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <a className="continue-reading" href='url'>Continue reading >></a><br />
            <a className="more-articles" href='url'>MORE ARTICLES</a><br />
        </div>


        <div className="popular-clips">
            <h3>POPULAR</h3>
            <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
            <div className='popular-video'
                style={{
                    backgroundImage: 'url(/images/video-1.jpg)'
                }}
            />
            <a className="more-video" href='url'>MORE VIDEOS</a><br />
        </div>

    </div>
);

export default PopularArticle;