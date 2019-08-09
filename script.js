$(document).ready( () => {

    const initialArray = JSON.parse(localStorage.getItem('todo'));
    
    const todo = new ToDo(initialArray)

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
    

})

class ToDo {
    constructor(initialArray) {
        // console.log( initialArray, ' initial item');
        this.listItems = initialArray || []
        

        this.init()
    
    }


    /***
     * 
     * нужно повесить обрапботкчки 
     * и допилить функционал
     * 
     * 
     */

    init() {
        this.listItems.forEach(element => {
            $('.task-container').append(
                `
                    <div class="item ${element.color}" id="${element.id}">
                        <div class="checkbox">
                            <input type="checkbox" checked="${element.checked}" class="form-check-input">
                        </div>
                        <div class="task">${element.text}</div>
                        <div >
                            <input type="submit" value="Delete" class="but-delete">
                        </div>
                    </div>
                `
            )
        });

    }

    addItem () {
        // console.log( this.listItems, ' this.listItems');
        

        let text = $('#input-text').val()
        $('#input-text').val('')
        
        let color = this.getActiveColor()
        $('.task-container').append(
            `
                <div class="item ${color}" >
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
            id: Math.random()
        }

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


        }
    }

    DeleteItem (target) {
        
        let item = target.parent().parent()
        $(item).remove()
        const id = $(item).attr('id')
        /**
         * не законченый примерный вариант
         * 
         * 
         * 
         */

        // const currentEl = this.listItems.find(item => item.id===id)
        // this.listItems.splice(index , 1)

        // localStorage.setItem('todo', JSON.stringify(this.listItems))
        // // this.init()
        
    }

    CheckedItem (target) {
        let w = target.parent().siblings('.task')
        

        if (target.is(':checked')) {
            w.css('text-decoration', 'line-through')
        } else {
            w.css('text-decoration', 'none')
        }
    }
}