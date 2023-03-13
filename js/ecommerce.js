// challenge 2 select h2 tag and make all the color lightblue module 26.5
let colors = document.getElementsByTagName('h2');
for (let color of colors) {
    // console.log(color);
    color.style.color = 'lightblue';
}

// challenge 3 
let backpackSection = document.getElementById('backpack');
backpackSection.style.backgroundColor = 'tomato';

// challenge 4
let cardClass = document.getElementsByClassName('card');
for (let border of cardClass) {
    border.style.borderRadius = '30px';
}
// challenge 5 
function buyButton() {
    console.log('lightblue');
    document.body.style.backgroundColor = 'lightblue';
}

// challenge 6

// by using id
let shoeClicked = document.getElementById('shoe-btn').addEventListener('click', function(){
    let shoeDiv = document.getElementById('shoe-div');
    shoeDiv.style.display = 'none';
});
// 2
let shoeClicked2 = document.getElementById('shoe-btn2').addEventListener('click', function(){
    let shoeDiv2 = document.getElementById('shoe-div2');
    shoeDiv2.style.display = 'none';
});
//3
let shoeClicked3 = document.getElementById('shoe-btn3').addEventListener('click', function(){
    let shoeDiv3 = document.getElementById('shoe-div3');
    shoeDiv3.style.display = 'none';
});

// challenge 7
// 7
let exampleInputEmail = document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const emailBtn = document.getElementById('email-btn');
    if (text === 'email') {
        emailBtn.removeAttribute('disabled');
    }
    else {
        emailBtn.setAttribute('disabled',true);
    }
})


