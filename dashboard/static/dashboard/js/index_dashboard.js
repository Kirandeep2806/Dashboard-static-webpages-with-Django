const element_full_btn = document.querySelector('.full_screen')

element_full_btn.addEventListener('click', event => {

    if (event.target.classList.contains('fa-expand')) {
        // Full screen code
        elem = document.documentElement
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }

        // normalize steps
        event.target.title = 'Exit ' + event.target.title
        event.target.classList.remove('fa-expand')
        event.target.classList.add('fa-compress')

    } else if (event.target.classList.contains('fa-compress')) {
        // Exit Full screen code
        elem = document.documentElement
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }

        // normalize steps
        event.target.title = event.target.title.slice(5)
        event.target.classList.add('fa-expand')
        event.target.classList.remove('fa-compress')
    }
})

function change_display() {
    const display_onclick = document.querySelector('.options-for-dropdown')
    display_onclick.classList.toggle('hide')
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
        ['Demo1', 'Demo2', 'Demo3'],
        ['2004/05', 5, 7],
        ['2005/06', 12, 16],
        ['2006/07', 7, 9],
        ['2007/08', 10, 12],
    ]);

    var options = {
        vAxis: { textPosition: 'none' },
        hAxis: { textPosition: 'none' },
        seriesType: 'bars',
        color: 'black',
        series: { 1: { type: 'line', color: '#f1ca3a', lineWidth: 3, pointShape: 'circle', pointSize: 7 } },
        tooltip: { trigger: 'none' },
    };

    var chart_1 = new google.visualization.ComboChart(document.getElementById('chart_div_1'));
    var chart_2 = new google.visualization.ComboChart(document.getElementById('chart_div_2'));
    chart_1.draw(data, options);
    chart_2.draw(data, options);
}

google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Demo1", "Demo2", { role: "style" }],
        ["November", 0, "#454545"],
        ["December", 0, "#454545"],
        ["January", 0, "#454545"],
        ["February", 0, "#454545"],
        ["March", 0, "#454545"],
        ["April", 0, "#454545"],
    ]);

    var view = new google.visualization.DataView(data);

    var options = {
        vAxis: { title: 'Ticket Count' },
        hAxis: { title: 'Last 6 Months' },
        legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
}

google.charts.setOnLoadCallback(drawPieChart);
function drawPieChart() {
    var data = google.visualization.arrayToDataTable([
        ['Dash Board', 'Repeated Problems'],
        ['', 25],
        ['', 12.5],
        ['', 25],
        ['', 37.5]
    ]);

    var options = {
        legend: 'none',
        backgroundColor: { fill: "#f2f2f2" },
        pieSliceText: 'label',
        slices: {
            0: { offset: 0.05 },
            1: { offset: 0.05 },
            2: { offset: 0.05 },
            3: { offset: 0.05 },
        },
        tooltip: { trigger: 'none' },
    };

    var chart_1 = new google.visualization.PieChart(document.getElementById('piechart_1'));
    var chart_2 = new google.visualization.PieChart(document.getElementById('piechart_2'));
    chart_1.draw(data, options);
    chart_2.draw(data, options);
}

/* Modal Code */

function AddInfoModal() {
    var modalBgEdit = document.querySelector(".bg-modal-edit");
    var modalCloseEdit = document.querySelector(".close-modal-edit");
    var tempEdit = document.querySelector('.modal-edit');
    var optional_closeEdit = document.getElementsByClassName("cancel_btn_edit")[0];

    modalBgEdit.style.display = "block";
    modalBgEdit.style.opacity = "1";
    setTimeout(function () { tempEdit.style.transform = "translate(-50%,0)"; }, 0);

    modalCloseEdit.addEventListener("click", () => {
        tempEdit.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBgEdit.style.display = "none"; }, 500);
    })

    optional_closeEdit.addEventListener("click", () => {
        tempEdit.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBgEdit.style.display = "none"; }, 500);
    })
}

function BreakdownTicketsModal() {
    var modalBgEdit = document.querySelectorAll(".bg-modal-edit")[1];
    var modalCloseEdit = document.querySelectorAll(".close-modal-edit")[1];
    var tempEdit = document.querySelectorAll('.modal-edit')[1];
    var optional_closeEdit = document.getElementsByClassName("cancel_btn_edit")[1];

    modalBgEdit.style.display = "block";
    modalBgEdit.style.opacity = "1";
    setTimeout(function () { tempEdit.style.transform = "translate(-50%,0)"; }, 0);

    modalCloseEdit.addEventListener("click", () => {
        tempEdit.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBgEdit.style.display = "none"; }, 500);
    })

    optional_closeEdit.addEventListener("click", () => {
        tempEdit.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBgEdit.style.display = "none"; }, 500);
    })
}

function RepeatedProblemsModal() {
    var modalBgEdit = document.querySelectorAll(".bg-modal-edit")[2];
    var modalCloseEdit = document.querySelectorAll(".close-modal-edit")[2];
    var tempEdit = document.querySelectorAll('.modal-edit')[2];
    var optional_closeEdit = document.getElementsByClassName("cancel_btn_edit")[2];

    modalBgEdit.style.display = "block";
    modalBgEdit.style.opacity = "1";
    setTimeout(function () { tempEdit.style.transform = "translate(-50%,0)"; }, 0);

    modalCloseEdit.addEventListener("click", () => {
        tempEdit.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBgEdit.style.display = "none"; }, 500);
    })

    optional_closeEdit.addEventListener("click", () => {
        tempEdit.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBgEdit.style.display = "none"; }, 500);
    })
}

function ScheduleStatusModal() {
    var modalBgEdit = document.querySelectorAll(".bg-modal-edit")[3];
    var modalCloseEdit = document.querySelectorAll(".close-modal-edit")[3];
    var tempEdit = document.querySelectorAll('.modal-edit')[3];
    var optional_closeEdit = document.getElementsByClassName("cancel_btn_edit")[3];

    modalBgEdit.style.display = "block";
    modalBgEdit.style.opacity = "1";
    setTimeout(function () { tempEdit.style.transform = "translate(-50%,0)"; }, 0);

    modalCloseEdit.addEventListener("click", () => {
        tempEdit.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBgEdit.style.display = "none"; }, 500);
    })

    optional_closeEdit.addEventListener("click", () => {
        tempEdit.style.transform = "translate(-50%,-300%)";
        setTimeout(function () { modalBgEdit.style.display = "none"; }, 500);
    })
}

/* Modal Code */