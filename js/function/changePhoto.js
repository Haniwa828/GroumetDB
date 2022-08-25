function changePhoto(id, src){
    let idNum = Number(id.replace('photo', ''));
    let photoId = 'mainImage'+ idNum;
    let element = document.getElementById(photoId);
    
    element.src = src;
}