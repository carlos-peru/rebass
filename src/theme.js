
import clrs from 'colors.css'

const { blue, red, orange, green } = clrs

const colors = {
  black: '#111',
  white: '#fff',
  gray: '#ccc',
  midgray: '#777',
  blue,
  red,
  orange,
  green
}

const scale = [
  0,
  8,
  16,
  32,
  64
]

const fontSizes = [
  48,
  32,
  24,
  20,
  16,
  14,
  12
]

const colorTypes = {
  default: colors.midgray,
  info: colors.blue,
  success: colors.green,
  warning: colors.orange,
  error: colors.red
}

const theme = {
  scale,
  fontSizes,
  colors,
  borderRadius: 4, // 2,
  borderColor: colors.gray,
  colorTypes,
  Button: {
    color: colors.white,
    backgroundColor: colors.blue,
  },
  Toolbar: {
    color: colors.white,
    backgroundColor: colors.blue
  },
  Badge: {
    color: colors.white,
  },
  PanelHeader: {
    color: colors.white,
  },
  Message: {
    color: colors.white,
  },
  Banner: {
    color: colors.white,
    backgroundColor: colors.black,
    minHeight: '100vh'
  },
  Container: {
    maxWidth: 1024,
    padding: scale[2]
  },
  Progress: {
    color: colors.blue
  },
  Block: {
    color: colors.white,
    backgroundColor: colors.blue,
    borderColor: 'tomato',
    borderWidth: 2,
    padding: scale[2],
    margin: 0
  }
}

/* Potential config objects:
 * - progress
 * - range
 */

export default theme

