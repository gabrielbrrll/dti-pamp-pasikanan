import { QrReader } from '@blackbox-vision/react-qr-reader'
import { useState } from 'react'

interface QrReaderPropsResult {
  text: string
  timestamp?: number
}

const Qr = () => {
  const [data, setData] = useState<string | QrReaderPropsResult>('No result')

  return (
    <div>
      <h1>Hello</h1>
      <QrReader
        constraints={{ facingMode: 'user' }}
        onResult={(result) => {
          // eslint-disable-next-line no-console
          console.log(result, 'RESULT')
          if (!!result) {
            setData(result as unknown as QrReaderPropsResult)
          }
        }}
      />
      {data.toString()}
    </div>
  )
}

export default Qr
