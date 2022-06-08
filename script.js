function createEle()
{
    var _name = document.getElementById("input-title").value;
    var textnode = document.createTextNode(_name);
    var node = document.getElementById("article");
    node.appendChild(textnode);
}