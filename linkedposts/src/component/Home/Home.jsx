// import axios from "axios"
// import { useEffect, useState, useContext } from "react"
// import { Link } from "react-router-dom"
// import { authContext } from "../../context/AuthContext"

// export default function Home() {

//   const [posts, setPosts] = useState([])
//   const [showAll, setShowAll] = useState(false)
//   const { token } = useContext(authContext)

//   async function getPosts() {
//     try {
//       const { data } = await axios.get(
//         "https://route-posts.routemisr.com/posts",
//         {
//           headers: {
//             token: token
//           }
//         }
//       )

//       setPosts(data.data.posts)

//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     if (token) {
//       getPosts()
//     }
//   }, [token])

//   const visiblePosts = showAll ? posts : posts.slice(0, 5)

//   return (
//     <div className="max-w-2xl mx-auto mt-8  space-y-8 ">

//       {visiblePosts.map((post) => (
//         <Link key={post._id} to={`/post/${post._id}`}>
//           <div className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition cursor-pointer ">

//             {/* Header */}
//             <div className="flex items-center gap-3 mb-3">
//               <img
//                 src={post.user?.photo || "https://i.pravatar.cc/40"}
//                 alt="profile"
//                 className="w-12 h-12 rounded-full object-cover border"
//               />
//               <div>
//                 <h2 className="font-semibold text-lg">
//                   {post.user?.name}
//                 </h2>
//                 <span className="text-sm text-gray-500">
//                   {new Date(post.createdAt).toLocaleString()}
//                 </span>
//               </div>
//             </div>

//             {/* Body */}
//             {post.body && (
//               <p className="text-gray-800 mb-3">
//                 {post.body}
//               </p>
//             )}

//             {/* Image */}
//             {post.image && (
//               <img
//                 src={post.image}
//                 alt="post"
//                 className="rounded-lg w-full max-h-96 object-cover"
//               />
//             )}

//             {/* Stats */}
//             <div className="flex justify-between text-sm text-gray-500 mt-4">
//               <span>👍 {post.likesCount}</span>
//               <span>💬 {post.commentsCount}</span>
//               <span>↪ {post.sharesCount}</span>
//             </div>

//           </div>
//         </Link>
//       ))}

//       {/* Show More Button */}
//       {!showAll && posts.length > 5 && (
//         <button
//           onClick={() => setShowAll(true)}
//           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
//         >
//           Show More
//         </button>
//       )}

//     </div>
//   )
// }
import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { authContext } from "../../context/AuthContext"

export default function Home() {

  const [posts, setPosts] = useState([])
  const [showAll, setShowAll] = useState(false)
  const { token } = useContext(authContext)

  async function getPosts() {
    try {
      const { data } = await axios.get(
        "https://route-posts.routemisr.com/posts",
        {
          headers: {
            token: token
          }
        }
      )

      setPosts(data.data.posts)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (token) {
      getPosts()
    }
  }, [token])

  const visiblePosts = showAll ? posts : posts.slice(0, 5)

  return (
    <div className="max-w-2xl mx-auto mt-8 flex flex-col gap-6">

      {visiblePosts.map((post) => (
        <Link key={post._id} to={`/post/${post._id}`}>
          <div className="bg-white shadow-md rounded-2xl p-5 border hover:shadow-xl transition duration-300 cursor-pointer">

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={post.user?.photo || "https://i.pravatar.cc/40"}
                alt="profile"
                className="w-12 h-12 rounded-full object-cover border"
              />
              <div>
                <h2 className="font-semibold text-lg">
                  {post.user?.name}
                </h2>
                <span className="text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Body */}
            {post.body && (
              <p className="text-gray-800 mb-4">
                {post.body}
              </p>
            )}

            {/* Image */}
            {post.image && (
              <img
                src={post.image}
                alt="post"
                className="rounded-xl w-full max-h-96 object-cover mb-4"
              />
            )}

            {/* Stats */}
            <div className="flex justify-between text-sm text-gray-500 pt-3 border-t">
              <span>👍 {post.likesCount}</span>
              <span>💬 {post.commentsCount}</span>
              <span>↪ {post.sharesCount}</span>
            </div>

          </div>
        </Link>
      ))}

      {/* Show More Button */}
      {!showAll && posts.length > 5 && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition duration-300"
        >
          Show More
        </button>
      )}

    </div>
  )
}