function loginSucsess(data){ // function loginSucsess(data, id)
    // データ格納
    save(data, "sucsess");

    // ページ遷移
    window.location.href = '/index.html';
}

function registerSucsess(){
    $('#apply').remove();
    $('#sucsess').append(' \
    <br> \
    <div> \
        登録成功しました。 \
        <br> \
        おすすめの店を投稿しましょう。 \
    </div> \
    <a href="">新規店舗投稿</a> \
    <a href="/html/login.html">ログインページ</a> \
    ');
}