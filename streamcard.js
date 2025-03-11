document.addEventListener('DOMContentLoaded', function() {

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // Create a container div for the videos row
        const videosRow = document.createElement('div');
        videosRow.className = 'videos-row row';
        
        // First video column
        const videoCol1 = document.createElement('div');
        videoCol1.className = 'col-md-6 mb-3 mb-md-0';
        
        const videoContainer1 = document.createElement('div');
        videoContainer1.className = 'video-container';
        
        const iframe1 = document.createElement('iframe');
        iframe1.allow = 'autoplay; fullscreen';
        iframe1.allowFullscreen = true;
        
        // Set first video URL from data attribute
        const streamChannel1 = card.dataset.streamChannel;
        const parentDomain = window.location.hostname || 'localhost';
        iframe1.src = `https://player.twitch.tv/?channel=${streamChannel1}&parent=${parentDomain}&muted=true`;
        
        videoContainer1.appendChild(iframe1);
        videoCol1.appendChild(videoContainer1);
        
        // Second video column
        const videoCol2 = document.createElement('div');
        videoCol2.className = 'col-md-6';
        
        const videoContainer2 = document.createElement('div');
        videoContainer2.className = 'video-container';
        
        const iframe2 = document.createElement('iframe');
        iframe2.allow = 'autoplay; fullscreen';
        iframe2.allowFullscreen = true;
        
        // Set second video URL from data attribute or use a default
        const streamChannel2 = card.dataset.streamChannel2;
        iframe2.src = `https://player.twitch.tv/?channel=${streamChannel2}&parent=${parentDomain}&muted=true`;
        
        videoContainer2.appendChild(iframe2);
        videoCol2.appendChild(videoContainer2);
        
        // Append both columns to the videos row
        videosRow.appendChild(videoCol1);
        videosRow.appendChild(videoCol2);
        
        // Append the videos row to the card body
        card.querySelector('.card-body').appendChild(videosRow);
        
        // Add click event to the card
        card.addEventListener('click', function(e) {
            // Prevent click on buttons/links inside the card from toggling
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || 
                e.target.closest('a') || e.target.closest('button')) {
                return;
            }
            
            // Toggle expanded class
            this.classList.toggle('expanded');
        });
    });
});