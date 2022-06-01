// 格式化时间函数
function dateFormat(dateStr) {
    const date = new Date(dateStr);

    const y = date.getFullYear();
    const m = padZero(date.getMonth() + 1);
    const d = padZero(date.getDate());

    const hh = padZero(date.getHours());
    const mm = padZero(date.getMinutes());
    const ss = padZero(date.getSeconds());

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

// 时间补零函数
function padZero(n) {
    return n > 9 ? n : '0' + n;
}

// 共享成员方法
module.exports = {
    dateFormat
}