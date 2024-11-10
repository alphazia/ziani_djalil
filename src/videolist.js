import React from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // Import video-react styles


function VideoList({ videos, emptyHeading }) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Videos' : 'Video';
    heading = count + ' ' + noun;
  }
  return (
    <section>
      <h2>{heading}</h2>
      {videos.map(video =>
        <VideoList key={video.id} video={video} />
      )}
    </section>
  );
}