// app.js
window.onload = () => {
    // Define your valid routes (the actual HTML files in your project)
    const validRoutes = ['index.html'];

    // Get the current path and extract the file name
    const currentPath = window.location.pathname.split('/').pop();

    // If the current file name is not in the list of valid routes, redirect to the 404 page
    if (!validRoutes.includes(currentPath) && currentPath !== '') {
        window.location.href = 'index.html';  // Redirect to 404.html
    }
};
