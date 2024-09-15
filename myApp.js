const videoElement = document.getElementById("video");
const button = document.querySelector(".btn");

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log("error",error);
    }
}

button.addEventListener("click", async ()=>{
    button.disabled = true
    await videoElement.requestPictureInPicture();
    button.disabled = false
})

// onload
selectMediaStream();