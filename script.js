let am9 = $('#am9');
let am10 = $('#am10');
let am11 = $('#am11');
let pm12 = $('#pm12');
let pm1 = $('#pm1');
let pm2 = $('#pm2');
let pm3 = $('#pm3');
let pm4 = $('#pm4');
let pm5 = $('#pm5');
let today = $('#today');
let curTime = $('#curTime')
let current;

const clock = function() {
    current = moment();
    today.text(current.format('MMM Do, YYYY'));
    curTime.text(current.format('[The current time is: ]' +'h:mm:ss a'));

    if (moment().format('h') == 9) {
        am9.attr('class', 'col 8 bg-warning p-2');
        am10.attr('class', 'col 8 bg-info p-2');
        am11.attr('class', 'col 8 bg-info p-2');
        pm12.attr('class', 'col 8 bg-info p-2');
        pm1.attr('class', 'col 8 bg-info p-2');
        pm2.attr('class', 'col 8 bg-info p-2');
        pm3.attr('class', 'col 8 bg-info p-2');
        pm4.attr('class', 'col 8 bg-info p-2');
        pm5.attr('class', 'col 8 bg-info p-2');
    } else if (moment().format('h') == 10) {
        am9.attr('class', `'col 8 bg-success p-2'`);
        am10.attr('class', 'col 8 bg-warning p-2');
        am11.attr('class', 'col 8 bg-info p-2');
        pm12.attr('class', 'col 8 bg-info p-2');
        pm1.attr('class', 'col 8 bg-info p-2');
        pm2.attr('class', 'col 8 bg-info p-2');
        pm3.attr('class', 'col 8 bg-info p-2');
        pm4.attr('class', 'col 8 bg-info p-2');
        pm5.attr('class', 'col 8 bg-info p-2');
    } else if (moment().format('h') == 11) {
        am9.attr('class', 'col 8 bg-success p-2');
        am10.attr('class', 'col 8 bg-success p-2');
        am11.attr('class', 'col 8 bg-warning p-2');
        pm12.attr('class', 'col 8 bg-info p-2');
        pm1.attr('class', 'col 8 bg-info p-2');
        pm2.attr('class', 'col 8 bg-info p-2');
        pm3.attr('class', 'col 8 bg-info p-2');
        pm4.attr('class', 'col 8 bg-info p-2');
        pm5.attr('class', 'col 8 bg-info p-2');
    } else if (moment().format('h') == 12) {
        am9.attr('class', 'col 8 bg-success p-2');
        am10.attr('class', 'col 8 bg-success p-2');
        am11.attr('class', 'col 8 bg-success p-2');
        pm12.attr('class', 'col 8 bg-warning p-2');
        pm1.attr('class', 'col 8 bg-info p-2');
        pm2.attr('class', 'col 8 bg-info p-2');
        pm3.attr('class', 'col 8 bg-info p-2');
        pm4.attr('class', 'col 8 bg-info p-2');
        pm5.attr('class', 'col 8 bg-info p-2');
    } else if (moment().format('h') == 1) {
        am9.attr('class', 'col 8 bg-success p-2');
        am10.attr('class', 'col 8 bg-success p-2');
        am11.attr('class', 'col 8 bg-success p-2');
        pm12.attr('class', 'col 8 bg-success p-2');
        pm1.attr('class', 'col 8 bg-warning p-2');
        pm2.attr('class', 'col 8 bg-info p-2');
        pm3.attr('class', 'col 8 bg-info p-2');
        pm4.attr('class', 'col 8 bg-info p-2');
        pm5.attr('class', 'col 8 bg-info p-2');
    } else if (moment().format('h') == 2) {
        am9.attr('class', 'col 8 bg-success p-2');
        am10.attr('class', 'col 8 bg-success p-2');
        am11.attr('class', 'col 8 bg-success p-2');
        pm12.attr('class', 'col 8 bg-success p-2');
        pm1.attr('class', 'col 8 bg-success p-2');
        pm2.attr('class', 'col 8 bg-warning p-2');
        pm3.attr('class', 'col 8 bg-info p-2');
        pm4.attr('class', 'col 8 bg-info p-2');
        pm5.attr('class', 'col 8 bg-info p-2');
    } else if (moment().format('h') == 3) {
        am9.attr('class', 'col 8 bg-success p-2');
        am10.attr('class', 'col 8 bg-success p-2');
        am11.attr('class', 'col 8 bg-success p-2');
        pm12.attr('class', 'col 8 bg-success p-2');
        pm1.attr('class', 'col 8 bg-success p-2');
        pm2.attr('class', 'col 8 bg-success p-2');
        pm3.attr('class', 'col 8 bg-warning p-2');
        pm4.attr('class', 'col 8 bg-info p-2');
        pm5.attr('class', 'col 8 bg-info p-2');
    } else if (moment().format('h') == 4) {
        am9.attr('class', 'col 8 bg-success p-2');
        am10.attr('class', 'col 8 bg-success p-2');
        am11.attr('class', 'col 8 bg-success p-2');
        pm12.attr('class', 'col 8 bg-warning p-2');
        pm1.attr('class', 'col 8 bg-success p-2');
        pm2.attr('class', 'col 8 bg-success p-2');
        pm3.attr('class', 'col 8 bg-success p-2');
        pm4.attr('class', 'col 8 bg-warning p-2');
        pm5.attr('class', 'col 8 bg-info p-2');
    } else if (moment().format('h') == 5) {
        am9.attr('class', 'col 8 bg-success p-2');
        am10.attr('class', 'col 8 bg-success p-2');
        am11.attr('class', 'col 8 bg-success p-2');
        pm12.attr('class', 'col 8 bg-success p-2');
        pm1.attr('class', 'col 8 bg-success p-2');
        pm2.attr('class', 'col 8 bg-success p-2');
        pm3.attr('class', 'col 8 bg-success p-2');
        pm4.attr('class', 'col 8 bg-success p-2');
        pm5.attr('class', 'col 8 bg-warning p-2');
    } else {
        am9.attr('class', 'col 8 bg-success p-2');
        am10.attr('class', 'col 8 bg-success p-2');
        am11.attr('class', 'col 8 bg-success p-2');
        pm12.attr('class', 'col 8 bg-success p-2');
        pm1.attr('class', 'col 8 bg-success p-2');
        pm2.attr('class', 'col 8 bg-success p-2');
        pm3.attr('class', 'col 8 bg-success p-2');
        pm4.attr('class', 'col 8 bg-success p-2');
        pm5.attr('class', 'col 8 bg-success p-2');
    }
}
setInterval(clock, 1000);

$('#save9').click(function(event){
    event.preventDefault();
    let task9 = am9.val();
    localStorage.setItem('task9', task9);
});
$('#save10').click(function(event){
    event.preventDefault();
    let task10 = am10.val();
    localStorage.setItem('task10', task10);
});
$('#save11').click(function(event){
    event.preventDefault();
    let task11 = am11.val();
    localStorage.setItem('task11', task11);
});
$('#save12').click(function(event){
    event.preventDefault();
    let task12 = pm12.val();
    localStorage.setItem('task12', task12);
});
$('#save1').click(function(event){
    event.preventDefault();
    let task1 = pm1.val();
    localStorage.setItem('task1', task1);
});
$('#save2').click(function(event){
    event.preventDefault();
    let task2 = pm2.val();
    localStorage.setItem('task2', task2);
});
$('#save3').click(function(event){
    event.preventDefault();
    let task3 = pm3.val();
    localStorage.setItem('task3', task3);
});
$('#save4').click(function(event){
    event.preventDefault();
    let task4 = pm4.val();
    localStorage.setItem('task4', task4);
});
$('#save5').click(function(event){
    event.preventDefault();
    let task5 = pm5.val();
    localStorage.setItem('task5', task5);
});

am9.val(localStorage.getItem('task9'));
am10.val(localStorage.getItem('task10'));
am11.val(localStorage.getItem('task11'));
pm12.val(localStorage.getItem('task12'));
pm1.val(localStorage.getItem('task1'));
pm2.val(localStorage.getItem('task2'));
pm3.val(localStorage.getItem('task3'));
pm4.val(localStorage.getItem('task4'));
pm5.val(localStorage.getItem('task5'));