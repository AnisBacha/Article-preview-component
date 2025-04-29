const handler = document.getElementById('footer')
const shareIconHandler = document.getElementById('shareIconHandler')
const shareIcon = document.getElementById('shareIcon')
const publisher = document.getElementById('publisher')
const sharingOptions = document.getElementById('sharingOptions')

let isSharingActive = false;

shareIcon.addEventListener("click", function () {

    if(window.innerWidth < 1024){
        !isSharingActive ? publisherState() : sharingState(); 
    } else{
        !isSharingActive ? showSharingOptions() : hideSharingOptions();
        console.log('llll')
    }
    
});

const sharingState = () => {
    handler.classList.add('share-state')
    publisher.style.display = 'none'
    sharingOptions.style.display = 'flex'
    shareIcon.classList.add('share-active')
    shareIcon.style.color = 'white'

    isSharingActive = true;
}

const publisherState = () => {
    handler.classList.remove('share-state')
    publisher.style.display = 'flex'
    sharingOptions.style.display = 'none'
    shareIcon.classList.remove('share-active')
    shareIcon.style.color = '#6E8098'

    isSharingActive = false;
}

const showSharingOptions = () => {
    sharingOptions.style.display = 'flex'
    shareIcon.classList.add('share-active')
    shareIcon.style.color = 'white'
    isSharingActive = true;
}
const hideSharingOptions = () => {
    sharingOptions.style.display = 'none'
    shareIcon.classList.remove('share-active')
    shareIcon.style.color = '#6E8098'
    isSharingActive = false;
}