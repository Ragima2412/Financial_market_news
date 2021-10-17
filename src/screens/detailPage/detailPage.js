import './DetailPage.css';
import { useLocation } from "react-router-dom";

function DetailPage() {

    let location = useLocation();
    let article = location.userProps?.articleLink;

    document.addEventListener("DOMContentLoaded", function () {
        var lazyloadImages = document.querySelectorAll("img.articleImage");
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
                if (lazyloadImages.length === 0) {
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
        <div className="detailPage" >
            <div className="articleTitleText">{article?.title}</div>
            <div className="imageContainer">
                <img alt="articleImage" classname="articleImage" src={article?.imageUrl}></img>
            </div>
            <div className="articleDescription">{article?.description}</div>
            <div className="articleExpertComment">
                <h3 className="expertComment">Expert Comment</h3>
                {article?.expertComment}</div>
        </div>
    )
}
export default DetailPage;



