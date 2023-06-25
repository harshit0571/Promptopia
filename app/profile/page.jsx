"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@/components/Profile";

const ProfilePage = () => {
  const router = useRouter();
  const [Posts, setPosts] = useState([]);
  const { data: session } = useSession();
  const handleDelete = async (post) => {
    const hasConfirmed = confirm("are you sure you want to delete");
    if (hasConfirmed) {
      try {
        await fetch(`api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });
        const filterPost = Posts.filter((p) => p._id !== post._id);
        setPosts(filterPost);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (session?.user.id) {
      fetchPost();
      console.log(Posts);
    }
  }, []);

  return (
    <Profile
      name="My "
      description="welcome to your personalized page"
      data={Posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
