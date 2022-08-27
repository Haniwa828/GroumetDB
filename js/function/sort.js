function sortOrder(data, rule){ // ソート方法分岐
  switch(true){
      case rule == '最終更新日':
          data = sortDate(data);
          break;
      case rule == '店名(a-z)':
          data = sortA2Z(data);
          break;
      case rule == '店名(z-a)':
          data = sortZ2A(data);
          break;
      case rule == 'レビュー':
          data = sortReview(data);
          break;
      default:
          console.log('来たよ');
          break;
  }

  // console.log(rule == '店名(a-z)')
  return data
}


function sortDate(data){ // 
  data.sort(function(a, b) {
      var nameA = a.タイムスタンプ.toString().toUpperCase(); // 大文字と小文字を無視する
      var nameB = b.タイムスタンプ.toString().toUpperCase(); // 大文字と小文字を無視する
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
  });

  return data;
}

function sortA2Z(data){ // 
  data.sort(function(a, b) {
      var nameA = a.店名.toString().toUpperCase(); // 大文字と小文字を無視する
      var nameB = b.店名.toString().toUpperCase(); // 大文字と小文字を無視する
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }

      // names must be equal
      return 0;
  });

  return data;
}

function sortZ2A(data){ // 
  data.sort(function(a, b) {
      var nameA = a.店名.toString().toUpperCase(); // 大文字と小文字を無視する
      var nameB = b.店名.toString().toUpperCase(); // 大文字と小文字を無視する
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
  });

  return data;
}

function sortReview(data){ // 
  data.sort(function(a, b) {
      var nameA = a.評価.toString().toUpperCase(); // 大文字と小文字を無視する
      var nameB = b.評価.toString().toUpperCase(); // 大文字と小文字を無視する
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
  });

  return data;
}
