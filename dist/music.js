const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "杀死那个石家庄人",
        artist: '万青旅店',
        url: 'http://139.196.100.227:5555/muisc/shasinage.mp3',
        cover: 'https://p2.music.126.net/W1kczDCB4-r-uNAznD1ljg==/108851651165850.jpg',
      },
      {
        name: "摆脱身体",
        artist: '蒋丽萍',
        url: 'http://139.196.100.227:5555/muisc/yaobaishenti.mp3',
        cover: 'https://p2.music.126.net/TeoPnAtNwpoAIEZKt-BJ6w==/59373627916983.jpg',
      },
      {
        name: "竹内まりや - プラスティック・ラヴ",
        artist: '佚名',
        url: 'http://139.196.100.227:5555/muisc/riwen.mp3',
        cover: 'https://p1.music.126.net/jCxbJCJx3te-2JR3_wrAmQ==/621224069714657.jpg',
      }

      
    ]
});