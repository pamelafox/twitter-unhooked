

var hideChecks = 1;
var hideTimer;
var hideDynamicDom = function() {
    var whoToFollow = document.querySelector("[aria-label=\"Who to follow\"]");
    if (whoToFollow && whoToFollow.parentNode) {
        whoToFollow.parentNode.style.display = "none";
        window.clearTimeout(hideTimer);
    } else {
        hideTimer = window.setTimeout(hideDynamicDom, hideChecks*hideChecks*10)
    }
    hideChecks++
}

window.onload = hideDynamicDom;
