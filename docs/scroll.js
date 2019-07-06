console.log('fuga')
document.addEventListener('touchmove', function(e) {
  console.log('hoge')
  e.preventDefault()
}, { passive: false })
