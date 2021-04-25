let db;
const DB_NAME = "jibunDB";
const DB_STORE = "jibunSTORE";

// DBの初期処理を行う関数
function initDB() {

  // DB オープン
  let openRequest = indexedDB.open(DB_NAME);

  // DB が存在しない(DB 新規作成/更新)
  openRequest.onupgradeneeded = function (event) {
    db = event.target.result;
    // 作成：オブジェクトストアー
    let store = db.createObjectStore(DB_STORE, {keyPath: "yyyymmddhhmm"});
    // 作成：インデックス

  }
}