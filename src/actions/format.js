
const MyUtil = {
    currencyFormat: function (curency) {
        return curency.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    },
    subStringCurrency: function (curency) {
        return curency.substr(0, curency.length - 1);
    },
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getDateFormat: function (date) {
        var { day, month } = getMonthDay(date);
        return (day + '/' + month + '/' + date.getFullYear());
    },
    getDateFormatEn: function (date) {
        var { day, month } = getMonthDay(date);
        return (month + '/' + day + '/' + date.getFullYear());
    },
    formatVehicleName: (name) => {
        var i = 0, strLength = name.length;
        for (i; i < strLength; i++) {
            name = name.replace(" ", "-");
        }
        return name
    },
    getVehicleName: (name) =>{
        var i = 0, strLength = name.length;
        for (i; i < strLength; i++) {
            name = name.replace("-", " ");
        }
        return name
    }

}

export default MyUtil

function getMonthDay(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    if (day < 10)
        day = "0" + day;
    if (month < 10)
        month = "0" + month;
    return { day, month };
}
