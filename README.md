# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![desktop](/screenshots/desktop.png)
![mobile](/screenshots/mobile.png)
![js](/screenshots/all-read.png)

### Links

- Live Site URL:(https://notification-page-rho.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned


I'm proud of this function beacuse i was able to use it for both marking all posts as read and clicking on post

{
    UneradPosts[i].addEventListener('click', () => {
        UneradPosts[i].classList.remove('unread')
        circles[i].remove();
        let NewUneradPosts = document.querySelectorAll('.unread')
        NumberNotify = NewUneradPosts.length;
        document.querySelector('.NotifyNmr').innerHTML = NumberNotify;
    })
**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I'm planning to expand my knowledge of grid and flexbox.

## Author

- Frontend Mentor - [@Jacked-99](https://www.frontendmentor.io/profile/Jacked-99)





