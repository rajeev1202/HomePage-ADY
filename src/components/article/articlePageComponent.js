import React from 'react';
import './articlePageComponent.css';
import {Link} from 'react-router-dom';


const ArticlePage = () => (
<div className="articles-page">
    
    <div className="articles">

<div className='article1'>
<p className='featured'> FEATURED ARTICLE</p>
<p className = 'article-heading'> IF CONTENT IS KING,<br/> THEN WHO IS QUEEN?
</p>
<div className="article-image"
style={{
    backgroundImage: 'url(/images/blog-im1.jpg)'
}}
/>
<p>
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
some form, by injected humour, or randomised words which don't look even slightly believable.
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
some form, by injected humour, or randomised words which don't look even slightly believable.
</p>
<a className="continue-reading" href='url'>Continue reading >></a><br/>
</div> 

<div className='article1'>
<p>GUEST CONTRIBUTOR</p>
<p> HOW USER EXPERIENCE<br/> TRANSLATES TO MARKETING
</p>

<p>
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
some form, by injected humour, or randomised words which don't look even slightly believable.
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
some form, by injected humour, or randomised words which don't look even slightly believable.
</p>
<a className="continue-reading" href='url'>Continue reading >></a><br/>

</div>



</div>



<div className="clips-container"> 
<p className='fresh-clip'>Fresh Clip!</p>

<div className = 'clips'>

<div className='clip1'>
<p> 
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
some form, by injected humour, or randomised words which don't look even slightly believable.

</p>
<div className = 'video' 
style = {{
    backgroundImage: 'url(/images/video-1.jpg)'
}}
/>
</div>

<div className='clip1'>
<p> 
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
some form, by injected humour, or randomised words which don't look even slightly believable.

</p>
<div className = 'video' 
style = {{
    backgroundImage: 'url(/images/video-2.jpg)'
}}
/>
</div>

<div className='clip1'>
<p>
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
some form, by injected humour, or randomised words which don't look even slightly believable.
 </p>
<div className = 'video' 
style = {{
    backgroundImage: 'url(/images/video-1.jpg)'
}}
/>
</div>

</div>



</div>

</div>
);
export default ArticlePage;
