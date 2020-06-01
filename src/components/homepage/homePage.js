import React from 'react';
import './homePage.css';
import ReadMore from '../read-more/readMoreComponent';
import ArticlePage from '../article/articlePageComponent';
import PopularArticle from '../article/popularArticlePage';
import ContactEvent from '../contact-event-page/contactEventPage';

const HomePage = () => (
<div className="homepage">
<div className='first-image' 
style={{
    backgroundImage:'url(/images/podcast.png)'
}}
/>

<div className='second-image'
style={{
    backgroundImage: 'url(/images/story-banner.png)'
}}
/>
<ReadMore/>
<ArticlePage/>
<PopularArticle/>
<ContactEvent/>
</div>


);
export default HomePage;