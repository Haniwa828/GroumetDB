function detailOpen(idNum){ // 詳細欄の表示非表示切り替え
    if(document.getElementById('container' + idNum).style.display != 'none'){
        document.getElementById('container' + idNum).style.display = 'none'
    }
    else{
        document.getElementById('container' + idNum).style.display = 'block'
    }
}

function filterOpen(){ // 詳細検索の開閉
    let element = document.getElementById('filter');

    if(element.style.display == 'block'){
        element.style.display = 'none';
    }
    else{
        element.style.display = 'block';
    }
}

function shopDisplay(data, move){ // 店ブロックの表示非表示切り替え
    switch(move){
        case "display":
            for(let i = 0; i < data.length; i++){ // 全ての要素ブロックを表示
                let target = document.getElementById('shop' + i);
                target.style.display = 'block' // flex
            }
            break;
        case "none":
            for(let i = 0; i < data.length; i++){ // 一旦全ての要素ブロックを非表示
                let target = document.getElementById('shop' + i);
                target.style.display = 'none'
            }
            break;
        default:
            console.log("来たよ");
            break;
    }
}