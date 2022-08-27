function announceArea(data){
    for(let i = data.length - 1; i > data.length - 4; i--){
        if(data[i] == null){ // 3より少ないときにブレイク
            break;
        }

        data[i].タイムスタンプ = new Date(data[i].タイムスタンプ);
        data[i].タイムスタンプ = data[i].タイムスタンプ.toISOString().substr(0, 10);
        $('#announceArea').append(' \
        <div \
            class="announceContent" \
            style=" \
                border: 1px solid; \
                border-color: #dcdcdc; \
            " \
        > \
            <a \
                href="https://haniwa828.github.io/GroumetDB/html/announce.html?announceId='+ i +'" \
                style="display: flex;" \
            > \
                <span \
                    style="word-break: break-all;" \
                > \
                    《'+ data[i].カテゴリー +'》'+ data[i].タイトル +' \
                </span> \
                <span \
                    style="minwidth: 10px" \
                > \
                    &ensp; \
                </span> \
                <span \
                    style=" \
                        font-size: small; \
                        margin-left: auto; \
                        min-width: 70px \
                    " \
                > \
                    '+ data[i].タイムスタンプ +' \
                </span> \
            </a> \
        </div> \
        ')
    }

    $('#announceArea').append(' \
    <div \
        class="announceContent" \
        style=" \
            border: 1px solid; \
            border-color: #dcdcdc; \
            text-align: right; \
        " \
    > \
        <a \
            href="https://haniwa828.github.io/GroumetDB/html/announce.html?announceId=-1" \
        > \
            »全てのお知らせ \
        </a> \
    </div> \
    ')
}