import { AnimatePresence, motion } from 'framer-motion'
import { iconButton, useColoreMode, useColoreModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  <AnimatePresence mode='wait' initial={false}>
    <motion.div
      style={{ display: 'inline-block' }}
      key={useColoreModeValue('light', 'dark')}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y:20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <IconButton
        aria-label="Toggle theme"
        coloreScheme={useColoreModeValue('purple', 'orange')}
        icon={useColoreModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColoreMode}
      >
      </IconButton>
    </motion.div>
  </AnimatePresence>
}

export default ThemeToggleButton
