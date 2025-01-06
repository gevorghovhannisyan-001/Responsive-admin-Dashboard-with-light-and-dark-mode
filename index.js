const sideMenu = document.querySelector('aside'),
      menuBtn = document.getElementById('menu-btn'),
      closeBtn = document.getElementById('close-btn'),
      darkMode = document.querySelector('.dark-mode'),
      loader_field = document.querySelector('.loader-field'),
      nav = document.querySelector('.right-section .nav'),
      options_info = document.querySelector('.options-info'),
      options = document.getElementById('options'),
      reminder = document.getElementById('reminder'),
      notification_input = document.querySelector('.notification-input'),
      add_reminder = document.querySelector('.add-reminder'),
      close_form = document.querySelector('.close-form');
    // Menu part
    menuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'block';
    });
    closeBtn.addEventListener('click', () => {
        sideMenu.style.display = 'none';
    });
    // Darkmode part
    darkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode-variables');
        const isDarkModeEnabled = document.body.classList.contains('dark-mode-variables');
        localStorage.setItem('dark-mode-variables', isDarkModeEnabled)
        darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
        darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
        const isActive = darkMode.querySelector('span:nth-child(2)').classList.contains('active');
        localStorage.setItem('active', isActive)
    });
// Animation part when the page is refreshing
window.addEventListener('load', () => {
    const isDarkModeEnabled = localStorage.getItem('dark-mode-variables');
    const isActive = localStorage.getItem('active');
    if (isDarkModeEnabled === 'true' && isActive === 'true') {
        document.body.classList.add('dark-mode-variables');
        darkMode.querySelector('span:nth-child(2)').classList.add('active');
        darkMode.querySelector('span:nth-child(1)').classList.remove('active');
    }else {
        document.body.classList.remove('dark-mode-variables');
        darkMode.querySelector('span:nth-child(2)').classList.remove('active');
        darkMode.querySelector('span:nth-child(1)').classList.add('active');
    }
    setTimeout(() => {
        document.body.style.overflowY = 'auto';
        loader_field.style.display = 'none';
        nav.style.visibility = 'visible';
    }, 2500);
})
// Reminder part
options.addEventListener('click', () => {
    options.style.zIndex =  '-1';
    options_info.style.display = 'block';
});
options_info.addEventListener('click', () => {
    reminder.style.display = 'none';
});
add_reminder.addEventListener('click', () => {
    notification_input.style.display = 'grid';
    add_reminder.style.display = 'none'
});
close_form.addEventListener('click', () => {
    notification_input.style.display = 'none';
    add_reminder.style.display = 'flex';
});
// Write Orders in the table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});