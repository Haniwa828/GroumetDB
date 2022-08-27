function shopPress(id){ // 店ブロックが押されたとき
    let idNum = Number(id.replace('shop', '')); // idの番号だけ取得

    switch(true){
        case document.getElementById('container' + idNum).textContent == []: // 詳細欄が未設置
            detailComponent(idNum, idNum);
            break;
        case document.getElementById('container' + idNum).textContent != []: // 設置済み
            detailOpen(idNum);
            break;
        default:
            console.log("来たよ");
            break;
    }
}


function detailComponent(idNum, forIndivi){
    let shopData = recall("shopData");
    let reviewData = recall("reviewData");

    let review = shopData[idNum].評価;
    let width = document.body.clientWidth - 17

    review = review - review%0.5; // 0.5刻みに変更

    shopData[idNum].店名 = shopData[idNum].店名.replace(/&/g, 'aannddkkaarrii');
    shopData[idNum].店名 = shopData[idNum].店名.replace(/</g, 'ssyyoouunnaarrii');
    shopData[idNum].店名 = shopData[idNum].店名.replace(/>/g, 'ddaaiinnaarrii');
    shopData[idNum].店名 = shopData[idNum].店名.replace(/"/g, 'ddaabbuurruuqquuoott');
    shopData[idNum].店名 = shopData[idNum].店名.replace(/'/g, 'ssiinngglleeqquuoott');

    let shopid = shopData[idNum].店名;

    // 詳細欄追加
    $('#container' + forIndivi).append(' \
        <div \
            style="margin: 10px 0px 10px 0px;" \
        > \
            <img id="mainImage'+ idNum +'" \
                style=" \
                    width: '+ width/1.5 +'px; \
                    height: '+ width/2 +'px; \
                    object-fit: contain; \
                " \
                src="'+ (shopData[idNum].写真)[0] +'" \
            > \
        </div> \
        <div id="images'+ idNum +'" \
            style=" \
            display: flex; \
            overflow-x: auto; \
            margin: 10px 0px 10px 0px;" \
        > \
        </div> \
        <div \
            style="word-break: break-all;" \
        > \
            営業日：'+ shopData[idNum].定休日 +' \
        </div> \
        <div \
            style="word-break: break-all;" \
        > \
            金額目安(昼)：'+ shopData[idNum].昼営業の金額目安 +' \
        </div> \
        <div \
            style="word-break: break-all;" \
        > \
            金額目安(夜)：'+ shopData[idNum].夜営業の金額目安 +' \
        </div> \
        <br> \
        <div \
            style="word-break: break-all;" \
        > \
            住所：'+ shopData[idNum].住所 +' \
        </div> \
        <div \
            style="word-break: break-all;" \
        > \
            ホームページ： \
            <a \
                href="'+ shopData[idNum].ホームページリンク +'" \
                target="_blank" \
            > \
                '+ shopData[idNum].ホームページリンク +' \
            </a> \
        </div> \
        <div \
            style="word-break: break-all;" \
        > \
            SNS： \
            <a \
                href="'+ shopData[idNum].SNSリンク +'" \
                target="_blank" \
            > \
                '+ shopData[idNum].SNSリンク +' \
            </a> \
        </div> \
        <div \
            style="word-break: break-all;" \
        > \
            電話番号：'+ shopData[idNum].電話番号 +' \
        </div> \
        <br> \
        <div \
            style=" \
                font-size: small; \
                color: gray; \
            " \
        > \
            酒：'+ shopData[idNum].酒の提供+' \
        </div> \
        <div \
            style=" \
                font-size: large; \
                word-break: break-all; \
            " \
        > \
            説明： \
            <br> \
            '+ shopData[idNum].説明.replace(/\r?\n/g, '<br>') +' \
        </div> \
        <br> \
        <a \
            class=" \
                button \
                indiviPage \
            " \
            href="https://haniwa828.github.io/GroumetDB/html/detail.html?shopName='+ shopid +'" \
            target="_blank" \
        > \
            別ページで開く \
        </a> \
        <br><br> \
        <div \
            style="margin: 0px 0px 10px 0px;" \
        > \
            レビュー： \
        </div> \
        <div id="review'+ idNum +'" \
            style=" \
                display: flex; \
                overflow-x: auto" \
            > \
        </div> \
    </div> ');

    // 一枚目以外の画像追加
    for(let i = 0; i < (shopData[idNum].写真).length; i++){
        $('#images' + idNum).append(' \
        <img id="photo'+ idNum +'" \
            style=" \
                width: '+ width/3 +'px; \
                height: '+ width/4 +'px; \
                object-fit: contain;" \
                src="'+ (shopData[idNum].写真)[i] +'" \
                onclick="changePhoto(id, src) \
            " \
        > \
        ')
    }

    // レビュー追加
    for(let i = reviewData.length - 1; i >= 0; i--){
        if(shopData[idNum].店名 === reviewData[i].店名){
            reviewInsert(i, idNum, width, reviewData);
        }        
    }
}

function reviewInsert(num, idNum, width, reviewData){
    let review = reviewData[num].評価 - reviewData[num].評価%0.5; // 0.5刻みに

    // レビュー追加
    $('#review' + idNum).append(' \
    <div \
        class="reviews" \
        style=" \
            background-color: #f8f8ff; \
            text-align: left; \
            border: 1px solid; \
            border-color: #dcdcdc; \
            border-radius: 5px; \
            width: 200px; \
            min-width: 200px; \
            margin: 5px 10px 5px 0px; \
            padding: 15px; \
            position: relative; \
        " \
    > \
        <span \
            style=" \
                font-size: x-large; \
                font-weight: bold; \
                word-wrap: break-word; \
            " \
        > \
            '+ reviewData[num].タイトル +' \
        </span> \
        <br> \
        <div> \
            <span \
                class="star5_rating" \
                data-rate="'+ review +'" \
            > \
            </span> \
            '+ reviewData[num].評価 +' \
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
            投稿者：'+ reviewData[num].投稿者 +' \
        </div> \
        <div> \
            '+ reviewData[num].レビュー +' \
        </div> \
        <br> \
        <div id="reviewImage'+ num +'of'+ idNum +'" \
            style=" \
                display: flex; \
                overflow-x: auto \
            " \
        > \
        </div> \
        <div \
            style=" \
                font-size: x-small; \
                color: darkgray; \
                text-align: right; \
                word-wrap: break-word; \
            " \
        > \
            最終更新日：'+ reviewData[num].タイムスタンプ +' \
        </div> \
    </div>');

    // レビューの画像追加
    if((reviewData[num].写真)[0] != ''){
        for(let i = 0; i < reviewData[num].写真.length; i++){
            $('#reviewImage'+ num + 'of' + idNum).append(' \
            <img \
                style=" \
                    width: '+ width/3 +'px; \
                    height: '+ width/4 +'px; \
                    object-fit: contain; \
                    margin: 0px 10px 5px 0px; \
                " \
                src="'+ (reviewData[num].写真)[i] +'" \
            > \
            ')
        }
    }
}