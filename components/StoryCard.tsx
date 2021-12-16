import React from 'react'
import { Text } from 'components'

const StoryCard = ({ type = 'card' }: { type: 'card' | 'content' }) => {
  return (
    <div>
      {type === 'card' ? (
        <>
          <div
            style={{
              backgroundImage: "url('/images/placeholder.jpeg')",
              backgroundSize: 'cover',
              height: '328px',
              width: '387px',
              borderRadius: '10px',
            }}
          />
          <div style={{ marginTop: '20px' }}>
            <Text size="xl" style={{ fontWeight: 600 }}>
              Why Aling Lucings sisig is still the best!
            </Text>
            <div style={{ margin: '8px 0' }}>
              <Text
                size="sm"
                style={{
                  color: '#5E5E5E',
                  fontSize: '14px',
                  opacity: 0.5,
                }}
              >
                Why Aling Lucings sisig is still the best! Because it is made...
              </Text>
            </div>
            <div
              style={{
                padding: '4px 8px',
                background: 'rgba(255, 243, 219, 0.9)',
                borderRadius: '10px',
                display: 'inline-block',
                fontSize: '14px',
              }}
            >
              Food
            </div>
          </div>
        </>
      ) : (
        <div
          style={{ display: 'flex', marginTop: '64px', alignItems: 'center' }}
        >
          <div
            style={{
              marginRight: '36px',
              backgroundImage: "url('/images/placeholder.jpeg')",
              height: '212px',
              width: '276px',
              backgroundSize: 'cover',
              borderRadius: '10px',
            }}
          />
          <div>
            <div>
              <Text size="3xl" style={{ fontWeight: 600 }}>
                Why Aling Lucings sisig is still the best!
              </Text>
            </div>
            <div style={{ marginTop: '12px' }}>
              <Text size="sm" style={{ color: '#7E7E7E' }}>
                Why aling lucing’s sisig is still the best! Because it is made
                with love and lorem ipsum....
              </Text>
            </div>
            <div
              style={{
                background: '#FFF3DB',
                padding: '4px 8px',
                display: 'inline-block',
                borderRadius: '10px',
                marginTop: '12px',
              }}
            >
              <span style={{ fontSize: '14px' }}>Food</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StoryCard