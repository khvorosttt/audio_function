let a = 1;
let b = 1;
let melody = 'kuz';
const btn_disturbance = document.querySelector('.btn_disturbance');
const btn_nondisturbance = document.querySelector('.btn_nondisturbance');
const melody_btn_disturbance = document.querySelector('.melody_btn_disturbance');
const melody_btn_nondisturbance = document.querySelector('.melody_btn_nondisturbance');
const audio = document.getElementsByTagName('audio')[0];
const values_a = document.querySelectorAll('.a-li');
const values_b = document.querySelectorAll('.b-li');
const values_melody = document.querySelectorAll('.melody-li');
const a_wrapper = document.querySelector('.a-select');
const b_wrapper = document.querySelector('.b-select');
const melody_wrapper = document.querySelector('.melody-select');
const value_a = document.querySelector('.value_a');
const value_b = document.querySelector('.value_b');
const value_melody = document.querySelector('.value_melody');
btn_disturbance.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.src = `./audio/a_${a}b_0_${b}.wav`
    audio.play();
});
btn_nondisturbance.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.src = `./audio/nondisturbance.wav`
    audio.play();
});
melody_btn_disturbance.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.src = `./audio/${melody}_a_${a}b_0_${b}.wav`
    audio.play();
});
melody_btn_nondisturbance.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.src = `./audio/${melody}_non.wav`
    audio.play();
});
value_a.addEventListener('click', ()  => {
    a_wrapper.classList.toggle('show');
});
value_b.addEventListener('click', ()  => {
    b_wrapper.classList.toggle('show');
});

value_melody.addEventListener('click', ()  => {
    melody_wrapper.classList.toggle('show');
});

values_a.forEach((item) => {
    item.addEventListener('click', (event) => {
        let currentElem = event.currentTarget;
        values_a.forEach((elem) => elem.classList.remove('selected'));
        currentElem.classList.add('selected');
        a = Number(currentElem.textContent);
        a_wrapper.classList.remove('show');
        value_a.textContent = currentElem.textContent;
    })
});
values_b.forEach((item) => {
    item.addEventListener('click', (event) => {
        let currentElem = event.currentTarget;
        values_b.forEach((elem) => elem.classList.remove('selected'));
        currentElem.classList.add('selected');
        b = Number(currentElem.textContent.split('.')[1]);
        b_wrapper.classList.remove('show');
        value_b.textContent = currentElem.textContent;
    })
});

values_melody.forEach((item) => {
    item.addEventListener('click', (event) => {
        let currentElem = event.currentTarget;
        values_melody.forEach((elem) => elem.classList.remove('selected'));
        currentElem.classList.add('selected');
        melody = currentElem.id;
        melody_wrapper.classList.remove('show');
        value_melody.textContent = currentElem.textContent;
    })
});