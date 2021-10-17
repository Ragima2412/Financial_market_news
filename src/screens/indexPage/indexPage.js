import './IndexPage.css';
import NewsArticle from '../../components/newsArticle/NewsArticle';
import Image from '../../assets/images/5.png';
import { Context } from '../..';
import React from 'react';

function IndexPage() {
    const data = React.useContext(Context);
    return (
        <div className="indexPage">
            <div className="indexPage_container">
                {data?.map(item => { return <NewsArticle value={item} /> })}

            </div>
        </div>
    )
}
{/* <NewsArticle image={Image} articleLink={"Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago"} urlLink={'https://www.reuters.com/article'} /> */ }
export default IndexPage;