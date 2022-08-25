function search(){ // 検索窓関連
    let shopData = recall("shopData");
    // let reviewData = recall("reviewData");
    // let averageReviewData = recall("averageReviewData");
    
    let words = wordGet();
    shopDisplay(shopData, "display");    
    let [alcohol, area, atmosphere, category, cost, operate, sort] = selectGet();
    shopData = sortOrder(shopData, sort);
    shopInsert(shopData);
    save(shopData, "shopData"); // 並べ替えたから新しく保存
    shopDisplay(shopData, "none");
    filterCheck(category, operate, cost, atmosphere, area, alcohol, shopData); // category, operate, cost, atmosphere, area, alcohol, shopData
    check(shopData, words);
}

