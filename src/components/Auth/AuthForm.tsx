import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`
// KeyFrames for tooltip animation
const fadeIn = keyframes`
 from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const dissolve = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
  @media (force-colors: active) {
    border-color: WindowText;
    background-color: Window;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  @media (force-colors: active) {
    color: WindowText;
  }
`

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`

const Input = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #007bff;
  }
  @media (force-colors: active) {
    background-color: Window;
    color: WindowText;
    border-color: WindowText;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  @media (force-colors: active) {
    background-color: ButtonText;
    color: ButtonFace;
    border: 2px solid ButtonText;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    background-color: green;
    text-decoration: underline;
  }
`

const ToolTip = styled.span`
  position: absolute;
  top: -35px;
  left: 0;
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  white-space: nowrap;
  z-index: 10;
  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
  @media (forced-colors: active) {
    background-color: HighlightText;
    color: Highlight;
    &:before {
      border-color: HighlightText transparent transparent transparent;
    }
  }
`

const InputWithTooltip = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  &:hover ${ToolTip} {
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeIn} 0.3s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    &:hover ${ToolTip} {
      animation: none;
    }
  }
`

const ErrorMessage = styled.span<{ visible: boolean }>`
  color: red;
  font-size: 16px;
  margin-top: 6px;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease;
  &:hover {
    border: 1px solid red;
  }
  @media (forced-colors: active) {
    color: Highlight;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const LoginForm: React.FC<{}> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const validateEmail = (value: string) => {
    console.log('validateEmail', value)
    return value.includes('@')
  }

  const validatePassword = (value: string) => {
    console.log('validateEmail', value)
    return value.length >= 16
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(false)
    if (!validateEmail(email) || !validatePassword(password)) {
      console.log('Invalid email or password')
      setError(true)
    }
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWithTooltip>
        <Label htmlFor="email">Email</Label>
        <ToolTip id="emailtooltip" aria-description="email tooltip">
          Enter a valid email address
        </ToolTip>
        <InputWrapper>
          <Input
            id="email"
            name="email"
            required
            aria-required="true"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => console.log('focus', e.target)}
          />
        </InputWrapper>
      </InputWithTooltip>
      <InputWithTooltip>
        <Label htmlFor="password">Password</Label>
        <ToolTip id="tooltip-password" aria-description="password tooltip">
          Must be at least 16 characters long
        </ToolTip>
        <InputWrapper>
          <Input
            id="password"
            name="password"
            required
            aria-required="true"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={(e) => console.log('focus', e.target)}
          />
        </InputWrapper>
      </InputWithTooltip>
      <SubmitButton type="submit">Login</SubmitButton>
      {/*   <ErrorMessage
        visible={error}
        aria-description="error message"
        id="error-message"
        aria-label="error-message"
      >
        Invalid email or password. Check the email and password requirements and try again.
      </ErrorMessage> */}
    </FormWrapper>
  )
}
