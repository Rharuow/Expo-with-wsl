interface Response {
  token: string;
  user: {
    name: string
    email: string
  }
}

export function signIn(): Promise<Response> {
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