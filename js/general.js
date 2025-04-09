let mainTab = document.querySelector('.main-tab')



let masiv = [
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
    {
        id: 1,
        name: 'Ihor Hrytsyn',
        statu: true,
        statusAnd: 'XRM',
        fromTime: '05:02',
        tillTime: '',
        location: 'Matteson',
        bottomTabText: 'dawdawd',
    },
]


let idTabs = 0

function start() {
    idTabs = 0
    mainTab.innerHTML = ''
    masiv.forEach(input => {
        idTabs += 1
        input.id = idTabs
        mainTab = document.querySelector('.main-tab')
        var tab = document.createElement('div')
        var tabGeneral = document.createElement('div')
        var id = document.createElement('div')
        id.innerHTML = `<p>${idTabs}</p>`
        var name = document.createElement('div')
        name.innerHTML = `<p>${input.name}</p>`
        var status = document.createElement('div')
        status.innerHTML = `<p>${input.statu}</p>`
        var statusAnd = document.createElement('select')
        statusAnd.addEventListener('change', function (e) {
            input.statusAnd = e.target.value
            console.log()
            start()
        })
        var options1 = document.createElement('option')
        var options2 = document.createElement('option')
        var options3 = document.createElement('option')
        var options4 = document.createElement('option')
        var options5 = document.createElement('option')
        var options6 = document.createElement('option')
        var options7 = document.createElement('option')


        options1.innerHTML = 'No'
        if (input.statusAnd == 'No') {
            options1.setAttribute('selected', '')
        }
        options2.innerHTML = 'Load Has'
        if (input.statusAnd == 'Load Has') {
            statusAnd.classList.add('load-Has')
            status.classList.add('load-Has')
            options2.setAttribute('selected', '')
            input.statu = true
        }
        options3.innerHTML = 'Sleeping'
        if (input.statusAnd == 'Sleeping') {
            statusAnd.classList.add('Sleeping')
            options3.setAttribute('selected', '')
            input.statu = false
        }
        options4.innerHTML = 'Completing'
        if (input.statusAnd == 'Completing') {
            statusAnd.classList.add('Completing')
            status.classList.add('load-Has')
            options4.setAttribute('selected', '')
            input.statu = true
        }
        options5.innerHTML = 'XRM'
        if (input.statusAnd == 'XRM') {
            statusAnd.classList.add('XRM')
            status.classList.add('off')
            input.statu = false
            options5.setAttribute('selected', '')
        }
        options6.innerHTML = 'No info'
        if (input.statusAnd == 'No info') {
            statusAnd.classList.add('No-info')
           
            options6.setAttribute('selected', '')
            input.statu = false
        }
        options7.innerHTML = 'Deadhead'
        if (input.statusAnd == 'Deadhead') {
            statusAnd.classList.add('load-Has')
            
            options7.setAttribute('selected', '')
            input.statu = true
        }

        var fromTime = document.createElement('div')
        var fromInput = document.createElement('input')
        fromInput.setAttribute('type', 'time')
        fromInput.setAttribute('value', input.fromTime)
        fromInput.addEventListener('change', function (d) {
            console.log(d.target.value)
            input.fromTime = d.target.value
            start()
            
        })
        var tillTime = document.createElement('div')
        var tillInput = document.createElement('input')
        tillInput.setAttribute('type', 'time')
        tillInput.setAttribute('value', input.tillTime)
        tillInput.addEventListener('change', function (q) {
            console.log(q.target.value)
            input.tillTime = q.target.value
            start()
            
        })
        var location = document.createElement('div')
        var localInput = document.createElement('input')
        localInput.setAttribute('type', 'text')
        localInput.value = input.location
        localInput.addEventListener('change', function (a) {
            console.log(a.target.value)
            input.location = a.target.value
            start()
            
        })
        var bottomTab = document.createElement('div')
        var bottomTabText = document.createElement('textarea')
        bottomTabText.addEventListener('change', function (s) {
            console.log(s.target.value)
            input.bottomTabText = s.target.value
            start()
           
        })
        
        bottomTabText.value = input.bottomTabText



        if (input.statu) {
            status.innerHTML = `<p>Ready</p>`
            status.classList.add('statusR', 'tab-section')
        } else {
            status.innerHTML = `<p>Off</p>`
            status.classList.add('statusO', 'tab-section')

        }
        tab.classList.add('tab')
        tabGeneral.classList.add('tab-general')
        id.classList.add('id', 'tab-section')
        name.classList.add('name')
        statusAnd.classList.add('status-and')
        fromTime.classList.add('from-time', 'tab-section')
        tillTime.classList.add('till-time', 'tab-section')
        location.classList.add('location', 'tab-section')
        bottomTab.classList.add('bottom-tab')

        mainTab.appendChild(tab)
        tab.append(tabGeneral, bottomTab)
        bottomTab.append(bottomTabText)
        tabGeneral.append(id, name, status, statusAnd, fromTime, tillTime, location)
        fromTime.append(fromInput)
        tillTime.append(tillInput)
        location.append(localInput)
        statusAnd.append(options1, options2, options3, options4, options5, options6, options7,)

        tabGeneral.onclick = (() => {
            if (click) {
                tab.style.height = '27.5px'
                click = false
            } else {
                tab.style.height = '100px'
                click = true
            }
        })
        status.addEventListener('dblclick', function () {
           
            
                if (input.statu) {
                    input.statu = false
                    input.statusAnd = 'No'
                    start()
                    
                } else {
                    input.statu = true
                    input.statusAnd = 'No'
                    start()
                    
                }
            
        })
    });
}

start()

console.log(document.querySelector('input').value);

let tab = document.querySelector('.tab')
let tabGeneral = document.querySelector('.tab-general')
let click = false

let creatDiv = document.querySelector('.creat-div')
let creatss = document.querySelector('.creat')
let nameCreat = document.querySelector('.name-creat')
let idDelet = document.querySelector('.id-delet')
let InameCreat = document.querySelector('#name-creat')
let IidDelet = document.querySelector('#id-delet')
let creatOffReady = false

creatss.onclick = (() => {
    if (creatOffReady) {
        creatDiv.style.left = '-500px'
        creatOffReady = false
        creatss.innerHTML = '>'
    } else {
        creatDiv.style.left = '0'
        creatOffReady = true
        creatss.innerHTML = '<'
    }
})

nameCreat.onclick = (() => {
    if (InameCreat.value.trim() == '') {
        alert('error')
    } else {
        masiv.push(
            {
                id: 1,
                name: InameCreat.value,
                statu: false,
                statusAnd: 'No',
                fromTime: '',
                tillTime: '',
                location: '',
                bottomTabText: '',
            },)

        start()
        
        
        location.reload()
    }
})


idDelet.onclick = (() => {
    masiv.forEach((inp, ids) => {
        if (String(inp.id) === IidDelet.value.trim()) {
            masiv.splice(ids, 1);
            start()
            console.log(masiv);
            location.reload()
        }
    });
})

