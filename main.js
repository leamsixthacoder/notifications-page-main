const notificationsList = [
    {
        id: 1, 
        user: 'Mark Webber',
        interaction: 'reacted to your recent post',
        content: 'My first tournament today!',
        timestamp: '1m ago',
        message: '',
        active: true
        
    },
    {
        id: 2, 
        user: 'Angela Gray',
        interaction: 'followed you',
        content: '',
        timestamp: '5m ago',
        message: '',
        active: true
        
    },
    {
        id: 3, 
        user: 'Jacob Thompson',
        interaction: 'has joined your group',
        content: 'Chess Club',
        timestamp: '1 day ago',
        message: '',
        active: true
        
    },
    {
        id: 4, 
        user: 'Rizky Hasanuddin',
        interaction: 'sent you a private message',
        content: '',
        timestamp: '5 days ago',
        message: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
        active: false
        
    },
    {
        id: 5, 
        user: 'Kimberly Smith',
        interaction: 'commented on your picture',
        content: '',
        timestamp: '1 week ago',
        message: '',
        active: false
        
    },
    {
        id: 6, 
        user: 'Nathan Peterson',
        interaction: 'reacted to your recent post',
        content: '5 end-game strategies to increase your win rate',
        timestamp: '2 weeks ago',
        message: '',
        active: false
        
    },
    {
        id: 7, 
        user: 'Anna Kim',
        interaction: 'left the group',
        content: 'Chess Club',
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
    console.log(count)
    notificationCount.innerHTML = count

}
countNotifications()
