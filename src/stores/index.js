import React from 'react'
import PhotoStore from './photos'

export const storesContext = React.createContext({
  photoStore: new PhotoStore()
})