
    const button = document.getElementById('toggle-theme');
    button.onclick = () => {
      document.body.classList.toggle('dark-mode');
      button.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌗 Dark Mode';
    };
