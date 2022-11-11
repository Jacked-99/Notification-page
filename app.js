const UneradPosts = document.querySelectorAll('.unread')
const allRead = document.querySelector('.allread')
const circles = document.querySelectorAll('.circle')
let NumberNotify = UneradPosts.length;

for (let i = 0; i < UneradPosts.length; i++) {
    UneradPosts[i].addEventListener('click', () => {
        UneradPosts[i].classList.remove('unread')
        circles[i].remove();
        let NewUneradPosts = document.querySelectorAll('.unread')
        NumberNotify = NewUneradPosts.length;
        document.querySelector('.NotifyNmr').innerHTML = NumberNotify;
    })

}

allRead.addEventListener('click', () => {
    for (let i = 0; i < UneradPosts.length; i++) {
        UneradPosts[i].classList.remove('unread')
        circles[i].remove();
        let NewUneradPosts = document.querySelectorAll('.unread')
        NumberNotify = NewUneradPosts.length;
        document.querySelector('.NotifyNmr').innerHTML = NumberNotify;
    }
})







