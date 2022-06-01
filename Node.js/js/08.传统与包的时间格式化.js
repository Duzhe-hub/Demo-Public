// 1. 定义时间格式化方法
function dateFormat(dtStr) {
    const dt = new Date(dtStr);

    const y = dt.getFullYear();
    const m = padZero(dt.getMonth() + 1);
    const d = padZero(dt.getDate());

    const hh = padZero(dt.getHours());
    const mm = padZero(dt.getMinutes());
    const ss = padZero(dt.getSeconds());

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

// 2. 定义补零函数
function padZero(n) {
    return n > 9 ? n : '0' + n;
}

// 3. 向外共享方法
module.exports = { dateFormat }