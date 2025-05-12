import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import store from './features/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={store} >
  <App/>
</Provider>

  </StrictMode>,
)


// {
//     "users": [
//       {
//         "id": 1,
//         "name": "Aarav Sharma",
//         "dp": "https://randomuser.me/api/portraits/men/1.jpg",
//         "profileImage": "https://randomuser.me/api/portraits/men/21.jpg",
//         "comments": 5,
//         "likes": 20
//       },
//       {
//         "id": 2,
//         "name": "Ishaan Verma",
//         "dp": "https://randomuser.me/api/portraits/men/2.jpg",
//         "profileImage": "https://randomuser.me/api/portraits/men/22.jpg",
//         "comments": 10,
//         "likes": 35
//       },
//       {
//         "id": 3,
//         "name": "Sanya Kapoor",
//         "dp": "https://randomuser.me/api/portraits/women/3.jpg",
//         "profileImage": "https://randomuser.me/api/portraits/women/23.jpg",
//         "comments": 8,
//         "likes": 25
//       },
//       {
//         "id": 4,
//         "name": "Rohan Mehta",
//         "dp": "https://randomuser.me/api/portraits/men/4.jpg",
//         "profileImage": "https://randomuser.me/api/portraits/men/24.jpg",
//         "comments": 12,
//         "likes": 40
//       },
      
//       {
//         "id": 5,
//         "name": "Anaya Singh",
//         "dp": "https://randomuser.me/api/portraits/women/5.jpg",
//         "profileImage": "https://randomuser.me/api/portraits/women/25.jpg",
//         "comments": 15,
//         "likes": 50
//       },
//       {
//         "id": 6,
//         "name": "Kabir Malhotra",
//         "dp": "https://randomuser.me/api/portraits/men/6.jpg",
//         "profileImage": "https://randomuser.me/api/portraits/men/26.jpg",
//         "comments": 6,
//         "likes": 18
//       },
//       {
//         "id": 7,
//         "name": "Diya Bansal",
//         "dp": "https://randomuser.me/api/portraits/women/7.jpg",
//         "profileImage": "https://randomuser.me/api/portraits/women/27.jpg",
//         "comments": 9,
//         "likes": 30
//       },
//       {
//         "id": 8,
//         "name": "Rehan Choudhary",
//         "dp": "https://randomuser.me/api/portraits/men/8.jpg",
//         "profileImage": "https://randomuser.me/api/portraits/men/28.jpg",
//         "comments": 11,
//         "likes": 45
//       },
//       {
//         "id": 9,
//         "name": "Meera Tandon",
//         "dp": "https://randomuser.me/api/portraits/women/9.jpg",
//         "profileImage": "https://randomuser.me/api/portraits/women/29.jpg",
//         "comments": 14,
//         "likes": 60
//       },
//       {
//         "id": 10,
//         "name": "Yuvraj Deshmukh",
//         "dp": "https://randomuser.me/api/portraits/men/10.jpg",
//         "profileImage": "https://randomuser.me/api/portraits/men/30.jpg",
//         "comments": 7,
//         "likes": 22
//       },
//       {
//         "id": 11,
//         "name": "Naira Khanna",
//         "dp": "https://randomuser.me/api/portraits/women/11.jpg",
//         "profileImage": "https://randomuser.me/api/portraits/women/31.jpg",
//         "comments": 13,
//         "likes": 48
//       }
//     ]
//   }
  