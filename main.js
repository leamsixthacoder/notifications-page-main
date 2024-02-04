const notificationsList = [
    {
        id: 1, 
        user: 'Mark Webber',
        user_image_path: 'src/assets/images/avatar-mark-webber.webp',
        interaction: 'reacted to your recent post',
        content: 'My first tournament today!',
        content_image_path: '',
        timestamp: '1m ago',
        message: '',
        active: true
        
    },
    {
        id: 2, 
        user: 'Angela Gray',
        user_image_path: 'src/assets/images/avatar-angela-gray.webp',
        interaction: 'followed you',
        content: '',
        content_image_path: '',
        timestamp: '5m ago',
        message: '',
        active: true
        
    },
    {
        id: 3, 
        user: 'Jacob Thompson',
        user_image_path: 'src/assets/images/avatar-jacob-thompson.webp',
        interaction: 'has joined your group',
        content: 'Chess Club',
        content_image_path: '',
        timestamp: '1 day ago',
        message: '',
        active: true
        
    },
    {
        id: 4, 
        user: 'Rizky Hasanuddin',
        user_image_path: 'src/assets/images/avatar-rizky-hasanuddin.webp',
        interaction: 'sent you a private message',
        content: '',
        content_image_path: '',
        timestamp: '5 days ago',
        message: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
        active: false
        
    },
    {
        id: 5, 
        user: 'Kimberly Smith',
        user_image_path: 'src/assets/images/avatar-kimberly-smith.webp',
        interaction: 'commented on your picture',
        content: '',
        content_image_path: '',
        content_image_path: 'src/assets/images/image-chess.webp',
        timestamp: '1 week ago',
        message: '',
        active: false
        
    },
    {
        id: 6, 
        user: 'Nathan Peterson',
        user_image_path: 'src/assets/images/avatar-nathan-peterson.webp',
        interaction: 'reacted to your recent post',
        content: '5 end-game strategies to increase your win rate',
        content_image_path: '',
        timestamp: '2 weeks ago',
        message: '',
        active: false
        
    },
    {
        id: 7, 
        user: 'Anna Kim',
        user_image_path: 'src/assets/images/avatar-anna-kim.webp',
        interaction: 'left the group',
        content: 'Chess Club',
        content_image_path: '',
        timestamp: '2 weeks ago',
        message: '',
        active: false
        
    },

]

const notificationCount = document.querySelector("#notificationCount")

function countNotifications() {
    let count = 0
    notificationsList.forEach(notification => {
        if(notification.active) {
            count+= 1
        }
    })
    notificationCount.innerHTML = count

}
countNotifications()
