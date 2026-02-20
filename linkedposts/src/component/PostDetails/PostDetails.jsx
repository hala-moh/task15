import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { authContext } from "../../context/AuthContext"

export default function PostDetails() {

  const { id } = useParams()
  const { token } = useContext(authContext)

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  async function getSinglePost() {
    try {
      const { data } = await axios.get(
        `https://route-posts.routemisr.com/posts/${id}`,
        {
          headers: {
            token: token
          }
        }
      )

      setPost(data.data.post)
      setLoading(false)

    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (token) {
      getSinglePost()
    }
  }, [token])

  if (loading) {
    return <h2 className="text-center mt-10 text-xl">Loading...</h2>
  }

  if (!post) {
    return <h2 className="text-center mt-10 text-xl">Post not found</h2>
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6 border">

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={post.user?.photo || "https://i.pravatar.cc/40"}
          alt="profile"
          className="w-14 h-14 rounded-full object-cover border"
        />
        <div>
          <h2 className="font-semibold text-lg">{post.user?.name}</h2>
          <span className="text-sm text-gray-500">{post.privacy}</span>
        </div>
      </div>

      {/* Body */}
      {post.body && (
        <p className="text-gray-800 mb-4 text-lg">
          {post.body}
        </p>
      )}

      {/* Image */}
      {post.image && (
        <img
          src={post.image}
          alt="post"
          className="rounded-lg w-full max-h-96 object-cover mb-4"
        />
      )}

      {/* Stats */}
      <div className="flex justify-between text-gray-500 text-sm border-t pt-3">
        <span>👍 {post.likesCount} Likes</span>
        <span>💬 {post.commentsCount} Comments</span>
        <span>🔁 {post.sharesCount} Shares</span>
      </div>

      {/* Top Comment */}
      {post.topComment && (
        <div className="mt-5 bg-gray-100 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <img
              src={post.topComment.commentCreator?.photo || "https://i.pravatar.cc/30"}
              alt="comment"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-semibold text-sm">
              {post.topComment.commentCreator?.name}
            </span>
          </div>
          <p className="text-sm text-gray-700">
            {post.topComment.content}
          </p>
        </div>
      )}

    </div>
  )
}