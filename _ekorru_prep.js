// This script will be executed in browser to get ekorru data
(function() {
  const ekData = window._ekorru_final_data;
  if (!ekData) return 'ERROR: No data';
  
  const videos = ekData.videos.map(v => 
    `{id:"${v.id}",title:"${v.title.replace(/"/g, '\\"')}",date:"${v.date}"}`
  ).join(',\n      ');
  
  const classified = ekData.classified.map(v =>
    `{id:"${v.id}",title:"${v.title.replace(/"/g, '\\"')}",date:"${v.date}"}`
  ).join(',\n      ');
  
  const output = `videos: [\n      ${videos}\n    ],\noriginals_manual: [\n      ${classified}\n    ],`;
  
  // Copy to clipboard or log
  console.log(output);
  return output;
})();
