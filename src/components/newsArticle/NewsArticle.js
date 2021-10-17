import { Link } from 'react-router-dom';
import './NewsArticle.css';


function NewsArticle(props) {


    document.addEventListener("DOMContentLoaded", function () {
        var lazyloadImages = document.querySelectorAll("img.lazy");
        var lazyloadThrottleTimeout;

        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function () {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function (img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
                if (lazyloadImages.length == 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    });

    return (
        <div className='newsArticle'>
            <div className='newsArticleContainer'>
                <div className='newsArticleImage'>
                    <img alt="articleImage" className="lazy" src={props.value.imageUrl} />
                </div>
                <div className='linkContainer'>
                    <Link to={{ pathname: `/detail_page/${props.value.id}`, userProps: { articleLink: props.value } }} className="articleTitle">
                        {props.value.title}
                    </Link>
                </div>

            </div>
        </div>
    )
}
export default NewsArticle;


