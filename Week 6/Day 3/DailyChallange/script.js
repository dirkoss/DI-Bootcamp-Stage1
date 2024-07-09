
class Video {
    constructor(title = str, uploader = str, time = int) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

let video1 = new Video("Bambi", "Dirk", 7200);
let video2 = new Video("Toy Story", "Ultee", 9800);
video1.watch();

let videoArray = [
    {
        title: "Bambi",
        uploader: "Dirk",
        time: 7200
    },
    {
        title: "Toy Story",
        uploader: "Ultee",
        time: 9800
    },
    {
        title: "Toy Story 2",
        uploader: "Dirkos",
        time: 10000
    },
    {
        title: "Toy Story 3",
        uploader: "Ultos",
        time: 9000
    },
    {
        title: "Toy Story 4",
        uploader: "Dirki",
        time: 8200
    }
];

videoArray.forEach(element => {
    let video = new Video(element.title, element.uploader, element.time);
    video.watch();
}
);


