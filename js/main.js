const list = document.querySelector('.list'),
    items = document.querySelectorAll('.reproductions-item'), 
    listItems = document.querySelectorAll('.list_item')

function filter() {
    list.addEventListener('click', event => {
        let target = event.target;
        
        if (target.classList.contains('list-btn')) {
            target = target.closest('.list_item');
        }

        if (target.classList.contains('list_item')) {
            const targetId = target.dataset.id;
            
            listItems.forEach(listItem => listItem.classList.remove('active'));
            target.classList.add('active');

            switch(targetId) {
                case 'france':
                case 'germany':
                case 'england':
                    getItems(targetId);
                    break;
            }
        }
    });
}
filter();

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


document.querySelector('.burger').addEventListener('click',function() {
    this.classList.toggle('active');
    document.querySelector('.header-nav').classList.toggle('open');
})