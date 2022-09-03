function shop(id, data){
    data = photoLink(data);
    data = datePick(data);
    let [shopData, reviewData] = dataDivide(data);
    data = operateDay(shopData);
    let averageReviewData = [];
    [averageReviewData, shopData] = getAverageReview(shopData, reviewData);
    shopData = sortOrder(shopData, '最終更新日');
    shopInsert(shopData);

    // 各変数の保存
    save(shopData, "shopData");
    save(reviewData, "reviewData");
    save(averageReviewData, "averageReviewData");
}


function photoLink(data){ // 店舗情報とレビューの画像リンクの書き換え
    for(let i = 0; i < data.length; i++){ 
        data[i].写真 = (String(data[i].写真)).split(/[,]/); // 複数ある場合分割

        if(data[i].写真 != null){ // 画像がある場合のみ
            if((data[i].写真)[0] == ""){
                (data[i].写真)[0] = 'https://haniwa828.github.io/GroumetDB/images/noImage.png';
            }
            else{
                for(let j = 0; j < (data[i].写真).length; j++){ // それぞれの画像の直リンク作成
                    (data[i].写真)[j] = (data[i].写真)[j].substring((data[i].写真)[j].indexOf("id=") + 3) // IDの抜き出し
                    if((data[i].写真)[j] != ""){ // 画像への直リンクに書き換え
                        (data[i].写真)[j] = 'https://drive.google.com/uc?export=view&id=' + (data[i].写真)[j] 
                    }
                }
            }
            
        }
    }

    return data;
} // https://haniwa828.github.io/GroumetDB/images/japan.png

function datePick(data){ // 年月日のみ抜き出し
    for(let i = 0; i < data.length - 1; i++){ // レビュー数認識用の数字を除くための-1
        data[i].タイムスタンプ = (data[i].タイムスタンプ).slice(0, 10); 
    }
   
    return data;
}

function dataDivide(data){ // 店舗情報とレビューをそれぞれの変数に入れる
    const revieweNumber = Number(data[data.length - 1]); // レビューの数取得

    // 分割
    let shopData = data.slice(0, data.length - revieweNumber - 1); // レビュー数認識用の数字を除くための-1
    let reviewData = data.slice(data.length - revieweNumber - 1, data.length - 1);

    return [shopData, reviewData];
}

function operateDay(data){ // 定休日と営業日の入れ替え
    for(let i = 0; i < data.length; i++){
        const array1 = ['月曜', '火曜', '水曜', '木曜', '金曜', '土曜', '日曜', '無し'];
        const array2 = data[i].定休日;

        data[i].定休日 = array1.filter(i => array2.indexOf(i) == -1);

        if(data[i].定休日[data[i].定休日.length - 1] == '無し'){
            data[i].定休日.pop();
        }
    }
    
    return data;
}

function getAverageReview(shopData, reviewData){ // 店ごとの平均評価
    let sumReview = [];
    for(let i = 0; i < shopData.length; i++){ // すべての店舗について取得
        sumReview.push({店名: String(shopData[i].店名), 評価:shopData[i].評価}) // 店舗情報投稿者の評価
        let k = 1; //　追加された店の数のカウント

        for(let j = 0; j < reviewData.length; j++){ // レビュー一覧から同一店舗のレビューを取得
            if(String(sumReview[i].店名).toUpperCase() === String(reviewData[j].店名).toUpperCase()){ // 店名が完全一致したら追加
                sumReview[i].評価 = Number(sumReview[i].評価) + Number(reviewData[j].評価); // 評価値の修正

                k++;
            }
        }

        sumReview[i].評価 = Math.round(sumReview[i].評価/k*10)/10; // 少数第二位で四捨五入
        shopData[i].評価 = sumReview[i].評価; // 後で使うのでshopDataの評価をこれにしておく
    }

    return [sumReview, shopData];
}


