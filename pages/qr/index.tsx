import dynamic from 'next/dynamic'
import { useState } from 'react'

interface QrReaderPropsResult {
  text: string
  timestamp?: number
}

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false })

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

  const handleError = () => {
    // eslint-disable-next-line no-console
  }

  return (
    <div>
      <h1>Hello</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
        facingMode={facingMode}
      />

      <h1 style={{ cursor: 'pointer' }} onClick={switchCamera}>
        SWITCH Camera
      </h1>
    </div>
  )
}

export default Qr
