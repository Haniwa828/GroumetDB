function refresh(){
    let applyURL = "https://script.google.com/macros/s/AKfycbzT52NKYHxqT6vdAQphXTgXFSRdRCeC7dpdhQ84spaxTgpZE0t3kpnHQdexTxg9Me178g/exec?group=";
    let group = recall('groupName');
    let pass = recall('password');

    // URLの作成
    applyURL = applyURL + group + "&pass=" + pass;

    $('.announceContent').remove();
    $('.searchContent').remove();
    $('#shop').remove();

    fetch(applyURL) // グループ名とパスワードが一致するか確認
    .then(response => response.json())
    .then(data => { // 結果取得
        // データ格納
        save(data[0], "sucsess");
        save(data[1], "announce");

        mainArea();
    });
}