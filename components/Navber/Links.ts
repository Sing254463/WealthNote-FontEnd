const links = [
    {
        name: 'Dashboard',
        href: '/dashboard'
    },
    {
        name: 'Lists',
        href: '/lists'
    },
    {
        name: 'Add Items',
        dropdownmenu:[
            {
            name: 'Add item revenue',
            href: '/additem/revenue'
            },
            {
            name: 'Add item expense',
            href: '/additem/expense'
            }
        ]
    }
];

const ProfileManu = [
    {
        name: 'Profile',
        href: '/profile'
    },
    {
        name: 'Settings',
        href: '/settings'
    },
    {
        name: 'Logout',
        href: '/logout'
    }
];
export  {
    links, 
    ProfileManu
};