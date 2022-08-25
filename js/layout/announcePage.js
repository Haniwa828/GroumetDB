function announce(){
    let announceId = location.search
    announceId = getParam('announceId');

    let announce = recall('announce');

    for(let i = announce.length - 1; i >= 0; i--){
        announce[i].タイムスタンプ = new Date(announce[i].タイムスタンプ);
        announce[i].タイムスタンプ = announce[i].タイムスタンプ.toISOString().substr(0, 10);
    }

    console.log(announce);
    
    switch(announceId != -1){
        case true: // 何かしら特定のお知らせが選ばれた場合
            announce[announceId].本文　= announce[announceId].本文.replace(/\r?\n/g, '<br>');
            $('#announceDisplay').append(' \
            <div> \
                '+ announce[announceId].タイムスタンプ +' \
            </div> \
            <div \
                style="font-size: large;" \
            > \
                《'+ announce[announceId].カテゴリー +'》'+ announce[announceId].タイトル +' \
            </div> \
            <br> \
            <div  \
                style="font-size: large;" \
            > \
                '+ announce[announceId].本文 +' \
            </div> \
            <br> \
            ')
            break;
        case false: // 全てのお知らせが選択された場合
            for(let i = announce.length - 1; i >= 0; i--){
                // announce[i].タイムスタンプ = new Date(announce[i].タイムスタンプ);
                // announce[i].タイムスタンプ = announce[i].タイムスタンプ.toISOString().substr(0, 10);
                $('#announceDisplay').append(' \
                <div \
                    style=" \
                        border: 1px solid; \
                        border-color: #dcdcdc; \
                    " \
                > \
                    <a \
                        href="announce.html?announceId='+ i +'" \
                        style="display: flex;" \
                    > \
                        <span \
                            style="word-break: break-all;" \
                        > \
                            《'+ announce[i].カテゴリー +'》'+ announce[i].タイトル +' \
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
                            '+ announce[i].タイムスタンプ +' \
                        </span> \
                    </a> \
                </div> \
                ')
            }
            break;
        default:
            console.log('来たぞ');
            break;
    }
    
    announceArea(announce);
}
