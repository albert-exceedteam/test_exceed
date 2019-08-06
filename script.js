$(document).ready( () => {
    const todo = new ToDo()

    $('#add-button').on('click', () => todo.addItem())


})

class ToDo {

    addItem () {
        let text = 'asdasd'
        let color = this.getColorByCkassName('blue')
        $('.task-container').append(
            `
                <div class="item ${color}">
                    <div class="checkbox">
                        <input type="checkbox" class="form-check-input">
                    </div>
                    <div class="task">Task #1   ${text}</div>
                </div>
            `
        )
    }

    getColorByCkassName() {
        let className = $('.ac')
        switch (className) {
            case 'red':
                return 'red'
                break;
        

            case 'blue':
                return 'blue'
                break;
            default:
                break;
        }
    }
}