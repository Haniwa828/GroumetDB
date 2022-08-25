function save(data, situation){ // データ保存 // sessionStorage
    const savedData = JSON.stringify(data);
    switch(true){
        case situation == "sucsess": // ログイン成功時
            localStorage.setItem("sucsessData", savedData);
            break;
        case situation == "announce": // ログイン成功時(アナウンス)
            localStorage.setItem("announceData", savedData);
            break;
        case situation == "shopData": // 店舗データ
            localStorage.setItem("shopData", savedData);
            break;
        case situation == "reviewData": // 評価値データ
            localStorage.setItem("reviewData", savedData);
            break;
        case situation == "averageReviewData": // 平均評価値データ
            localStorage.setItem("averageReviewData", savedData);
            break;    
        case situation == "groupName": // ログイン時のグループ名
            localStorage.setItem("groupName", savedData);
            break;
        case situation == "password": // ログイン時のパスワード
            localStorage.setItem("password", savedData);
            break;    
        default:
            console.log("来たよ");
            break;
    }
    
    // console.log(savedData)
    console.log('保存成功')
}

function recall(situation){
    let data = JSON.stringify("");
    switch(true){
        case situation == "sucsess": // ログイン成功時とページ再読み込み時
            data = localStorage.getItem("sucsessData");
            break;
        case situation == "announce": // ログイン成功時(アナウンス)
            data = localStorage.getItem("announceData");
            break;
        case situation == "shopData": // 店舗データ
            data = localStorage.getItem("shopData");
            break;
        case situation == "reviewData": // 評価値データ
            data = localStorage.getItem("reviewData");
            break;
        case situation == "averageReviewData": // 平均評価値データ
            data = localStorage.getItem("averageReviewData");
            break;
        case situation == "groupName": // ログイン時のグループ名
            data = localStorage.getItem("groupName");
            break;
        case situation == "password": // ログイン時のパスワード
            data = localStorage.getItem("password");
            break;
        default:
            console.log("来たよ");
            break;
    }

    data = JSON.parse(data)
    
    // console.log(data);
    return data
}