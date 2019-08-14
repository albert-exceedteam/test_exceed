$(document).ready( () => {

    fetch('http://localhost:8000/todo/', {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        mode: 'no-cors',
    })
     .then(response => response.json())
     .then(items => {
        
    
    const todo = new ToDo(items)

    $('#add-button').on('click', (element) => todo.addItem(element))
    $('#input-text').keydown ((e) => {
        if (e.keyCode === 13) {
            todo.addItem(e)
        }   
    })
    $('.border').click ((w) => {
        $('.border').removeClass("selected")
        $(w.target).addClass("selected")
    
    })
        }    );


})

class ToDo {
    constructor(initialArray) {
        this.listItems = initialArray || []
        this.init()
    
    }

    init() {
        this.listItems.forEach(element => {
            $('.task-container').append(
                `
                    <div class="item ${element.color}" id="${element._id}" >
                        <div class="checkbox">
                            <input type="checkbox" ${element.checked ? "checked" : null} class="form-check-input">
                        </div>
                        <div class="task" 
                        ${element.checked ?` style="text-decoration: line-through"` : null}>
                            ${element.text}
                        </div>
                        <div >
                            <input type="submit" value="Delete" class="but-delete">
                        </div>
                    </div>
                `
            )
        });

        $('.task').on('click', (event) => {
            this.changeItem($(event.target))
        })
        $('.but-delete').on('click', (event) => {
            this.DeleteItem ($(event.target))
        })
        $('.form-check-input').click ((event) => {
           this.CheckedItem($(event.target))
        })
    
    }

    addItem () {
        let colorid = Math.random()
        let text = $('#input-text').val()
        $('#input-text').val('')
        
        let color = this.getActiveColor()
        $('.task-container').append(
            `
                <div class="item ${color}" id=${colorid}>
                    <div class="checkbox">
                        <input type="checkbox" class="form-check-input">
                    </div>
                    <div class="task">${text}</div>
                    <div >
                        <input type="submit" value="Delete" class="but-delete">
                    </div>
                </div>
            `
        )

        let item = {
            text: text,
            checked: false,
            color: color,
            id: colorid
        }
        // fetch('http://localhosta;oscob;ao/.../add-todo')

        // .then(res... распарсили(JSON.parse))
        // .then(
            /**
             * проверка status === 201
              *   show  'ok'
              * else
              * 
              *     показываем ошибку
              *     show  =>>>  (res.message)
              * 
             */
        // )

        this.listItems.push(item)
        localStorage.setItem('todo', JSON.stringify(this.listItems))

        $('.task').on('click', (event) => {
            this.changeItem($(event.target))
        })
        $('.but-delete').on('click', (event) => {
            this.DeleteItem ($(event.target))
        })
        $('.form-check-input').click ((event) => {
           this.CheckedItem($(event.target))
        })
    }

    getActiveColor() {
        let ActiveColor = $('.selected')
        let clas = ActiveColor.attr('class')
        let str_elem = clas.slice(7, 14)
        return str_elem
    }

    changeItem (target) {
        let str_elem = target.text()
        $('#input-text').val(str_elem)
        
        $('#change-button').off().on('click', () => addIt())
        $('#input-text').off().on('keydown', (e) => {
            if (e.keyCode === 13) {
                addIt()
            }
        })

        const addIt = () => {
            let str_n = $('#input-text').val()
            target.text(str_n)
            let col = this.getActiveColor()
           
            let item = target.parent()
            let itemClass = item.attr('class')
            
            let newClass = `${col}`
            
            let ar = itemClass.split(' ')
            ar[1] = newClass
            

            let arr = ar.join(' ')
            

            item.attr('class', arr)
            $('#input-text').val('')

            const id = $(item).attr('id')
            let obj = this.listItems.find(elem => Number(elem.id) === Number(id))
            obj.color = col
            obj.text = str_n
            localStorage.setItem('todo', JSON.stringify(this.listItems))
        }
    }

    DeleteItem (target) {
        
        let item = target.parent().parent()
        $(item).remove()
        const id = $(item).attr('id')
    
        let w = this.listItems.findIndex(elem => elem.id === id)
        this.listItems.splice(w, 1)
       
        localStorage.setItem('todo', JSON.stringify(this.listItems))
    }

    CheckedItem (target) {
        let w = target.parent().siblings('.task')
        if (target.is(':checked')) {
            w.css('text-decoration', 'line-through')
        } else {
            w.css('text-decoration', 'none')
        }

        let e = target.parent().parent()
        const id = $(e).attr('id')
       
        let q = this.listItems.find(elem => Number(elem.id) === Number(id))
        
        q.checked = !q.checked
        localStorage.setItem('todo', JSON.stringify(this.listItems))
    }
}