import React from 'react'
import { Text } from 'components'

const StoryCard = ({
  type = 'card',
  content,
}: {
  type: 'card' | 'content'
  content: {
    title: string
    description: string
    url: string
  }
}) => {
  return (
    <div>
      {type === 'card' ? (
        <>
          <div
            className="story-card-image-container"
            style={{
              backgroundImage: `url('${content.url}')`,
              backgroundSize: 'cover',
              height: '328px',
              width: '387px',
              borderRadius: '10px',
            }}
          />
          <div style={{ marginTop: '20px' }}>
            <Text size="xl" style={{ fontWeight: 600 }}>
              {content.title}
            </Text>
            <div
              style={{
                margin: '8px 0',
                maxHeight: '40px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              <Text
                size="sm"
                style={{
                  color: '#5E5E5E',
                  fontSize: '14px',
                  opacity: 0.5,
                }}
              >
                {content.description}
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
          className="story-card-sm"
          style={{ display: 'flex', marginTop: '64px', alignItems: 'center' }}
        >
          <div
            className="story-content-image-container"
            style={{
              marginRight: '36px',
              backgroundImage: `url('${content.url}')`,
              height: '212px',
              flex: 0.25,
              backgroundSize: 'cover',
              borderRadius: '10px',
            }}
          />
          <div style={{ flex: 1 }}>
            <div>
              <Text size="3xl" style={{ fontWeight: 600 }}>
                {content.title}
              </Text>
            </div>
            <div
              style={{
                marginTop: '12px',
                height: '56px',
                whiteSpace: 'pre-wrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              <Text size="sm" style={{ color: '#7E7E7E' }}>
                {content.description}
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
