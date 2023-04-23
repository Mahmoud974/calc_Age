var form = document.querySelector('form'), date_the_birth = document.querySelectorAll('input');
var day_now = new Date().getDay(), month_now = new Date().getMonth() + 1, year_now = new Date().getFullYear();
//Stack the time
var stack_year, stack_day, stack_month;
var arrow_down = document.querySelector('.arrow_down');
var years_display = document.querySelector('#years_display'), months_display = document.querySelector('#months_display'), days_display = document.querySelector('#days_display');
var year = document.querySelector('#year'), month = document.querySelector('#month'), day = document.querySelector('#day');
var year_label = document.querySelector('#year_label'), day_label = document.querySelector('#day_label'), month_label = document.querySelector('#month_label');
var regex_year = /^\{4}$/;
console.log(year_now);
/**
 * Create function error
 * @param colorBorder
 * @param colorText
 */
var take_error = function (time_label, time, colorBorder, colorText) {
    time === null || time === void 0 ? void 0 : time.classList.add(colorBorder);
    time_label === null || time_label === void 0 ? void 0 : time_label.classList.add(colorText);
    // day?.classList.add(colorBorder)
    // day_label?.classList.add(colorText)
};
/**
 * Full the data of date of birth
 */
date_the_birth.forEach(function (input) {
    input === null || input === void 0 ? void 0 : input.addEventListener('input', function (e) {
        var select_value = (e.currentTarget.value);
        switch (e.currentTarget.id) {
            case 'year':
                input === null || input === void 0 ? void 0 : input.setAttribute('max', "".concat(year_now - 2));
                if (regex_year && input.value.length === 4 && Number(input === null || input === void 0 ? void 0 : input.value) <= year_now) {
                    stack_year = year_now - parseInt(select_value);
                    take_error(year, year_label, 'border-slate-600', 'text-slate-600');
                }
                else if (Number(input === null || input === void 0 ? void 0 : input.value) > year_now) {
                    take_error(year, year_label, 'border-red-600', 'text-red-600');
                    return null;
                }
                break;
            case 'day':
                if (input.value.length <= 2) {
                    stack_day = Math.abs(day_now - parseInt(select_value));
                    take_error(day, day_label, 'border-slate-600', 'text-slate-600');
                }
                else {
                    take_error(day, day_label, 'border-red-600', 'text-red-600');
                }
                break;
            case 'month':
                stack_month = Math.abs(month_now - parseInt(select_value));
                break;
        }
    });
});
var display_years;
/**
 * Send form
 */
arrow_down === null || arrow_down === void 0 ? void 0 : arrow_down.addEventListener('click', function () {
    if (years_display && days_display && months_display) {
        years_display.innerHTML = (stack_year === null || stack_year === void 0 ? void 0 : stack_year.toString()) + ' ';
        days_display.innerHTML = (stack_day === null || stack_day === void 0 ? void 0 : stack_day.toString()) + ' ';
        months_display.innerHTML = (stack_month === null || stack_month === void 0 ? void 0 : stack_month.toString()) + ' ';
        if (arrow_down) {
            var closestCircleArrow = arrow_down.closest('.circle_arrow');
            if (closestCircleArrow)
                closestCircleArrow.classList.add('bg-purple-700');
        }
    }
    else {
        alert('Veuillez entre les données correctement!!');
    }
    years_display === null || years_display === void 0 ? void 0 : years_display.classList.add('text-purple-700');
    days_display === null || days_display === void 0 ? void 0 : days_display.classList.add('text-purple-700');
});
