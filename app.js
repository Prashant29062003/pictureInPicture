const videoElement = document.getElementById("video");
const button = document.querySelector(".btn");

// Prompt to select media stream, pass to the element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
        }
    }catch(error){
        // Catch Error herer
        console.log("Error here: ",error);
    }
}

button.addEventListener("click", async ()=>{
    // Disable button 
    button.disabled = true;

    // start Picture In Picture
    await videoElement.requestPictureInPicture();

    // Reset Button
    button.disabled = false;
})

// onload
selectMediaStream();