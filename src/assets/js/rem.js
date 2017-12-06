(function () {
  const w = window
  const d = document
  const de = d.documentElement
  const cw = 'clientWidth'
  const ae = 'addEventListener'
  const oc = 'orientationchange'
  const rs = 'resize'
  const dl = 'DOMContentLoaded'
  let fs = 16
  const mw = de.getAttribute('data-pagewidth') || 750
  const as = function () {
    if (de[cw]) de.style.fontSize = 100 * (de[cw] / mw) * 16 / fs + 'px'
  }
  try {
    fs = window.getComputedStyle(document.documentElement, null).fontSize.replace('px', '') || 16
  } catch (e) {}
  w[ae] && w[ae]((oc in w ? oc : rs), as, false)
  d[ae] && d[ae](dl, as, false)
  d.querySelector('html').classList.add('webview-rem')
  as()
})()
