import './IndexPage.css';
import NewsArticle from '../../components/newsArticle/NewsArticle';
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
export default IndexPage;