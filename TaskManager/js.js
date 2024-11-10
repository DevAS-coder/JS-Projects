var main = document.getElementById('main')
var addtaskbtn = document.getElementById('addtaskbtn')
var popup = document.getElementById('popup')
var popBg = document.getElementById('popBg')
var cnclbtn = document.getElementById('cnclbtn')
var okbtn = document.getElementById('ok')
var taskadder = document.getElementById('add')
var taskinp = document.getElementById('taskinp')
var count = 0

addtaskbtn.addEventListener('click',function () {
    popup.style.display = 'block'
    popBg.style.display = 'block'
    main.style.filter = 'blur(5px)'
})

cnclbtn.addEventListener('click',function () {
    popup.style.display = 'none'
    popBg.style.display = 'none'
    main.style.filter = 'blur(0px)'
})

okbtn.addEventListener('click',function () {
    
    var NewDiv = document.createElement('div')
    
    NewDiv.className = 'task'
    NewDiv.setAttribute('draggable', 'true')
    NewDiv.setAttribute('id', 'task' + count) 
    NewDiv.setAttribute('ondragstart', 'dragHandle(event)')
    NewDiv.innerHTML = taskinp.value
    taskinp.value = ''

    taskadder.appendChild(NewDiv)
    popup.style.display = 'none'
    popBg.style.display = 'none'
    main.style.filter = 'blur(0px)'
    count = count + 1
})

function dragHandle(event) {
    event.dataTransfer.setData('elemid',event.target.id)
    console.log('drag');
    
}

function dragover(event){
    event.preventDefault()
}

function dropHandler(event){
    let targetid = event.dataTransfer.getData('elemid')
    let taget = document.getElementById(targetid)
    console.log(event.target.id)
    if (event.target.id == 'notdone') {
        taget.style.backgroundColor = 'red'
        taget.style.color = 'white'
    }
    if (event.target.id == 'inprog') {
        taget.style.backgroundColor = 'blue'
        taget.style.color = 'white'
    }
    if (event.target.id == 'done') {
        taget.style.backgroundColor = 'green'
        taget.style.color = 'white'
    }

    event.target.append(taget)
}