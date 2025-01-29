const toggleSwitch = document.getElementById('switch');
const themeLink = document.getElementById('theme-link');

function applyTheme(theme) {
    if (theme === 'light') {
        themeLink.setAttribute('href', 'style-s-bianco.css');
        toggleSwitch.checked = true;
        document.getElementById('description').style.color = 'black';
        document.getElementById('description').style.backgroundColor = '#f8f9fa';
        document.getElementById('description').style.border = '2px solid black';
        document.getElementById('description1').style.color = 'black';
        document.getElementById('description1').style.backgroundColor = '#f8f9fa';
        document.getElementById('description1').style.border = '2px solid black';
        document.getElementById('description2').style.color = 'black';
        document.getElementById('description2').style.backgroundColor = '#f8f9fa';
        document.getElementById('description2').style.border = '2px solid black';
        document.getElementById('description3').style.color = 'black';
        document.getElementById('description3').style.backgroundColor = '#f8f9fa';
        document.getElementById('description3').style.border = '2px solid black';
        document.getElementById('tt').style.color = 'black';
        document.getElementById('tt').style.background = '#f8f9fa';
        document.getElementById('tt').style.borderBottom = '2px solid black';
        document.getElementById('tt').style.borderTop = '2px solid black';
        document.getElementById('ig').style.color = 'black';
        document.getElementById('ig').style.background = '#f8f9fa';
        document.getElementById('ig').style.borderBottom = '2px solid black';
        document.getElementById('ig').style.borderTop = '2px solid black';
        document.getElementById('ds').style.color = 'black';
        document.getElementById('ds').style.background = '#f8f9fa';
        document.getElementById('ds').style.borderBottom = '2px solid black';
        document.getElementById('ds').style.borderTop = '2px solid black';
        document.getElementById('yt').style.color = 'black';
        document.getElementById('yt').style.background = '#f8f9fa';
        document.getElementById('yt').style.borderBottom = '2px solid black';
        document.getElementById('yt').style.borderTop = '2px solid black';
        var qrImage = document.getElementById('qr');
        qrImage.setAttribute('src', 'images-video-social/qr.png');
        document.getElementById('qr').style.backgroundColor = '#f8f9fa';
        document.getElementById('qr').style.border = '2px solid black';
        document.getElementById('here').style.color = '#9900ff';
        document.getElementById('here1').style.color = '#9900ff';
        document.getElementById('here2').style.color = '#9900ff';
        document.getElementById('here3').style.color = '#9900ff';
        document.getElementById('here4').style.color = '#9900ff';
        document.getElementById('here5').style.color = '#9900ff';
        document.getElementById('here6').style.color = '#9900ff';
        document.getElementById('link1').style.color = 'black';
        document.getElementById('link2').style.color = 'black';
        document.getElementById('link3').style.color = 'black';
        document.getElementById('link4').style.color = 'black';
    } else {
        themeLink.setAttribute('href', 'style-s-nero.css');
        toggleSwitch.checked = false;
        document.getElementById('description').style.backgroundColor = '#151515';
        document.getElementById('description').style.color = 'white';
        document.getElementById('description').style.border = '2px solid white';
        document.getElementById('description1').style.backgroundColor = '#151515';
        document.getElementById('description1').style.color = 'white';
        document.getElementById('description1').style.border = '2px solid white';
        document.getElementById('description2').style.color = 'white';
        document.getElementById('description2').style.backgroundColor = '#151515';
        document.getElementById('description2').style.border = '2px solid white';
        document.getElementById('description3').style.color = 'white';
        document.getElementById('description3').style.backgroundColor = '#151515';
        document.getElementById('description3').style.border = '2px solid white';
        document.getElementById('tt').style.color = 'white';
        document.getElementById('tt').style.background = '#151515';
        document.getElementById('tt').style.borderBottom = '2px solid white';
        document.getElementById('tt').style.borderTop = '2px solid white';
        document.getElementById('ig').style.color = 'white';
        document.getElementById('ig').style.background = '#151515';
        document.getElementById('ig').style.borderBottom = '2px solid white';
        document.getElementById('ig').style.borderTop = '2px solid white';
        document.getElementById('ds').style.color = 'white';
        document.getElementById('ds').style.background = '#151515';
        document.getElementById('ds').style.borderBottom = '2px solid white';
        document.getElementById('ds').style.borderTop = '2px solid white';
        document.getElementById('yt').style.color = 'white';
        document.getElementById('yt').style.background = '#151515';
        document.getElementById('yt').style.borderBottom = '2px solid white';
        document.getElementById('yt').style.borderTop = '2px solid white';
        var qrImage = document.getElementById('qr');
        qrImage.setAttribute('src', 'images-video-social/qr_bianco.png');
        document.getElementById('qr').style.backgroundColor = '#151515';
        document.getElementById('qr').style.border = '2px solid white';
        document.getElementById('here').style.color = '#00eeff';
        document.getElementById('here1').style.color = '#00eeff';
        document.getElementById('here2').style.color = '#00eeff';
        document.getElementById('here3').style.color = '#00eeff';
        document.getElementById('here4').style.color = '#00eeff';
        document.getElementById('here5').style.color = '#00eeff';
        document.getElementById('here6').style.color = '#00eeff';
        document.getElementById('link1').style.color = 'white';
        document.getElementById('link2').style.color = 'white';
        document.getElementById('link3').style.color = 'white';
        document.getElementById('link4').style.color = 'white';
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
}

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        applyTheme('light');
        localStorage.setItem('theme', 'light');
    } else {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    }
});

const videos = document.querySelectorAll(".video-gallery video");
let currentVideoIndex = 0;

function switchVideo() {
    videos[currentVideoIndex].classList.remove('active');
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videos[currentVideoIndex].classList.add('active');
}

setInterval(switchVideo, 5000);

function handleVideo(videoId, startTime, endTime) {
    var video = document.getElementById(videoId);

    video.addEventListener('loadedmetadata', function() {
        video.currentTime = startTime;
    });

    video.addEventListener('timeupdate', function() {
        if (video.currentTime >= endTime) {
            video.pause();
            video.currentTime = startTime;
            video.play();
        }
    });

    video.play();
}

handleVideo("video1", 5, 40);
handleVideo("video2", 2, 18);
handleVideo("video3", 0);

const videos1 = document.querySelectorAll(".video-gallery1 video");
let currentVideoIndex1 = 0;

function switchVideo1() {
    videos1[currentVideoIndex1].classList.remove('active');
    currentVideoIndex1 = (currentVideoIndex1 + 1) % videos1.length;
    videos1[currentVideoIndex1].classList.add('active');
}

setInterval(switchVideo1, 5000);

function handleVideo1(videoId, startTime, endTime) {
    var video = document.getElementById(videoId);

    video.addEventListener('loadedmetadata', function() {
        video.currentTime = startTime;
    });

    video.addEventListener('timeupdate', function() {
        if (video.currentTime >= endTime) {
            video.pause();
            video.currentTime = startTime;
            video.play();
        }
    });

    video.play();
}

handleVideo1("video11", 0);
handleVideo1("video22", 5, 30);
handleVideo1("video33", 0);

const videosds = document.querySelectorAll(".video-gallery2 video");
let currentVideoIndexds = 0;

function switchVideods() {
    videosds[currentVideoIndexds].classList.remove('active');
    currentVideoIndexds = (currentVideoIndexds + 1) % videosds.length;
    videosds[currentVideoIndexds].classList.add('active');
}

setInterval(switchVideods, 0);

function handleVideods(videoId, startTime, endTime) {
    var video = document.getElementById(videoId);

    video.addEventListener('loadedmetadata', function() {
        video.currentTime = startTime;
    });

    video.addEventListener('timeupdate', function() {
        if (video.currentTime >= endTime) {
            video.pause();
            video.currentTime = startTime;
            video.play();
        }
    });

    video.play();
}

handleVideods("videods", 0);