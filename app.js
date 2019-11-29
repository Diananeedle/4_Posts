console.log('worked');

const firstPost = {
    id: 1000,
    type: 'img',
    contentUrl: 'https://sport-marafon.ru/upload/blog/img/05/0559-002.jpg',
    content: 'Первый пост (картинка)',
    likes: 0,
    dislikes: 0,
};

const secondPost = {
    id: 2000,
    type: 'video',
    contentUrl: 'https://www.videvo.net/videvo_files/converted/2014_07/videos/Saint_Barthelemy.mov72328.mp4',
    poster: 'https://34travel.me/media/upload/images/2018/august/stars/casey-horner-495112-unsplash.jpg',
    content: 'Второй пост (видео)',
    likes: 0,
    dislikes: 0,
};

const thirdPost = {
    id: 3000,
    type: 'audio',
    contentUrl: 'https://tribeofnoisestorage.blob.core.windows.net/music/546d4264a976798220e9a328623c5eac.mp3',
    content: 'Третий пост (аудио)',
    likes: 0,
    dislikes: 0,

};
function createPost(post) {
    
    const postEl = document.createElement('div');
    postEl.className = 'card';
    
    if (post.type === 'img') {
        const imgEl = document.createElement('img');
        imgEl.src = post.contentUrl;
        imgEl.className = 'card-img';
        postEl.appendChild(imgEl);
    } else 
    if (post.type === 'video') {
        const videoEl = document.createElement('div');
        videoEl.className = 'embed-responsive embed-responsive-16by9';
        postEl.appendChild(videoEl);

        const videoSrc = document.createElement('video');
        videoSrc.src = post.contentUrl;
        videoSrc.poster = post.poster;
        videoSrc.controls = true;
        videoEl.appendChild(videoSrc);
    } else 
    if (post.type === 'audio') {
        const audioEl = document.createElement('div');
        audioEl.className = 'card-img';
        postEl.appendChild(audioEl);

        const audioSrc = document.createElement('audio');
        audioSrc.src = post.contentUrl;
        audioSrc.controls = true;
        audioEl.appendChild(audioSrc);
    };

    const postBodyEl = document.createElement('div');
    postBodyEl.className = 'card-body';
    postEl.appendChild(postBodyEl);

    const postContentEl = document.createElement('p');
    postContentEl.textContent = post.content;
    postBodyEl.appendChild(postContentEl);

    const likesEl = document.createElement('button');
    likesEl.className = 'btn btn-danger';
    likesEl.textContent = '👍 ' + post.likes;
    likesEl.onclick = function () {
        post.likes = post.likes + 1;
        likesEl.textContent = '👍 ' + post.likes;
    };
    postBodyEl.appendChild(likesEl);

    const dislikesEl = document.createElement('button');
    dislikesEl.className = 'btn btn-secondary';
    dislikesEl.textContent = '👎 ' + post.dislikes;
    dislikesEl.onclick = function () {
        post.dislikes = post.dislikes + 1;
        dislikesEl.textContent = '👎 ' + post.dislikes;
    };
    postBodyEl.appendChild(dislikesEl);

    return postEl;
}

const firstPostEl = createPost(firstPost);
const post1El = document.getElementById('post1');

const secondPostEl = createPost(secondPost);
const post2El = document.getElementById('post2');

const thirdPostEl = createPost(thirdPost);
const post3El = document.getElementById('post3');


post1El.appendChild(firstPostEl);
post2El.appendChild(secondPostEl);
post3El.appendChild(thirdPostEl);