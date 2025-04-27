import { memo } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { AnimatePresence } from 'motion/react'

const Providers = memo( ({children}) => {
  return (
    <Provider store={store}>
      <AnimatePresence>
        {children}
      </AnimatePresence>
    </Provider>
  )
})

export default Providers