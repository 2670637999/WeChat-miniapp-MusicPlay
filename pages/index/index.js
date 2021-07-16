// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    name:'...', 
    pageUrl:'', 
    imageUrl:'',
    state: false,
    buttonImage: '',
    audio:[
      { id: 0, name:'华语流行' , pageUrl:'/pages/page2/page2?id=0', imageUrl:'/images/CA.png', fileUrl:'/images/CA.mp3',state: true },
      { id: 1, name:'纯音乐/励志', pageUrl:'/pages/page2/page2?id=1', imageUrl:'/images/CB.png', fileUrl:'/images/CB.mp3',state: true },
      { id: 2, name:'心灵驿站', pageUrl:'/pages/page2/page2?id=2', imageUrl:'/images/CC.png', fileUrl:'/images/CC.mp3',state: true },
      { id: 3, name:'轻缓纯音', pageUrl:'/pages/page2/page2?id=3', imageUrl:'/images/CD.png', fileUrl:'/images/CD.mp3',state: true },
      { id: 4, name:'lofi/治愈', pageUrl:'/pages/page2/page2?id=4', imageUrl:'/images/CE.png', fileUrl:'/images/CE.mp3',state: true},
      { id: 5, name:'Viva La Vida', pageUrl:'/pages/page2/page2?id=5', imageUrl:'/images/CF.png', fileUrl:'/images/CF.mp3',state: true}
    ]
  },
  onclick(e){
    var music = wx.createAudioContext('myAudio')
    var musicData = e.currentTarget.dataset.index
    this.setData({
      name : musicData.name,
      pageUrl : musicData.pageUrl,
      imageUrl : musicData.imageUrl,
      state : musicData.state
    })
    music.setSrc(musicData.fileUrl)
    this.setState()
    music.play()
  },
  stopMusic(){
    this.setData({ state:(!this.data.state) })
    this.setState()
  },
  onReady: function (e) {
    
  },
  onLoad() {
    this.setState()
    console.log(this.data.state)
  },
  setState(){
    var music = wx.createAudioContext('myAudio')
    if(this.data.state == true){
      this.setData({
        buttonImage: '/images/stop.png'
      })
      music.play()
    }if(this.data.state == false){
      this.setData({
        buttonImage: '/images/play.png'
      })
      music.pause()
    }
    console.log(this.data.state)
  }

})
