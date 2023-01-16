const inputFontSize = document.getElementById('font-size-control');
const textSizeEl = document.getElementById('text');


inputFontSize.addEventListener('input', handleinputFontSizeDraw)

function handleinputFontSizeDraw(event) {
    textSizeEl.style.fontSize = `${event.currentTarget.value}px`;
}