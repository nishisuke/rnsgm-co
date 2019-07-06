console.log('fuga')
window.addEventListener('touchmove', function(e) {
  console.log('hoge')
  e.preventDefault()
}, { passive: false })
