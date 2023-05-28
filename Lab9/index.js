class Converter{
    constructor(){
        this.videoName = "video";
    }

    getVideo(video){
        this.videoName = video;
    }

    videoConverting(){ console.log(`Конвертація відео "${this.videoName}" у коректний формат.`) }

    videoUploading(){ console.log(`Завантаження відео "${this.videoName}" на YouTube`) }

    getYouTubeApiKey(){ console.log(`Отримання ключа API`) }

    videoProcessing(){ console.log(`Обробка відео "${this.videoName}"`) }
}

class YouTubeFrontage{
    constructor(convert){
        this.convert = convert;
    }

    uploadedOnYouTube(videoName){
        this.convert.getVideo(videoName);
        this.convert.videoConverting();
        this.convert.videoUploading();
    }

    youTubeAPI(videoName){
        this.convert.getVideo(videoName);
        this.convert.getYouTubeApiKey();
        this.convert.videoProcessing();
    }

}

let frontage = new YouTubeFrontage(new Converter())

frontage.uploadedOnYouTube('Як вчасно лягати спати.mkv')
console.log("--------------------------------------------------------");
frontage.youTubeAPI('Як вчасно лягати спати.mkv')