let make_album=(artist:string,title:string,tracks?:number)=>{
    let album:{artist:string; title:string; tracks?:number}={
        artist:artist,
        title:title
    }

if (tracks!== undefined){
    album.tracks=tracks;
}
return album}
let album1=make_album("artist1","title1")
let album2=make_album("artist2","title2",5)
let album3=make_album("artist3","title3")
console.log(album1)
console.log(album2)
console.log(album3)