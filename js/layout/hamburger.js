function hamburger(id){ // ハンバーガーメニュー追加
    addHamburger(id);
}

function addHamburger(id){ // 
    $('#' + id).append(' \ \
    <input id="menu-btn-check"\
        type="checkbox" \
    > \
    <label \
        class="menu-btn" \
        for="menu-btn-check" \
    > \
        <span></span> \
    </label> \
    <div \
        class="menu-content" \
    > \
        <ul> \
            <li> \
                <a \
                    href="https://haniwa828.github.io/JapanGourmetDB/html/announce.html?announceId=-1" \
                    style="font-size: large;" \
                > \
                    お知らせ \
                </a> \
            </li> \
            <li> \
                <div data-id="2"\
                    class=" \
                        js-open \
                        button-open \
                    " \
                    style="font-size: large;" \
                > \
                    新規店舗投稿 \
                </div> \
            </li> \
            <li> \
                <div data-id="1"\
                    class=" \
                        js-open \
                        button-open \
                    " \
                    style="font-size: large;" \
                > \
                    レビュー投稿 \
                </div> \
            </li> \
            <li> \
                <a \
                    href="https://forms.gle/tx1ZhYPLLyBAw6ybA" \
                    target="_blank" \
                    style="font-size: large;" \
                > \
                    意見/修正依頼 \
                </a> \
            </li> \
            <li> \
                <a \
                    href="https://haniwa828.github.io/JapanGourmetDB/html/help.html" \
                    style="font-size: large;" \
                > \
                    ヘルプ \
                </a> \
            </li> \
            <li> \
                <a \
                    href="https://haniwa828.github.io/JapanGourmetDB/html/credit.html" \
                    style="font-size: large;" \
                > \
                    クレジット \
                </a> \
            </li> \
        </ul> \
    </div> \
    ')
}