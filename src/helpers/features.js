import Clipboard from "../assets/clipboard.svg"
import ProfileIcon from "../assets/profileicon.svg"
import Search from "../assets/search.svg"
import Message from "../assets/message.svg"
import Notification from "../assets/notification.svg"
export const features = [
    {
        title: "User Authentication",
        description: "Secure user registration and login to access personalized content.",
        logo: Clipboard,
        bgGradient: "from-pink-300 via-purple-300 to-indigo-400" //tailwind CSS gradient codes
    },
    {
        title: "User Profiles",
        description: "Allow users to create and customize their profiles with personal information and avatars.",
        logo: ProfileIcon,
        bgGradient: "from-cyan-200 to-cyan-400" //tailwind CSS gradient codes
    },
    {
        title: "Search Functionality",
        description: "Enable users to search for content, users, or products within the application.",
        logo: Search,
        bgGradient: "from-orange-300 to-rose-300" //tailwind CSS gradient codes
    },
    {
        title: "Messaging System",
        description: "Implement real-time chat or messaging for communication between users.",
        logo: Message,
        bgGradient: "from-fuchsia-300 via-green-400 to-rose-700" //tailwind CSS gradient codes
    },
    {
        title: "Notifications",
        description: "Provide notifications for important updates, messages, or activities.",
        logo: Notification,
        bgGradient: "from-teal-200 to-lime-200" //tailwind CSS gradient codes
    },
];
