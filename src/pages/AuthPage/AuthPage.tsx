import styled from 'styled-components'

import { PageTemplate } from '../../templates/PageTemplate'
import { LoginForm } from '../../components/Auth/AuthForm'

const Spacing = styled.div`
  margin-bottom: 4.5rem;
`

export const AuthPage = () => (
  <PageTemplate>
    <Spacing />
    <LoginForm />
    <Spacing />
  </PageTemplate>
)