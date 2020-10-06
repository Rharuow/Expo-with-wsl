export function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: "diasjdsaiddasdkosadoas",
        user: {
          name: "Harysson",
          email: "haryssonsoares@gmail.com"
        }
      })
    }, 1400)
  })
}