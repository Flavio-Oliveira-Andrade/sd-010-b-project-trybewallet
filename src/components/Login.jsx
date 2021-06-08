import React from 'react'

export default function Login() {
  return (
    <form>
      <label htmlFor='login'>
        Login
        <input type='email' id='login' data-testid="email-input" />
      </label>
    </form>
  )
}
