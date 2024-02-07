// Notification List
const notificationsList = [{
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

//Declare variables for elements
const notificationCount = document.querySelector('#notificationCount')
const markAllAsReadAction = document.querySelector('#markAllAsRead')

//Count the amount of notificacions
const countNotifications = () => {
    let count = 0
    notificationsList.forEach(notification => {
        if (notification.active) {
            count += 1
        }
    })
    notificationCount.innerHTML = count

}
countNotifications()

// Mark notification as read 
const markAsRead = index => {
    const container = document.getElementById(notificationsList[index].id);
    container.classList.remove('bg-[#f6fafd]');
    notificationsList[index].active = false;
    countNotifications();
}

//// Mark all notifications as read 
const markAllAsRead = () => {
    notificationsList.forEach((notification) => {
        const container = document.getElementById(notification.id);
        container.classList.remove('bg-[#f6fafd]');
        notification.active = false;
    });

    countNotifications();
}

// Load Notifications
const loadNotifications = () => {

    const main = document.getElementById('main')
    notificationsList.forEach((notification, index) => {
        //create container div
        const container = document.createElement('div');
        
        container.className = notification.active
         ?'bg-[#f6fafd] flex py-4 mx-5 rounded my-2 cursor-pointer'
         : 'flex py-4 mx-5 rounded  my-2 cursor-pointer'

        container.id = notification.id
        //create user image container
        const userImageContainer = document.createElement('div')
        userImageContainer.className = 'mx-5'
        const userImage = document.createElement('img')
        userImage.className = 'w-14 h-14'
        userImage.src = notification.user_image_path
        userImage.alt = notification.user.toLowerCase()
        userImageContainer.appendChild(userImage)

        //create content container
        const contentContainer = document.createElement('div')
        contentContainer.className = 'flex flex-col justify-start items-start'

        //create first column
        const contentFirstCol = document.createElement('div')
        contentFirstCol.className = 'flex'
        const userNameSpan = document.createElement('span')
        userNameSpan.className = 'px-1 font-extrabold text-[#1c202b] hover:text-[#0a317b] cursor-pointer'
        userNameSpan.innerHTML = notification.user
        const interactionParagraph = document.createElement('p')
        interactionParagraph.className = 'text-[16px] text-[#5e6778] font-medium'
        interactionParagraph.innerHTML = notification.interaction
        const contentSpan = document.createElement('span')
        contentSpan.className = 'px-1 font-extrabold text-[#1c202b] hover:text-[#0a317b] cursor-pointer'
        contentSpan.innerHTML = notification.content
        const newNotificationPop = document.createElement('div')
        notification.active ? newNotificationPop.className = 'bg-[#f65351] h-[10px] w-[10px] rounded-full mt-2' : newNotificationPop.className = 'hidden'
        contentFirstCol.appendChild(userNameSpan)
        contentFirstCol.appendChild(interactionParagraph)
        contentFirstCol.appendChild(contentSpan)
        contentFirstCol.appendChild(newNotificationPop)

        //create second column
        const contentSecondCol = document.createElement('div')
        contentSecondCol.className = 'px-1'
        const timeStampSpan = document.createElement('span')
        timeStampSpan.className = 'text-[#939dae]'
        timeStampSpan.innerHTML = notification.timestamp
        contentSecondCol.appendChild(timeStampSpan)

        //create third column
        const contentthirdCol = document.createElement('div')
        contentthirdCol.className = 'hover:bg-[#f6fafd] cursor-pointer my-3 py-4 px-7 max-w-[600px] hover:border-none border-[1px] border-solid border-slate-600 rounded'
        const messageParagraph = document.createElement('p')
        messageParagraph.className = 'text-[16px] text-justify text-[#5e6778] font-medium'
        messageParagraph.innerHTML = notification.message
        contentthirdCol.appendChild(messageParagraph)

        //Apend elements to the content container
        contentContainer.appendChild(contentFirstCol)
        contentContainer.appendChild(contentSecondCol);
        if (notification.message != '') contentContainer.appendChild(contentthirdCol);

        //Append elements to the container
        container.appendChild(userImageContainer)
        container.appendChild(contentContainer)

        container.addEventListener('click', () => {
            markAsRead(index);
        });

        // Append the new container to the main element
        main.appendChild(container)


    })
}
loadNotifications()


markAllAsReadAction.addEventListener('click', markAllAsRead)