import React from 'react';
import Button from '../button/button';
import './readMoreComponent.css';

const ReadMore = () =>(
<div className="four-read-more">

<div className='first-read'
style={{
    backgroundImage:'url(/images/story6.JPG)'
}}
>
    <button className='first-button'> READ MORE</button>

</div>

<div className='second-read'
style={{
    backgroundImage:'url(/images/story_img4.jpg)'
}}
>
    <button className='first-button'> READ MORE</button>

</div>

<div className='third-read'
style={{
    backgroundImage:'url(/images/story5.JPG)'
}}
>
    <button className='first-button'> READ MORE</button>

</div>

<div className='fourth-read'
style={{
    backgroundImage:'url(/images/story3.JPG)'
}}
>
    <button className='first-button'> READ MORE</button>

</div>

</div>
);

export default ReadMore;