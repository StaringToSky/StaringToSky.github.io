function createArticle()
{
    // 产生新的文章链接 （未完成）
    //var _input = document.getElementById("input-title").value
    //var _title = document.createElement("div")
    //_title.innerHTML = _input;
    //_title.className = "article-title"
    _title.setAttribute("href","style.css")
    
    //document.getElementById("article").appendChild(_title)
    var title = document.getElementById("input-title").value;
    
    var _title = document.createElement("a")
    _title.innerHTML = title;
    _title.href = "";
    document.getElementById("article").appendChild(_title)
    _title.setAttribute("style","style.css")
}
