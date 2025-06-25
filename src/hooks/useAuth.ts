import { useState, useEffect } from 'react'

export function useAuth() {
  const [user, setUser] = useState(null)

  const loginWithGoogle = async (id_token: string) => {
    // POST to your backend
    const res = await fetch('/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: id_token }),
    })

    const data = await res.json()
    if (res.ok) setUser(data.user)
    else throw new Error(data.message)
  }

  const logout = () => setUser(null)

  return { user, loginWithGoogle, logout }
}
