function shopsDetail(){ //　メインページでの要素配置
    let shopName = location.search
    shopName = getParam('shopName');
    
    // 半角スペース、全角スペース、&の復元
    shopName = shopName.replace('%20', ' ');
    shopName = shopName.replace('%3%80%80', '　');
    shopName = shopName.replace('aannddkkaarrii', '&');

    console.log(shopName)
    shopDetailComponent(shopName)
}


function getParam(name, url) { // URLからパラメータ取得
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
  

function shopDetailComponent(shopName){ // レイアウト追加 // array, id
    let shopData = recall("shopData");

    switch(shopData === null){
        case true: // データが保存されていなかった場合
            go2Login()
            break;
        
        case false: // データがあった場合
            let [data, num] = nameCheck(shopName, shopData);
            if(data == -1){
                go2Login()
                break;
            }

            shopBlock(data);
            detailComponent(num, 0);
            $('.indiviPage').remove();
            document.getElementById('shop0').onclick = '';
            document.getElementById('container0').onclick = '';
            console.log(document.getElementById('shop0').onclick);
            break;
        
        default:
            console.log('来たよ');
            break;
    }
}

function go2Login(){
    $('#shop').append(' \
    <div \
        class="shops" \
    > \
        店についてのデータがありません。 \
        一度ログインするか一覧から選び直してください。 \
    </div> \
    <a \
        href="/html/login.html" \
        style="font-size: small;" \
    > \
        ログイン画面へ移動する \
    </a> \
    <br> \
    <a \
        href="/index.html" \
        style="font-size: small;" \
    > \
        店舗一覧へ移動する \
    </a> \
    ')
}

function nameCheck(shopName, data){
    for(let i = 0; i < data.length; i++){ // 名前が一致する店の存在確認
        if(data[i].店名 === shopName){
            return [[data[i]], i];
        } 
    }

    return -1;
}

// else{ // ある時ー!
//     let review = 0;

//     if(id != -1){
//         review = array[id].レビュー;
//     }
    
//     review = review - review%0.5;


//     $('#shop').append(' \
//     <div id="shop' + id + '" class="shops" style="display: block; background-color: #fffafa; text-align: left; border: 1px solid; border-color: #dcdcdc; border-radius: 5px; width: '+ width +'; margin: 10px 10px 10px 10px; padding: 10px; position: relative;"> \
//             <div id="genre'+ id +'" style="font-size: small; color: gray;"></div> \
//             <div style="font-size: small; color: gray;"> \
//                 '+ array[id].形式+' \
//             </div> \
//             <div style="font-size: x-large; font-weight: bold; word-break: break-all; color: black"> \
//                 '+ array[id].店名 +' \
//             </div> \
//             <div style="color: dimgray;"> \
//                 <span class="star5_rating" data-rate="'+ review +'"></span> \
//                 '+ array[id].レビュー +' \
//             </div> \
//             <div style="font-size: small; color: gray; text-align: right; word-wrap: break-word; display: flex; margin: 0% 0% 0% 0%;"> \
//                 最終更新日：'+ array[id].タイムスタンプ +' \
//             </div> \
//         <div id="container'+ id +'" style="block"> \
//             <div style="margin: 10px 0px 10px 0px;"> \
//                 <img id="mainImage'+ id +'" style="width: '+ width/1.5 +'px; height: '+ width/2 +'px; object-fit: contain;" src="'+ (array[id].写真)[0] +'"> \
//             </div> \
//             <div id="images'+ id +'" style="height: '+ width/3.5 +'px;display: flex; overflow-x: auto; margin: 10px 0px 10px 0px;"> \
//             </div> \
//             <div id="address" style="word-break: break-all;"> \
//                 営業日：'+ array[id].定休日 +' \
//             </div> \
//             <div id="address" style="word-break: break-all;"> \
//                 金額目安(昼)：'+ array[id].昼営業の金額目安 +' \
//             </div> \
//             <div id="address" style="word-break: break-all;"> \
//                 金額目安(夜)：'+ array[id].夜営業の金額目安 +' \
//             </div> \
//             <br> \
//             <div id="address" style="word-break: break-all;"> \
//                 住所：'+ array[id].住所 +' \
//             </div> \
//             <div style="word-break: break-all;"> \
//                 ホームページ： \
//                 <a id="page" href="'+ array[id].ホームページリンク +'" target="_blank"> \
//                     '+ array[id].ホームページリンク +' \
//                 </a> \
//             </div> \
//             <div style="word-break: break-all;"> \
//                 SNS： \
//                 <a id="page" href="'+ array[id].SNSリンク +'" target="_blank"> \
//                     '+ array[id].SNSリンク +' \
//                 </a> \
//             </div> \
//             <div style="word-break: break-all;"> \
//                 電話番号：'+ array[id].電話番号 +' \
//             </div> \
//             <br> \
//             <div style="font-size: small; color: gray;"> \
//                 酒：'+ array[id].酒の提供+' \
//             </div> \
//             <div id="explain" style="font-size: large;" style="word-break: break-all;"> \
//                 説明： \
//                 <br> \
//                 '+ array[id].説明.replace(/\r?\n/g, '<br>') +' \
//             </div> \
//             <br> \
//             <div style="margin: 0px 0px 10px 0px;"> \
//                 レビュー： \
//             </div> \
//             <div id="review'+ id +'" style="display: flex; overflow-x: auto"> \
//             </div> \
//         </div> \
//         </div> \
//     </div> \
//     ');

//     for(let i = 0; i < (array[id].写真).length; i++){
//         $('#images' + id).append(' \
//         <img id="photo'+ id +'" style="width: '+ width/3 +'px; height: '+ width/4 +'px; object-fit: contain;" src="'+ (array[id].写真)[i] +'" onclick="changePhoto(id, src)"> \
//         ')
//     }

//     for(let j = 0; j < tempoArray[id].ジャンル.length; j++){
//         if(tempoArray[id].ジャンル[j].indexOf('/photo/') != -1){
//             $('#genre' + id).append(' \
//                 <img style="width: '+ width/12 +'px; height: '+ width/12 +'px; object-fit: cover;" src="'+ tempoArray[id].ジャンル[j] +'"></img> \
//             ');
//         }
//         else{
//             $('#genre' + id).append(' \
//                 <span>'+ tempoArray[id].ジャンル[j] +'</span> \
//             ');
//         }
//     }

//     for(let i = 0; i < reviewArray.length; i++){
//         if(shopArray[id].店名 === reviewArray[i].店名){
//             reviewArray[i].タイムスタンプ = new Date(reviewArray[i].タイムスタンプ);
//             reviewArray[i].タイムスタンプ = reviewArray[i].タイムスタンプ.toISOString().substr(0, 10);
//         }
//         else{
//             reviewArray.splice(i, 1);
//             i--;
//         }
//     }

//     for(let i = reviewArray.length - 1; i >= 0; i--){
//         let review = reviewArray[i].評価 - reviewArray[i].評価%0.5;

//         $('#review' + id).append(' \
//         <div class="reviews" style="background-color: #f8f8ff; text-align: left; border: 1px solid; border-color: #dcdcdc; border-radius: 5px; width: 200px; min-width: 200px; margin: 5px 10px 5px 0px; padding: 15px; position: relative;"> \
//             <span style="font-size: x-large; font-weight: bold; word-wrap: break-word;"> \
//                 '+ reviewArray[i].タイトル +' \
//             </span> \
//             <br> \
//             <div> \
//                 <span class="star5_rating" data-rate="'+ review +'"> \
//                 </span> \
//                 '+ reviewArray[i].評価 +' \
//             </div> \
//             <div> \
//                 '+ reviewArray[i].レビュー +' \
//             </div> \
//             <br> \
//             <div id="reviewImage'+ i +'of'+ id +'" style="height: auto; display: flex; overflow-x: auto"> \
//             </div> \
//             <div style="font-size: small; color: darkgray; text-align: right; word-wrap: break-word;"> \
//                 最終更新日：'+ reviewArray[i].タイムスタンプ +' \
//             </div> \
//         </div>');

//         if((reviewArray[i].写真)[0] != ''){
//             for(let j = 0; j < reviewArray[i].写真.length; j++){
//                 $('#reviewImage'+ i + 'of' + id).append(' \
//                 <img style="width: '+ width/3 +'px; height: '+ width/4 +'px; object-fit: contain; margin: 0px 10px 5px 0px;" src="'+ (reviewArray[i].写真)[j] +'"> \
//                 ')
//             }
//         }
//     }
// }