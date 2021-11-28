//给出如下数据格式的虚拟dom,将其转化为真是dom

const vnode = {
    tag:"DIV",
    attrs:{
        id:"app"
    },
    children:[{
        tag:"SPAN",
        children:[{
            tag:"A",
            children:[]
        }]
    },{
        tag:"SPAN",
        children:[{
            tag:"A",
            children:[]
        },{
            tag:"A",
            children:[]
        }]
    }]
}


function render(vnode){
    if (typeof vnode === "number") {
        vnode = String(vnode);
    }

    if (typeof vnode === "string") {
        return document.createTextNode(vnode);
    }

    const element = document.createElement(vnode.tag);
    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach(attrKey=>{
            element.setAttribute(attrKey,vnode.attrs[attrKey])
        })
    }

    if (vnode.children) {
        vnode.children.forEach(childNode=>{
            element.appendChild(render(childNode))
        })
    }

    return element;
}


console.log("render(vnode);",render(vnode));