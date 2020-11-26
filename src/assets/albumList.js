const albumList = [{
    "id": "album1",
    "album": "模特",
    "singer": "李荣浩",
    "price": 100,
    "number": 9
}, {
    "id": "album2",
    "album": "生命因你而火热",
    "singer": "新裤子",
    "price": 200,
    "number": 6
}, {
    "id": "album3",
    "album": "故事会",
    "singer": "五条人",
    "price": 300,
    "number": 3
}];
//总得导出，其它地方才能引用
// localStorage.setItem('data',JSON.stringify(albumList) || '[]')
export default albumList