const calender = document.querySelector('#calendar');

var no_of_days = 30

calender.insertAdjacentHTML('beforeend',`<div class="day">29</div>`);
calender.insertAdjacentHTML('beforeend',`<div class="day">30</div>`);
calender.insertAdjacentHTML('beforeend',`<div class="day">31</div>`);

var top_value = 3;

for (let day = 1; day <= no_of_days; day++) {
    calender.insertAdjacentHTML('beforeend',`<div class="day">${day}</div>`);
}

calender.insertAdjacentHTML('beforeend',`<div class="day">1</div>`);
calender.insertAdjacentHTML('beforeend',`<div class="day">2</div>`);

var bottom_value = 2;

var not_to_be_highlighted = document.querySelectorAll('.day');

for (let i = 0; i < top_value; i++) {
    not_to_be_highlighted[i].style.color = "#cfcfcf";
}

for (let i = no_of_days+top_value; i < no_of_days+top_value+bottom_value; i++) {
    not_to_be_highlighted[i].style.color = "#cfcfcf";
}

var date_to_be_highlighted = 9;
var get_index_of_date_to_be_highlighted = top_value + date_to_be_highlighted;

while(true) {
    not_to_be_highlighted[get_index_of_date_to_be_highlighted-1].style.backgroundColor = "#f2daec";
    break;
}

