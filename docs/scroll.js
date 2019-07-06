console.log('fuga')
document.body.addEventListener('touchmove', function(e) {
  console.log('hoge')
  e.preventDefault()
}, { passive: false })
