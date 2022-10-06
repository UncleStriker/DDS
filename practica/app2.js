const lista = document.getElementById('lista')
// console.log(lista);

// const li = document.createElement("li")
// li.textContent = 'primer elemento';

// lista.appendChild(li)

const arrayElement = ['primer element','segundo element','tercero element'];

// arrayElement.forEach(item => {
//   console.log(item)  
//   const li = document.createElement("li")
//   li.textContent = item

//   lista.appendChild(li)
// })

// arrayElement.forEach(item => {
//     lista.innerHTML += `<li>${item}</li>`
// })

const fragment = document.createDocumentFragment();
// const fragment =  new DocumentFragment();

arrayElement.forEach(item => {
    const li = document.createElement("li")
    li.textContent = item

    const childNode = fragment.firstChild
    console.log(item, childNode);

    fragment.insertBefore(li, childNode);
    // fragment.appendChild(li);
    // console.log(fragment);
})

lista.appendChild(fragment);

///DOM #05 Template vs innerHTML vs createElement///

const lista = document.querySelector('#lista')

const arrayLista = ['item 1', 'item 2', 'item 3']

// const fragment = document.createDocumentFragment()
// arrayLista.forEach(item => {
//     const li = document.createElement('li')
//     li.classList.add('list')
//     const b = document.createElement('b')
//     b.textContent = 'Nombre: '
    
//     const span = document.createElement('span')
//     span.classList.add('text-danger')
//     span.textContent = item
//     li.appendChild(b)
//     li.appendChild(span)
//     fragment.appendChild(li)
// });
// lista.appendChild(fragment);

// let fragment = ''
// arrayLista.forEach(item => {
//     fragment += `
//     <li class="list">
//         <b>Nombre: </b> <span class="text-danger">${item}</span>
//     </li>
//     `
// })
// lista.innerHTML = fragment

const template = document.querySelector('#template-li').content
const fragment =  document.createDocumentFragment()

arrayLista.forEach(item => {
    template.querySelector('.list span').textContent = item
    // template.querySelector('.text-danger').textContent = item
    // template.querySelector('span').textContent = item
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})

lista.appendChild(fragment)