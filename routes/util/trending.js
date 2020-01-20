// const getTrendingVids = function() {
//     Video.find()
//         .then(videos => {
//             //Grabbing today's date and date from a week ago
//             const milSecsInAWeek = 604800000;
//             const todayTimeStamp = Date.now();
//             const weekAgoTimeStamp = todayTimeStamp - milSecsInAWeek;
//             const todayDate = new Date(todayTimeStamp);
//             const weekAgoDate = new Date(weekAgoTimeStamp);

//             //Iterating through each video and their respective views and incrementing a counter for
//             //each view that is within the last week.
//             const vidsHash = {};
//             videos.forEach(video => {
//                 let viewsInWeek = 0;
//                 video.views.forEach(view => {
//                     if (view.date > weekAgoDate) {
//                         viewsInWeek++;
//                     }
//                 })
//                 vidsHash[video._id] = viewsInWeek;
//             })

//             //Ordering videos based on greatest number of views in the last week 
//             const vidsHashKeysSorted = Object.keys(vidsHash).sort(function (a, b) {
//                 return vidsHash[a] - vidsHash[b]
//             }).reverse()
            
//             //Creating array of the actual sorted videos
//             const finalSortedVids = []
//             vidsHashKeysSorted.forEach((vidId, idx1) => {
//                 videos.forEach((video, idx2) => {
//                     if (vidId == video._id) {
//                         finalSortedVids.push(video);
//                     } 
//                 })
//             }) 
//             return finalSortedVids;   
//             // res.send(finalSortedVids);
//             // console.log(finalSortedVids);
//         })    
// }

// module.exports = getTrendingVids;

