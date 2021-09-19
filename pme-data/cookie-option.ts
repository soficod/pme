interface sessionOptionType {
    cookieName: string
    cookieOptions: {
        secure: boolean
    }
    password:string
}
export const session_option:sessionOptionType = {
    cookieName: "PMEI_USER_TOKEN",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production"
    },
    password: (process.env.NEXT_PUBLIC_COOKIE_PWD as string)
}