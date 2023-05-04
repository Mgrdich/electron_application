const information = document.getElementById('info')

information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`


window.handleButtonClick = async function () {
  information.innerText = await window.versions.ping();
};
