console.log('fuga')
document.addEventListener('scroll', function(e) {
  console.log('hoge')
  e.preventDefault()
}, { passive: false })
