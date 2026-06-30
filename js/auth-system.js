// 跳过登录验证，直接进入主程序
(function () {
  'use strict';
  const introScreen = document.getElementById('intro-screen');
  const authScreen = document.getElementById('ephone-auth-screen');
  const phoneScreen = document.getElementById('phone-screen');

  // 隐藏登录框
  if (authScreen) authScreen.classList.add('hidden');

  // 点击开场动画 "Tap to Start" 后进入主程序
  if (introScreen) {
    introScreen.classList.remove('hidden');
    introScreen.style.display = 'flex';
    introScreen.addEventListener('click', () => {
      introScreen.classList.add('fade-out');
      setTimeout(() => {
        introScreen.style.display = 'none';
        if (phoneScreen) phoneScreen.style.display = 'block';
      }, 500);
    });
  } else {
    if (phoneScreen) phoneScreen.style.display = 'block';
  }

  window.ephoneLogout = function () {
    location.reload();
  };

  console.log('验证已跳过');
})();
