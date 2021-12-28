// plus(1)(2)(3)()

function plus(a) {
  return (v) => {
    return v === undefined ? a : plus(a + v)
  }
}
