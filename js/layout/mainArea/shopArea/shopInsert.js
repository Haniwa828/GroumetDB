function shopInsert(data){ // 店ブロックの挿入
    $('.shops').remove(); // 店ブロック全削除
    genreImage(data);
    insert(data);
}


function genreImage(data){
    for(let i = 0; i < data.length; i++){ // ジャンルを画像に差し替え
        if(typeof(data[i].ジャンル) != 'object'){
            data[i].ジャンル = data[i].ジャンル.replace('和食', '/images/japan.png')
            data[i].ジャンル = data[i].ジャンル.replace('中華', '/images/china.png')
            data[i].ジャンル = data[i].ジャンル.replace('イタリアン', '/images/italy.png')
            data[i].ジャンル = data[i].ジャンル.replace('喫茶', '/images/cafe.png')
            data[i].ジャンル = data[i].ジャンル.replace('デザート', '/images/cake.png')
            data[i].ジャンル = data[i].ジャンル.replace('ラーメン', '/images/ramen.png')

            data[i].ジャンル = data[i].ジャンル.split(",");
        }
        
    }
}

function insert(data){ // 挿入するものを判断
    switch(true){
        case data.length > 0:
            shopBlock(data);
            break;
        case data.length == 0: // 店がないときとデフォルト
        default:
            $('#shop').append('<div class="shops">まだ有効な店が登録されていません</div>');
            break;
    }
}

function shopBlock(data){ // 店ブロック挿入
    const width = document.body.clientWidth - 17 // 後で使う画面サイズ取得
    // const height = document.documentElement.clientHeight

    for(let i = data.length - 1; i >= 0; i--){ // 全ての店ブロック挿入
        let review = 0;

        review = data[i].評価; // cssで表示するために0.5刻みに変更
        review = review - review%0.5;

        $('#shop').append(' \
        <div id="shop' + i + '" \
            class="shops" \
            onclick="shopPress(id)" \
        > \
            <div \
                style=" \
                    display: flex; \
                    flex-wrap: wrap; \
                " \
            > \
                <div> \
                    <div id="genre'+ i +'" \
                        style=" \
                            font-size: small; \
                            color: gray; \
                        " \
                    ></div> \
                    <img \
                        style=" \
                            width: '+ width/3 +'px; \
                            height: '+ width/4 +'px; \
                            object-fit: cover; \
                        " \
                        src="'+ (data[i].写真)[0] +'" \
                    > \
                </div> \
                <div> \
                    &ensp;&ensp; \
                </div> \
                <div \
                    style="width: '+ (2*width/3 - 70) +'px;" \
                > \
                    <div \
                        style=" \
                            font-size: small; \
                            color: gray; \
                        " \
                    > \
                        '+ data[i].形式+' \
                    </div> \
                    <div \
                        style=" \
                            font-size: x-large; \
                            font-weight: bold; \
                            word-break: break-all; \
                        " \
                    > \
                        '+ data[i].店名 +' \
                    </div> \
                    <div \
                        style="color: dimgray;" \
                    > \
                        <span \
                            class="star5_rating" \
                            data-rate="'+ review +'" \
                        ></span> \
                        '+ data[i].評価 +' \
                    </div> \
                    <div \
                        style=" \
                            font-size: small; \
                            color: gray; \
                            text-align: right; \
                            word-wrap: break-word; \
                            display: flex; \
                            margin: 0% 0% 0% 0%; \
                        " \
                    > \
                        投稿者：'+ data[i].投稿者 +' \
                    </div> \
                    <div \
                        style=" \
                            font-size: x-small; \
                            color: gray; \
                            text-align: right; \
                            word-wrap: break-word; \
                            display: flex; \
                            margin: 0% 0% 0% 0%; \
                        " \
                    > \
                        最終更新日：'+ data[i].タイムスタンプ +' \
                    </div> \
                </div> \
            </div> \
            <div id="container'+ i +'" \
                style="block" \
                onclick="detailOpen('+ i +')" \
            ></div> \
        </div> \
        ');

        for(let j = 0; j < data[i].ジャンル.length; j++){
            if(data[i].ジャンル[j].indexOf('/images/') != -1){ // ジャンル用画像があるとき
                $('#genre' + i).append(' \
                    <img \
                        style=" \
                            width: '+ width/12 +'px; \
                            height: '+ width/12 +'px; \
                            object-fit: cover;\
                        " \
                        src="'+ data[i].ジャンル[j] +'" \
                    ></img> \
                ');
            }
            else{ // 自由記述のとき
                $('#genre' + i).append(' \
                    <span>'+ data[i].ジャンル[j] +'</span> \
                ');
            }
        }
    }
}

