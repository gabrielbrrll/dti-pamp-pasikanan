import { useState } from 'react'
import { QrReader } from 'react-qr-reader'

interface QrReaderPropsResult {
  text: string
  timestamp?: number
}

const Qr = () => {
  const [, setData] = useState<string | QrReaderPropsResult>('No result')
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user')

  const switchCamera = () => {
    facingMode === 'user' ? setFacingMode('environment') : setFacingMode('user')
  }

  const handleScan = (data: unknown) => {
    if (data) {
      setData(data as string)
    }
  }

  return (
    <div>
      <h1>Hello</h1>
      <QrReader
        onResult={handleScan}
        containerStyle={{ width: '100%' }}
        videoContainerStyle={{ width: '100%' }}
        videoStyle={{ width: '100%' }}
        constraints={{
          facingMode,
        }}
      />

      <h1 style={{ cursor: 'pointer' }} onClick={switchCamera}>
        SWITCH Camera
      </h1>
    </div>
  )
}

export default Qr
