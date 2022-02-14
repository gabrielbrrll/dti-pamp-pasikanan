import { QrReader } from '@blackbox-vision/react-qr-reader'
import { useState } from 'react'

interface QrReaderPropsResult {
  text: string
  timestamp?: number
}

const Qr = () => {
  const [data, setData] = useState<string | QrReaderPropsResult>('No result')
  const [facingMode, setFacingMode] = useState('user')

  const switchCamera = () => {
    facingMode === 'user' ? setFacingMode('environment') : setFacingMode('user')
  }

  return (
    <div>
      <h1>Hello</h1>
      <QrReader
        constraints={{
          facingMode: {
            exact: facingMode,
          },
        }}
        onResult={(result) => {
          // eslint-disable-next-line no-console
          console.log(result, 'RESULT')
          if (!!result) {
            setData(result as unknown as QrReaderPropsResult)
          }
        }}
      />
      {data.toString()}

      <h1 style={{ cursor: 'pointer' }} onClick={switchCamera}>
        SWITCH Camera
      </h1>
    </div>
  )
}

export default Qr
