import React from 'react'
import {Button, FlatList, Text, View} from 'react-native'

import {GifView} from '@/modules/expo-bluesky-gif-view'

export default function HomeScreen() {
  const [showGif, setShowGif] = React.useState(false)
  const gifRef = React.useRef<GifView>(null)

  return (
    <View style={{flex: 1, marginTop: 100}}>
      <Text>
        {/* @ts-ignore */}
        Arch: {global?.nativeFabricUIManager ? 'Fabric' : 'Paper'}
      </Text>
      <Button title="Show GIF" onPress={() => setShowGif(prev => !prev)} />
      <Button title="Change Playing State" onPress={() => gifRef.current?.toggleAsync()} />
      {showGif ? (
        <View style={{
          overflow: 'hidden',
          borderRadius: 10,
          height: 300,
        }}>
          <GifView
            placeholderSource="https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:oisofpd7lj26yvgiivf3lxsi/bafkreibsrpqouvbqmoe5qe7j5tvxkaofmd3whkodj2qlzr7jre63crjaeu@jpeg"
            source="https://t.gifs.bsky.app/7jvpq5Hs7G4AAAAM/cup-coffee.gif"
            ref={gifRef}
            style={{flex: 1, borderRadius: 10}}
            // Without this prop set, things work fine. However if it's set to anything other than
            // undefined, we get an immediate crash on mount
            // autoplay={true}
          />
        </View>
      ) : null}
    </View>
  );
}
