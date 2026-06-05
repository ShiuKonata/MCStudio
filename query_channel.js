const axios = require('axios');

const API_KEY = 'AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM';
const CHANNEL_ID = 'UCEGbez6s8Y8P_5julxNh7jA';

async function getChannelInfo() {
  try {
    // Get channel uploads playlist
    const channelRes = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
      params: {
        part: 'contentDetails',
        id: CHANNEL_ID,
        key: API_KEY
      }
    });
    
    const uploadsPlaylistId = channelRes.data.items[0].contentDetails.relatedPlaylists.uploads;
    console.log('Uploads Playlist ID:', uploadsPlaylistId);
    
    // Get first 50 videos
    const videosRes = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        part: 'snippet',
        playlistId: uploadsPlaylistId,
        maxResults: 50,
        key: API_KEY
      }
    });
    
    console.log('\n前 50 部影片:');
    videosRes.data.items.slice(0, 20).forEach((item, i) => {
      console.log(`${i + 1}. ${item.snippet.title}`);
    });
  } catch (err) {
    console.error('Error:', err.message);
  }
}

getChannelInfo();
