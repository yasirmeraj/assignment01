

function make_album(artist_name:string, album_title:string,...tracks:string[]):{} {
    let album : {
        artist:string,
        title:string,
        tracks?:string
     } = { 
        
        artist:artist_name,
        title:album_title,
        
    }
   // Check if calling includes tracks information then add it in album object
    if (tracks.length>0) {
        
        //As required call to new fuction which adds tracks to the album
        include_tracks(album,tracks[0]);
    }


    return (album);
}

//function which adds tracks information in album
function include_tracks (album,tracks:string):void {

    album.tracks=tracks;

}

console.log("Calling function make_album with number of tracks argument")
console.log(make_album("Atif Aslam","Jazba","12"));
console.log("Calling function make_album without number of tracks argument")
console.log(make_album("Ali Azmat","Junoon"));
console.log("Calling function make_album with number of tracks argument")
console.log(make_album("Sajjad Ali","Zulm","10"));

