import React, { createContext, FC, ReactNode, useContext } from 'react'
import { useLocalStorage } from 'react-use'

import { defaultSettings } from '../config'

import type { SettingsContextProps } from './types'
import { SettingsValueProps } from './types'

const initialState: SettingsContextProps = {
  ...defaultSettings,
  onToggleMode: () => undefined,
  onResetSetting: () => undefined,
}

const SettingsContext = createContext(initialState)

interface Props {
  children: ReactNode
}

const SettingsProvider: FC<Props> = ({ children }) => {
  const [settings, setSettings] = useLocalStorage<SettingsValueProps>('settings', {
    themeMode: initialState.themeMode,
  })

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings?.themeMode === 'light' ? 'dark' : 'light',
    })
  }

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
    })
  }

  return (
    <SettingsContext.Provider
      value={{
        ...(settings || defaultSettings),
        onToggleMode,
        onResetSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

const useSettings: () => SettingsContextProps = () => {
  const context = useContext(SettingsContext)

  if (!context) {
    throw new Error('Setting context must be use inside SettingsProvider')
  }

  return context
}

export { SettingsProvider, useSettings }
