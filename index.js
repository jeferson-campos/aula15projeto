const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contacList');

let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

function renderContacts() {
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span><strong>Nome:</strong> ${contact.name}</span> 
            <span><strong>Telefone:</strong> ${contact.phone}</span>
            <span><strong>Email:</strong> ${contact.email}</span>
            <button onclick="editContact(${index})">Editar</button>
            <button onclick="deleteContact(${index})">Excluir</button>
        `;
        contactList.appendChild(li);
    });
}