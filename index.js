function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const milliseconds = now.getMilliseconds(); // 获取毫秒
  const month = now.getMonth();
  const day = now.getDate();
  const year = now.getFullYear();
  const period = hours >= 12 ? '"PM"' : '"AM"';
  const hours12 = hours % 12 === 0 ? 12 : hours % 12;

  // 计算小数部分（小数点后一位）
  const fraction = (milliseconds / 1000).toFixed(1).substring(1); // 得到".x"

  // 更新显示
  document.getElementById('hour').textContent = hours12.toString().padStart(2, '0');
  document.getElementById('minute').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('year').textContent = year.toString();
  document.getElementById('day').textContent = day.toString().padStart(2, '0');
  document.getElementById('period').textContent = period;

  // 更新秒数显示
  document.getElementById('second-int').textContent = seconds.toString().padStart(2, '0');
  document.getElementById('second-frac').textContent = fraction; // 显示小数点后一位

  // 月份处理保持不变
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
  ];
  document.getElementById('month').textContent = monthNames[month];
}

// 提高刷新频率以实现流畅动画
setInterval(updateTime, 100);