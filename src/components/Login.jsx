import React from 'react'

export default function Login() {
  return (
    <form>
      <label htmlFor='login'>
        Login
        <input type='email' id='login' data-testid="email-input" />
      </label>
      <label htmlFor='password'>
        Password
        <input type='password' id='password' data-testid="password-input" />
      </label>
    </form>
  )
}
