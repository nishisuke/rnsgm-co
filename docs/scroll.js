console.log('fuga')
document.body.addEventListener('scroll', function(e) {
  console.log('hoge')
  e.preventDefault()
}, { passive: false })
