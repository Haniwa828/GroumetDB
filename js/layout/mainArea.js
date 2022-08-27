function mainArea(){ // メイン関連 // function mainArea(id, data)
    // addMainArea(id);
    let announceData = recall("announce");
    let data = recall("sucsess");
    console.log(data)
    if(data === null){
        $('#mainArea').append(' \
        <div> \
            左上のメニューから一度ログアウトし、\
            ログインし直してください。 \
        </div> \
        ')
    }
    announceArea(announceData);
    searchArea("mainArea");
    shopArea("mainArea", data)
}


// function addMainArea(id){ // メインエリア追加
//     $('#' + id).append(' \
//     <div id="mainArea" \
//         style="margin: 10px 10px 10px 10px;" \
//     > \
//     </div> \
//     ')
// }
