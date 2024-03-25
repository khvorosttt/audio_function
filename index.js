let a = 1;
let b = 1;
const btn_disturbance = document.querySelector('.btn_disturbance');
const btn_nondisturbance = document.querySelector('.btn_nondisturbance');
const audio = document.getElementsByTagName('audio')[0];
const values_a = document.querySelectorAll('.a-li');
const values_b = document.querySelectorAll('.b-li');
const a_wrapper = document.querySelector('.a-select');
const b_wrapper = document.querySelector('.b-select');
const value_a = document.querySelector('.value_a');
const value_b = document.querySelector('.value_b');
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
value_a.addEventListener('click', ()  => {
    a_wrapper.classList.toggle('show');
});
value_b.addEventListener('click', ()  => {
    b_wrapper.classList.toggle('show');
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