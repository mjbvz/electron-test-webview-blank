// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const updateWebview = () => {
    const webview = document.createElement('webview');
    webview.src = './view.html'

    document.body.appendChild(webview)
};

updateWebview()
