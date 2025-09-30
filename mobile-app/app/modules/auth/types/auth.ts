export interface AuthInitialState {
  user: {
    name: string | null,
    email: string | null,
    id: string | null,
    mobile?: string | null,
    photoUrl: string | null,
    role: string | null
  },
  token: {
    accessToken: string | null,
    refreshToken: string | null,
    sessionToken: string | null,
    expires: string | Date | null
  }
}