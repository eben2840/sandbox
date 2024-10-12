// app.js
window.onload = () => {
    // Define your valid routes (the actual HTML files in your project)
    const validRoutes = ['index.html', 'faq.html', 'service.html', 'about.html', 'contact.html'];

    // Get the current path and extract the file name
    const currentPath = window.location.pathname.split('/').pop();

    // If the current file name is not in the list of valid routes, redirect to the 404 page
    if (!validRoutes.includes(currentPath) && currentPath !== '') {
        window.location.href = '/404.html';  // Redirect to 404.html
    }
};
