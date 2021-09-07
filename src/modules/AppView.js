import React from 'react'

import Navigator from './navigation/Navigator'
// import Onboarding from './Onboarding/Onboarding'

export default function AppView()
{
  return <Navigator onNavigationStateChange={() => { }} uriPrefix="/onboarding" />
  // return <Onboarding />
}
