$(function () {
    let shopData = recall("shopData");

    $('.js-open').click(function () {
        $("body").addClass("no_scroll"); // 背景固定させるクラス付与
        id4form = $(this).data('id'); // 何番目のキャプション（モーダルウィンドウ）か認識
        $('#overlay, .modal-window[data-id="modal' + id4form + '"]').fadeIn();

        // let idComponent = 'forReviewLink' + id;

        for(let i = shopData.length - 1; i >= 0; i--){
            $('#forReviewLink' + id4form).append(' \
            <div id="shopName'+ i +'">'+ shopData[i].店名 +'</div> \
            ')
        }
        
        $('#forReviewLink' + id4form).append(' \
            <div id="noMatch" style="display: none">一致する結果はありませんでした</div> \
        ')

        return false // aタグのherfを起動させない
    });
    // オーバーレイクリックでもモーダルを閉じるように
    $('.js-close , #overlay').click(function () {
        $("body").removeClass("no_scroll"); // 背景固定させるクラス削除
        $('#overlay, .modal-window').fadeOut();
        $('#forReviewLink' + id4form).empty()
    });
});
