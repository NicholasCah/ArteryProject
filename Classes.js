document.addEventListener('DOMContentLoaded', () => {
    loadClasses();
});

function loadClasses() {
    const classes = JSON.parse(localStorage.getItem('classes')) || [];
    const classContainer = document.getElementById('classContainer');

    classContainer.innerHTML = '';

    classes.forEach((classItem, index) => {
        const newClassDiv = document.createElement('div');
        newClassDiv.classLisL = `
            <a href="#"><img src="${classItem.image}" alt="${classItem.title}"></a>
            <div class="Upper1">
                <div class="title">                           
                    <h3>${classItem.title}</h3>
                </div>
                <div class="price">
                    <div class="banner1">
                        <p>${classItem.price}$</p>
                    </div>
                </div>
            </div>
            <div class="mtext">
                <p>${classItem.description}</p>
            </div>
            <button onclick="deleteClass(${index})">Delete</button>
        `;
        classContainer.appendChild(newClassDiv);
    });
}

function deleteClass(index) {
    let classes = JSON.parse(localStorage.getItem('classes')) || [];
    classes.splice(index, 1);
    localStorage.setItem('classes', JSON.stringify(classes));
    loadClasses(); 
}
t.add('Class1');
        newClassDiv.innerHTM