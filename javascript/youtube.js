const videos = [{
    image: "thumbnails/thumbnail-1.webp",
    videoTime: "10:20",
    channelsPicture : "channels-pictures/channel-1.jpg",
    firstParagraph : "Tinubu Appoints New CEOs of 8 Agencies under information Ministry",
    secondParagraph : "TVC News Nigeria",
    thirdParagraph : "617 views &#183 6 days ago"
},

{
    image: 'thumbnails/thumbnail-2.webp',
    videoTime: '8:22',
    channelsPicture : "channels-pictures/channel-2.jpg",
    firstParagraph : 'React Hooks Course- All React Hooks Explained',
    secondParagraph : 'PedroTech',
    thirdParagraph : '920k views &#183 2 years ago'
},
{
    image: 'thumbnails/thumbnail-3.webp',
    videoTime: '22:09',
    channelsPicture : "channels-pictures/channel-3.jpg",
    firstParagraph : 'How to put an HTML website online',
    secondParagraph : 'SuperSimpleDev',
    thirdParagraph : '934k &#183 1 year ago'
},
{
    image: 'thumbnails/thumbnail-4.webp',
    videoTime: '11:17',
    channelsPicture : "channels-pictures/channel-4.jpg",
    firstParagraph : 'Messi 2 goal Argentina Vs Peru 2-0',
    secondParagraph : 'All Goals & Highlights - 2023 &#183',
    thirdParagraph : '1.1M views &#183 8 days ago'
},
{
    image: "thumbnails/thumbnail-5.webp",
    videoTime: '19:59',
    channelsPicture : "channels-pictures/channel-5.jpg",
    firstParagraph : 'Exploratory Data Analysis with Pandas Python 2023',
    secondParagraph : 'Rob Mulla &#183',
    thirdParagraph : '173K views &#183 6 months ago'
},
{
    image: 'thumbnails/thumbnail-6.webp',
    videoTime: '22:09',
    channelsPicture : "channels-pictures/channel-6.jpeg",
    firstParagraph : "Talking Tech and AI with Google CEO and Sundar pichal!",
    secondParagraph : "Marques Browniee &#183",
    thirdParagraph : "3.4M views &#183 6 months ago"
},
{
    image: 'thumbnails/thumbnail-7.webp',
    videoTime: '17:15',
    channelsPicture : "channels-pictures/channel-7.jpeg",
    firstParagraph : 'Try Not To Laugh Challenge #9',
    secondParagraph : 'Markiplier &#183',
    thirdParagraph : '19M views &#183 4 years ago'
},
{
    image: 'thumbnails/thumbnail-8.webp',
    videoTime: '30:06',
    channelsPicture : "channels-pictures/channel-8.jpeg",
    firstParagraph : 'Crazy Tik Toks Taken Moments Before DISASTER',
    secondParagraph : 'SSniperWolf &#183',
    thirdParagraph : '12M views &#183 1 year ago'
},
{
    image: 'thumbnails/thumbnail-9.webp',
    videoTime: '29:09',
    channelsPicture : "channels-pictures/channel-9.jpeg",
    firstParagraph : 'The Simplest Math Problem No One can Solve - Collatz Conjectures',
    secondParagraph : 'Varitasium &#183',
    thirdParagraph : '18M views &#183 8 months ago'
},
{
    image: 'thumbnails/thumbnail-10.webp',
    videoTime: '8:05:09',
    channelsPicture : "channels-pictures/channel-10.jpeg",
    firstParagraph : 'Kadanes Algorithm to Maximum Sum Subarray Problem',
    secondParagraph : 'Cs Dojo &#183',
    thirdParagraph : '524K views &#183 6 years ago'
},
{
    image: 'thumbnails/thumbnail-11.webp',
    videoTime: '3:37',
    channelsPicture : "channels-pictures/channel-11.jpeg",
    firstParagraph : 'Anything you Can Fit in The Circle will pay For',
   secondParagraph : 'MrBeast &#183',
    thirdParagraph : '12M views &#183 1 year ago'
},
{
    image: 'thumbnails/thumbnail-12.webp',
    videoTime: '80:04',
    channelsPicture : "channels-pictures/channel-12.jpeg",
    firstParagraph : 'Why Plane dont Fly over Tibet',
   secondParagraph : 'RealLifeLore &#183',
    thirdParagraph : '7.1M views &#183 1 year ago'
},
{
    image: 'thumbnails/thumbnail-13.webp',
    videoTime: '13:45:39',
    channelsPicture : "channels-pictures/channel-13.jpeg",
    firstParagraph : 'Inside The Worlds Biggest Passenger Plane',
   secondParagraph : 'Tech Vision',
    thirdParagraph : '820K views &#183 2 year ago'
}
];

let videosHtml = ""
videos.forEach((video) => {
    videosHtml += `
    <div class="sub-main-container-css">
        
            <div class="thumbanail-container">
                <img class="thumbanail" src = "${video.image}">
                <div class="video-time">${video.videoTime}</div>
    
            </div>
            <div class="channels-container-css">
                <div>
                    <img class="channels-pictures" src="${video.channelsPicture}" >
                </div>
                <div class="paragraph-container">
                    <p class = "title-paragraph-css">
                        ${video.firstParagraph}
                    </p>
                    <div class="view-paragraph-container">
                        <div >
                            <p class="views-paragraph-css">${video.secondParagraph}</p>
                        </div>
                        <div>
                            <p class="views-paragraph-css" >${video.thirdParagraph}</p>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>` 
}) 
document.querySelector(".main-container").innerHTML = videosHtml;